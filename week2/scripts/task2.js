/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var username = "Andrew Allen";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = username;

// Step 3: declare and instantiate a variable to hold the current year
var currentTime = new Date();
var currentYear = currentTime.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
var imageName = "images/steadyblaze.jpeg";
var imageAlt = "little flame boi with a cute little smile";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", imageName);
document.querySelector("img").setAttribute("alt", imageAlt);
document.querySelector("img").setAttribute("width", 200);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favFoods = [
  "pizza",
  "ice cream",
  "burritos",
  "[any fruit] pie",
  "cheese & broccoli soup",
  "hamburger stroganoff",
];

// Step 2: place the values of the favorite foods variable into the HTML file
var favFoodsHTML = "";
favFoods.forEach((food) => {
  favFoodsHTML += `<li>${food}</li>`;
});
document.querySelector("#food").innerHTML = favFoodsHTML;

// // Step 3: declare and instantiate a variable to hold another favorite food
// var anotherFood = "hamburgers";

// // Step 4: add the variable holding another favorite food to the favorite food array
// favFoods.push(anotherFood);

// // Step 5: repeat Step 2
// document.querySelector("#food").textContent = favFoods;

// // Step 6: remove the first element in the favorite foods array
// favFoods.shift();

// // Step 7: repeat Step 2
// document.querySelector("#food").textContent = favFoods;

// // Step 8: remove the last element in the favorite foods array
// favFoods.pop();

// // Step 7: repeat Step 2
// document.querySelector("#food").textContent = favFoods;
