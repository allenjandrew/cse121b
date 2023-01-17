const myList = ["one", "two", "three"];

function listTemplate(item) {
  return `<li>${item}</li>`;
}

const html = myList.map(listTemplate);
console.log(html);

const listElement = document.querySelector("#myList");
listElement.innerHTML = html.join("");

const grades = ["A", "B", "A"];
function convertToGPAPoints(grade) {
  let points = 0;
  switch (grade) {
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
    case "F":
      points = 0;
      break;
    default:
      points = -1;
  }
}

const pointsArray = grades.map(convertToGPAPoints);
