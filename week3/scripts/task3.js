/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2) {
  // Step 2: In the function, return the sum of the parameters number1 and number2

  return parseInt(number1) + parseInt(number2);
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
  number1 = document.querySelector("#addend1").value;
  number2 = document.querySelector("#addend2").value;

  // Step 4: Assign the return value to an HTML form element with an ID of sum

  document.querySelector("#sum").value = add(number1, number2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

let subtract = function (number1, number2) {
  return parseInt(number1) - parseInt(number2);
};

let subtractNumbers = function () {
  number1 = document.querySelector("#minuend").value;
  number2 = document.querySelector("#subtrahend").value;
  document.querySelector("#difference").value = subtract(number1, number2);
};

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

let multiply = (number1, number2) => parseInt(number1) * parseInt(number2);

let multiplyNumbers = () => {
  number1 = document.querySelector("#factor1").value;
  number2 = document.querySelector("#factor2").value;
  document.querySelector("#product").value = multiply(number1, number2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

let divide = (number1, number2) => parseInt(number1) / parseInt(number2);

let divideNumbers = () => {
  number1 = document.querySelector("#dividend").value;
  number2 = document.querySelector("#factor2").value;
  document.querySelector("#quotient").value = divide(number1, number2);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

let date = new Date();

// Step 2: Declare a variable to hold the current year

let year;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

year = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbersArray = [];
for (let i = 1; i <= 25; i++) {
  numbersArray.push(i);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.querySelector("#array").innerHTML = numbersArray.join(", ");

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

let filteredArray = numbersArray.filter((checkOdd) => checkOdd % 2 === 1);
document.querySelector("#odds").innerHTML = filteredArray.join(", ");

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let filteredArray2 = numbersArray.filter((checkEven) => checkEven % 2 === 0);
document.querySelector("#evens").innerHTML = filteredArray2.join(", ");

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

let sumOfArray = numbersArray.reduce((total, toAdd) => (total += toAdd));
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

let multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray.join(", ");

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

let sumOfMultiplied = numbersArray
  .map((number) => number * 2)
  .reduce((total, toAdd) => (total += toAdd));
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;
