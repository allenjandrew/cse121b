const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  changeEnrollment: function (add = true) {
    let sectionNum = document.querySelector("#sectionNumber").value;
    console.log("sectionNum: " + sectionNum);
    let currentSection = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    console.log("currentSection: " + currentSection);
    if (add) {
      this.sections[currentSection].enrolled++;
    } else {
      this.sections[currentSection].enrolled--;
    }
    renderSections(aCourse.sections);
  },
};

var sectionTemplate = (section) => {
  //
  return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`;
};

var setCourseInfo = (course) => {
  // get the name and code out of the course object and set it in the HTML
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  nameEl.innerText = course.name;
  codeEl.innerText = course.code;
};

var renderSections = (sections) => {
  // for each section convert the section object into an HTML string ... insert into the DOM
  const sectionsEl = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionsEl.innerHTML = html.join("");
};

setCourseInfo(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", (e) => {
  aCourse.changeEnrollment(true);
});
document.querySelector("#dropStudent").addEventListener("click", (e) => {
  aCourse.changeEnrollment(false);
});
