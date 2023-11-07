// script.js

window.addEventListener('load', function() {
  fetch("/lab6/globals/data/courses.json")
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

    createListItems(lectures_json, lectures_list, "Lecture", lectureClicked);
    lectures_list.style.visibility = "visible";

    createListItems(labs_json, labs_list, "Lab", labClicked);
    labs_list.style.visibility = "visible";

    document.getElementById("content-data").style.visibility = 'visible';
    document.getElementById("content-divider").style.display = 'block';
  });
});

function lectureClicked(lecture) {
  let content = document.getElementById("content-data");
  content.innerHTML = "<h2>" + lecture.title + "</h2>";
  content.innerHTML += "<p>" + lecture.description + "</p>";

  let links = content.links;
}

function labClicked(lab) {
  let content = document.getElementById("content-data");
  content.innerHTML = "<h2>" + lab.title + "</h2>";
  content.innerHTML += "<p>" + lab.description + "</p>";
}

function createListItems(itemJson, itemList, itemPrefix, clickHandler) {
  let i = 1;
  for (let itemKey in itemJson) {
    let new_element = document.createElement("li");
    let link = document.createElement("a");

    link.href = 'javascript:void(0);';
    link.textContent = itemPrefix + " " + i;
    link.addEventListener("click", (function(key) {
      return function() {
        clickHandler(itemJson[key]);
      }
    })(itemKey));

    new_element.appendChild(link);
    new_element.id = itemPrefix.toLowerCase() + i;

    itemList.appendChild(new_element);
    i += 1;
  }
}