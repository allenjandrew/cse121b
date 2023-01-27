function getInput(selector) {
  let input = document.querySelector(selector).value;
  let fixedUp = input.trim().toUpperCase().replace(/ /g, "");
  return fixedUp.split(",");
}

function convertToGPAPoints(array) {
  function converter(letterGrade) {
    let points;
    switch (letterGrade) {
      case "A":
        points = 4;
        break;
      case "B":
        points = 3;
        break;
      case "C":
        points = 2;
        break;
      case "D":
        points = 1;
        break;
      default:
        points = 0;
        break;
    }
    return points;
  }
  return array.map(converter);
}

function averageArray(array) {
  let sum = 0;
  array.forEach((value) => {
    sum += value;
  });
  return sum / array.length;
}

function getGradesOnClick() {
  let result = averageArray(convertToGPAPoints(getInput("#grades"))).toFixed(2);
  document.querySelector("#output").innerText = "GPA: " + result;
}

document
  .querySelector("#submitButton")
  .addEventListener("click", getGradesOnClick);

console.log(convertToGPAPoints(["A", "B", "C"]));
