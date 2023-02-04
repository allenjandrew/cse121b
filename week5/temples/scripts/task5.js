/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const todayDate = new Date();

// Step 2: Declare another variable to hold the day of the week
var weekday;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
weekday = todayDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
var message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (1 <= weekday <= 5) {
  message = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  message = "Woohoo! It's the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var weekdayStr;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (weekday) {
  case 0:
    weekdayStr = "Sunday";
    break;
  case 1:
    weekdayStr = "Monday";
    break;
  case 2:
    weekdayStr = "Tuesday";
    break;
  case 3:
    weekdayStr = "Wednesday";
    break;
  case 4:
    weekdayStr = "Thursday";
    break;
  case 5:
    weekdayStr = "Friday";
    break;
  case 6:
    weekdayStr = "Saturday";
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = weekdayStr;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
var templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
var output = function (templesList) {
  templesList.forEach((temple) => {
    // - Creates an HTML <article> element
    var article = document.createElement("article");
    // - Creates an HTML <h3> element and add the temple's templeName property to it
    var h3Name = document.createElement("h3");
    h3Name.textContent = temple.templeName;
    // - Creates an HTML <h4> element and add the temple's location property to it
    var h4Location = document.createElement("h4");
    h4Location.textContent = temple.location;
    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    var h4Dedicated = document.createElement("h4");
    h4Dedicated.textContent = temple.dedicated;
    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    var imgTemple = document.createElement("img");
    imgTemple.src = temple.imageUrl;
    imgTemple.alt = temple.templeName;
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    article.appendChild(h3Name);
    article.appendChild(h4Location);
    article.appendChild(h4Dedicated);
    article.appendChild(imgTemple);
    // - Appends the <article> element to the HTML element with an ID of temples
    document.querySelector("#temples").appendChild(article);
  });
};

// Step 3: Create another function called getTemples. Make it an async function.
var getTemples = async function () {
  // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
  let results = await fetch(
    "https://byui-cse.github.io/cse121b-course/week05/temples.json"
  );
  // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
  if (results.ok) {
    templeList = await results.json();
  }
  // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
  output(templeList);
};

getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
var reset = function () {
  document.querySelector("#temples").innerHTML = "";
};

// Step 8: Declare a function named sortBy that does the following:
var sortBy = function () {
  // - Calls the reset function
  reset();
  // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
  let sortValue = document.querySelector("#sortBy").value;
  if (sortValue == "templeNameAscending") {
    templeList.sort((a, b) => (a.templeName > b.templeName ? 1 : -1));
  } else {
    templeList.sort((a, b) => (b.templeName > a.templeName ? 1 : -1));
  }
  // - Calls the output function passing in the sorted list of temples
  output(templeList);
};

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
