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
        
        let lectures_json = courses["Websys_course"]["Lectures"];
        let labs_json = courses["Websys_course"]["Labs"];

        console.log("test 1");
        lectures_json.forEach(element => { // error on this line
            console.log("test 2");
            console.log(element);
            let new_element = document.createElement("li");
            new_element.innerHTML = element["title"];
            lectures_list.appendChild(new_element);
        });

        
        
    });
});