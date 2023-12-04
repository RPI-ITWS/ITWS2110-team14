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
    console.log(data);
    let listingData = data;
    fetch('get_seller.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `rcs_id=${encodeURIComponent(listingData.rcs_id)}`,
    })
    .then(response => response.json())
    .then(userData => {
      console.log(userData);
      document.getElementById('sellername').textContent = userData.firstName + userData.rcs_id;
    })
    .catch(error => {
      console.error("Error fetching the JSON:", error);
      // window.location.href = "/RPM/pages/marketplace/";
    });

    document.querySelector('.image img').src = listingData.image_path;
    document.getElementById('listingTitle').textContent = listingData.listing_title;
    document.getElementById('condition').textContent = listingData.item_condition;
    document.getElementById('price').textContent = "$" + listingData.price.toFixed(2);
    document.getElementById('listingInfo').textContent = listingData.item_description;
    document.getElementById('sellername').textContent = + listingData.rcs_id;

    })
  .catch(error => {
    console.error("Error fetching the JSON:", error);
    // window.location.href = "/RPM/pages/marketplace/";
  });
});