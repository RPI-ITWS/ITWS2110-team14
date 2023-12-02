// script.js

document.addEventListener("DOMContentLoaded", function() {
  let id = localStorage.getItem('selectedListingId');
  if (id) {
    console.log("Looking at listing ID:", id);
  }
  else {
    window.location.href = "/RPM/pages/marketplace/";
  }

  fetch('get_listing.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `id=${encodeURIComponent(id)}`,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const listingData = data.listings[id];
    
    console.log(listingData);

    document.querySelector('.image img').src = listingData.imgURL;
    document.getElementById('listingTitle').textContent = listingData.LISTING_TITLE;
    document.getElementById('condition').textContent = listingData.CONDITION;
    document.getElementById('price').textContent = "$" + listingData.PRICE.toFixed(2);
    document.getElementById('listingInfo').textContent = listingData.ITEM_DESCRIPTION;
    })
  .catch(error => {
    console.error("Error fetching the JSON:", error);
    // window.location.href = "/RPM/pages/marketplace/";
  });
});