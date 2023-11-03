// script.js

window.addEventListener('load', function() {
  fetch("../courses.json")
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(courses => {
    let lectures_list = document.getElementById("items-lectures");
    let labs_list = document.getElementById("items-labs");
        
    let lectures_json = courses["Websys_course"][0]["Lectures"];
    let labs_json = courses["Websys_course"][0]["Labs"];

    let i = 1;
    for (let lectureKey in lectures_json) {
      let new_element = document.createElement("li");

      new_element.innerHTML = "<a href='#'>Lecture " + i + "</p>";
      new_element.id = "lecture" + i;

      new_element.addEventListener("click", function() {
        lectureClicked(lectures_json[lectureKey]);
      });

      lectures_list.appendChild(new_element);
      i += 1;
    }

    i = 1;
    for (let labKey in labs_json) {
      let new_element = document.createElement("li");

      new_element.innerHTML = "<a href='#'>Lab " + i + "</p>";
      new_element.id = "lab" + i;

      new_element.addEventListener("click", function() {
        labClicked(labs_json[labKey]);
      });

      labs_list.appendChild(new_element);
      i += 1;
    }

    lectures_list.style.visibility = "visible";
    labs_list.style.visibility = "visible";
  });
});

function lectureClicked(lecture) {
  console.log("Clicked on lecture: " + lecture.title);
}

function labClicked(lab) {
  console.log("Clicked on lab: " + lab.title);
}