// script.js

document.addEventListener("DOMContentLoaded", function() {
  console.log('Page loaded');
  fetchListings('All');

  const categories = document.querySelectorAll('.categories a');
  categories.forEach(category => {
    category.addEventListener('click', function(event) {
      event.preventDefault();
      const category = event.target.getAttribute('data-category');
      console.log('Category clicked:', category);
      fetchListings(category);
    });
  });
});

function fetchListings(category) {
  fetch(`get_listings.php?category=${category}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const listingsElement = document.querySelector('.listings');
      listingsElement.innerHTML = ''; // Clear existing listings

      // If data is an empty array, display a message and fetch all listings
      if (data.length === 0) {
        alert('No results found. Displaying All listings.');
        fetchListings('All');
        return;
      }

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
              <button class="btn btn-primary" id="remove-button">Remove</button>
            </a>
          `;

          // Store id so the page knows which item clicked
          listingDiv.addEventListener('click', function() {
            localStorage.setItem('selectedListingId', listing.listing_id);
          });
          
          const removeButton = listingDiv.querySelector('#remove-button');
          removeButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the browser from following the link
            event.stopPropagation(); // Prevent the click event from bubbling up to the listingDiv
            
            fetch('remove_listing.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: 'listing_id=' + encodeURIComponent(listing.listing_id),
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              if (data.success) {
                // If the request was successful, remove the listingDiv from the DOM
                listingsElement.removeChild(listingDiv);

                // Display a success message
                alert(data.message);
              } else {
                // Handle the error
                console.error(data.message);
              }
            })
            .catch(error => {
              console.error('An error occurred: ', error);
            });
          });

          listingsElement.appendChild(listingDiv);
        }

      }
    });
}