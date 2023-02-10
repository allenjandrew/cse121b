// request animation frame
// - move everything
// - check for collisions
// - (draw the screen)

var leftChar;
var rightChar;
var toRightGlobal = true;
var leftFrisbeeStop;
var rightFrisbeeStop;
var currentX;

// Choose random characters
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
  char1.src = `images/${leftChar}-char.png`;

  // Set char 2 image
  let char2 = document.querySelector("#char2");
  char2.src = `images/${rightChar}-char.png`;

  // Starting frisbee coordinates
  const frisbeeEl = document.querySelector("#frisbee");
  frisbeeEl.style.left =
    char1.getBoundingClientRect().right - char1.width / 3 + "px";
  frisbeeEl.style.top = char1.getBoundingClientRect().top + 100 + "px";

  toRightGlobal = true;
  document.activeElement.blur();

  leftFrisbeeStop = char1.getBoundingClientRect().right - char1.width / 3;
  console.log(
    char1.getBoundingClientRect().right,
    char1.width,
    char1.width / 3,
    leftFrisbeeStop,
    frisbeeEl.width
  );
  rightFrisbeeStop =
    char2.getBoundingClientRect().left + char2.width / 3 - frisbeeEl.width;
}

function moveFrisbee(toRight) {
  if (toRight) {
    currentX += 1;
  } else {
    currentX -= 1;
  }
  document.querySelector("#frisbee").style.left = currentX + "px";
}

function throwFrisbee(toRight) {
  // Set to throwing sprite
  let charEl;
  let charName;

  if (toRight) {
    charEl = document.querySelector("#char1");
    charName = leftChar;
    currentX = leftFrisbeeStop;
  } else {
    charEl = document.querySelector("#char2");
    charName = rightChar;
    currentX = rightFrisbeeStop;
  }
  charEl.src = `images/${charName}-throw.png`;

  // Move frisbee
  let timer = 0;
  for (i = 0; i < rightFrisbeeStop - leftFrisbeeStop; i++) {
    setTimeout(moveFrisbee, timer, toRight);
    timer += 1;
  }

  // Set back to standing sprite
  setTimeout(() => {
    charEl.src = `images/${charName}-char.png`;
  }, 350);
}

document.addEventListener("keypress", (event) => {
  throwFrisbee((toRight = toRightGlobal));
  toRightGlobal = !toRightGlobal;
});

document.querySelector("#new-chars").addEventListener("click", loadNewChars);

setTimeout(loadNewChars, 1);
