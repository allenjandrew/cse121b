// request animation frame
// - move everything
// - check for collisions
// - (draw the screen)

// Choose random characters
const availableChars = ["sans", "megaman", "ninja", "creeper", "dartmonkey"];
const firstChar = availableChars.splice(
  Math.floor(Math.random() * availableChars.length),
  1
);
const secondChar = availableChars.splice(
  Math.floor(Math.random() * availableChars.length),
  1
);

// Get char1's position
const char1 = document.querySelector("#char1");
char1.src = "images/" + firstChar + "-char.png";
var rect1 = char1.getBoundingClientRect();
// console.log(rect1.top, rect1.right, rect1.bottom, rect1.left);

// Get char2's position
const char2 = document.querySelector("#char2");
char2.src = "images/" + secondChar + "-char.png";
var rect2 = char2.getBoundingClientRect();

// Starting frisbee coordinates
const frisbeeEl = document.querySelector("#frisbee");
var leftBoundX = rect1.left + 100;
var startingY = rect1.top + 100;
frisbeeEl.style.left = leftBoundX + "px";
frisbeeEl.style.top = startingY + "px";

var rightBoundX;
var currentX;
var goalX;
var toRight = true;
var timer;

function moveFrisbee(direction) {
  if (direction == "right") {
    currentX += 1;
  } else {
    currentX -= 1;
  }
  frisbeeEl.style.left = currentX + "px";
}

function throwFrisbeeRight() {
  rightBoundX = rect2.left - char2.width;

  currentX = leftBoundX;
  char1.src = "images/" + firstChar + "-throw.png";

  timer = 0;
  for (i = 0; i < rightBoundX - leftBoundX; i++) {
    setTimeout(moveFrisbee, timer, "right");
    timer += 1;
  }

  setTimeout(() => {
    char1.src = "images/" + firstChar + "-char.png";
  }, 350);
  toRight = false;
}

function throwFrisbeeLeft() {
  rightBoundX = rect2.left - char2.width;

  currentX = rightBoundX;
  char2.src = "images/" + secondChar + "-throw.png";

  timer = 0;
  for (i = 0; i < rightBoundX - leftBoundX; i++) {
    setTimeout(moveFrisbee, timer, "left");
    timer += 1;
  }

  setTimeout(() => {
    char2.src = "images/" + secondChar + "-char.png";
  }, 350);
  toRight = true;
}

document.addEventListener("keypress", (event) => {
  if (toRight) {
    throwFrisbeeRight();
  } else {
    throwFrisbeeLeft();
  }
});
