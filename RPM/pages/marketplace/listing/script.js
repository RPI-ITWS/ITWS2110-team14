// script.js

document.addEventListener("DOMContentLoaded", function() {
    let id = localStorage.getItem('selectedListingId');
    
    if (id) {
      console.log(id);
    } else {
      console.log("none found");
    }
});