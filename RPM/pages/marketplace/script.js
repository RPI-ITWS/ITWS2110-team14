// script.js

document.addEventListener("DOMContentLoaded", function() {
  fetch('get_listings.php?category=All')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const listingsElement = document.querySelector('.listings');

      for (let id in data) {
        const listing = data[id];

        // Only process active listings
        if (listing.active) {
          const listingDiv = document.createElement('div');
          listingDiv.className = 'listing';
          console.log(listing.listing_id);
          listingDiv.setAttribute('data-id', listing.listing_id);
          
          const listingURL = `/RPM/pages/marketplace/listing/`;

          listingDiv.innerHTML = `
            <a href="${listingURL}" class="listing-link">
              <div class="image">
                <div class="image-content">
                  <img src="${listing.image_path}" alt="${listing.listing_title}">
                </div>
              </div>
              <div class="price"><h4>${listing.listing_title} - $${listing.price.toFixed(2)}</h4></div>
              <div class="description"><p>${listing.item_description}</p></div>
            </a>
          `;

          // Store id so the page knows which item clicked
          listingDiv.addEventListener('click', function() {
            localStorage.setItem('selectedListingId', listing.listing_id);
          });

          listingsElement.appendChild(listingDiv);
        }
      }
    })
    .catch(error => {
      console.error("Error fetching the JSON:", error);
    });
});