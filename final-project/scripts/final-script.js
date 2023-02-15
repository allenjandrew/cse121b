// request animation frame
// - move everything
// - check for collisions
// - (draw the screen)

// Global variables
var leftChar;
var rightChar;
var toRightBool = true;
var thrownBool = false;
var playableBool = true;
var leftFrisbeeStop;
var rightFrisbeeStop;
var frisbeeBaseY;
var currentX;
var currentY;
var timeouts = [];
var scoreCounter = 0;
var highScore = 0;

// Function definitions
function loadNewChars() {
  // Set chars list
  const availableChars = ["sans", "megaman", "ninja", "creeper", "dartmonkey"];

  // Randomly pick char 1
  leftChar = availableChars.splice(
    Math.floor(Math.random() * availableChars.length),
    1
  );
  // Randomly pick char 2
  rightChar = availableChars.splice(
    Math.floor(Math.random() * availableChars.length),
    1
  );

  // Set char 1 image
  let char1 = document.querySelector("#char1");
  char1.src = `images/characters/${leftChar}-char.png`;
  char1.alt = `Character 1 - ${leftChar}`;

  // Set char 2 image
  let char2 = document.querySelector("#char2");
  char2.src = `images/characters/${rightChar}-char.png`;
  char2.alt = `Character 2 - ${rightChar}`;

  const frisbeeEl = document.querySelector("#frisbee");

  leftFrisbeeStop = char1.getBoundingClientRect().right - char1.width / 3;
  rightFrisbeeStop =
    char2.getBoundingClientRect().left + char2.width / 3 - frisbeeEl.width;
  frisbeeBaseY = char1.getBoundingClientRect().top + 100;

  resetFrisbee();

  toRightBool = true;
  thrownBool = false;
  document.activeElement.blur();
}

function loadNewStage() {
  const availableStages = [
    "battlefield",
    "cityair",
    "citynight",
    "citypink",
    "deserttree",
    "rundown",
    "spaceearth",
  ];

  stage = availableStages.splice(
    Math.floor(Math.random() * availableStages.length),
    1
  );

  backgroundEl = document.querySelector("#background-img");
  backgroundEl.src = `images/stages/${stage}-stage.jpg`;
  backgroundEl.alt = `background stage - ${stage}`;

  document.activeElement.blur();
}

function resetFrisbee() {
  const frisbeeEl = document.querySelector("#frisbee");
  frisbeeEl.style.left = leftFrisbeeStop + "px";
  frisbeeEl.style.top = frisbeeBaseY + "px";
}

function moveFrisbee(toRight) {
  let speed = 1 + scoreCounter / 25;

  if (toRight) {
    currentX += speed;
  } else {
    currentX -= speed;
  }

  // console.log(currentX, leftFrisbeeStop, rightFrisbeeStop, currentY);
  if (currentX - leftFrisbeeStop < (rightFrisbeeStop - leftFrisbeeStop) / 3) {
    if (toRight) {
      currentY -= 1;
    } else {
      currentY += 1;
    }
  } else if (
    currentX - leftFrisbeeStop >
    ((rightFrisbeeStop - leftFrisbeeStop) * 2) / 3
  ) {
    if (toRight) {
      currentY += 1;
    } else {
      currentY -= 1;
    }
  }

  if (currentY > frisbeeBaseY + 90) {
    currentY = frisbeeBaseY + 90;
  }

  const frisbeeEl = document.querySelector("#frisbee");
  frisbeeEl.style.left = currentX + "px";
  frisbeeEl.style.top = currentY + "px";

  if (window.innerWidth - currentX < frisbeeEl.width || currentX < 1) {
    youLose();
  }
}

function throwFrisbee(toRight) {
  let charEl;
  let charName;

  // Set to throwing sprite
  if (toRight) {
    charEl = document.querySelector("#char1");
    charName = leftChar;
    currentX = leftFrisbeeStop;
  } else {
    charEl = document.querySelector("#char2");
    charName = rightChar;
    currentX = rightFrisbeeStop;
  }
  charEl.src = `images/characters/${charName}-throw.png`;

  currentY = frisbeeBaseY;

  // Move frisbee with timeout
  let timer = 0;
  console.log(window.innerWidth, window.outerWidth, rightFrisbeeStop);
  for (i = 0; i < window.innerWidth; i++) {
    timeouts.push(setTimeout(moveFrisbee, timer, toRight));
    timer += 2;
  }

  // Set back to standing sprite after timeout
  setTimeout(() => {
    charEl.src = `images/characters/${charName}-char.png`;
  }, 350);

  // Hide intro box
  document.querySelector("#intro-box").classList.add("hidden");
}

function catchFrisbee(toRight) {
  if (toRight) {
    stopper = rightFrisbeeStop;
  } else {
    stopper = leftFrisbeeStop;
  }

  if (Math.abs(currentX - stopper - 25) <= 75) {
    timeouts.forEach((timerID) => {
      clearTimeout(timerID);
    });
    timeouts = [];

    document.querySelector("#frisbee").style.left = stopper + "px";
    document.querySelector("#frisbee").style.top = frisbeeBaseY + "px";
    scoreCounter++;
  } else {
    youLose();
  }
}

function youLose() {
  if (scoreCounter > highScore) {
    highScore = scoreCounter;
  }
  if (playableBool) {
    document.querySelector("#you-lose").classList.remove("hidden");
    document.querySelector("#intro-box").classList.remove("hidden");
    document.querySelector(
      "#score-count"
    ).innerHTML = `You suck!</br>Score: ${scoreCounter}</br>High Score: ${highScore}`;

    scoreCounter = 0;
    playableBool = false;
  }
}

// Event listeners
document.addEventListener("keypress", () => {
  if (playableBool) {
    if (thrownBool) {
      catchFrisbee(toRightBool);
      toRightBool = !toRightBool;
      thrownBool = !thrownBool;
    } else {
      throwFrisbee((toRight = toRightBool));
      thrownBool = !thrownBool;
    }
  }
});

document.querySelector("#new-chars").addEventListener("click", loadNewChars);

document.querySelector("#reset-button").addEventListener("click", () => {
  document.querySelector("#you-lose").classList.add("hidden");
  resetFrisbee();
  toRightBool = true;
  thrownBool = false;
  playableBool = true;
});

document.querySelector("#new-stage").addEventListener("click", loadNewStage);

// Run on setup
window.addEventListener("load", () => {
  loadNewChars();
  loadNewStage();
});
