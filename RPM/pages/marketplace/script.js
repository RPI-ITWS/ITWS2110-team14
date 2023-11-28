// script.js

document.addEventListener("DOMContentLoaded", function() {
  fetch('items.json')
    .then(response => response.json())
    .then(data => {
      const listingsElement = document.querySelector('.listings');

      for (let id in data.listings) {
        const listing = data.listings[id];

        // Only process active listings
        if (listing.ACTIVE) {
          const listingDiv = document.createElement('div');
          listingDiv.className = 'listing';
          console.log(id);
          listingDiv.setAttribute('data-id', id);
          
          const listingURL = `/RPM/pages/marketplace/listing/`;

          listingDiv.innerHTML = `
            <a href="${listingURL}" class="listing-link">
              <div class="image">
                <div class="image-content">
                  <img src="${listing.imgURL}" alt="${listing.LISTING_TITLE}">
                </div>
              </div>
              <div class="price"><h4>${listing.LISTING_TITLE} - $${listing.PRICE.toFixed(2)}</h4></div>
              <div class="description"><p>${listing.ITEM_DESCRIPTION}</p></div>
            </a>
          `;

          // Store id so the page knows which item clicked
          listingDiv.addEventListener('click', function() {
            localStorage.setItem('selectedListingId', id);
          });

          listingsElement.appendChild(listingDiv);
        }
      }
    })
    .catch(error => {
      console.error("Error fetching the JSON:", error);
    });
});