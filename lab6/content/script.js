// script.js

function fill_class_content() {
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
        
        let lectures_json = courses["Websys_course"]["Lectures"];
        let labs_json = courses["Websys_course"]["Labs"];

        for (let num = 1; num < Object.keys(lectures_json); num++) {
            
        }

        let new_element = document.createElement("li");
        
    });
}