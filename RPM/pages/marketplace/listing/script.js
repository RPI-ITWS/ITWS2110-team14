// script.js

document.addEventListener("DOMContentLoaded", function() {
  let id = localStorage.getItem('selectedListingId');
  if (id) {
    console.log("Looking at listing ID:", id);
  }
  else {
    window.location.href = "/RPM/pages/marketplace/";
  }

  fetch('../items.json')
    .then(response => response.json())
    .then(data => {
      const listingData = data.listings[id];
      
      console.log(listingData);

      document.querySelector('.image img').src = listingData.imgURL;
      document.getElementById('listingTitle').textContent = listingData.listingTitle;
      document.getElementById('condition').textContent = listingData.condition;
      document.getElementById('price').textContent = "$" + listingData.price.toFixed(2);
      document.getElementById('listingInfo').textContent = listingData.description;
    })
    .catch(error => {
      console.error("Error fetching the JSON:", error);
      window.location.href = "/RPM/pages/marketplace/";
    });
});