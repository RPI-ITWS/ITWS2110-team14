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

    category.addEventListener('mouseover', function(event) {
      event.target.style.color = '#4670fc';
      event.target.parentNode.style.color = '#4670fc';
    });

    category.addEventListener('mouseout', function(event) {
      event.target.style.color = '';
      event.target.parentNode.style.color = '';
    });
  });

  const searchForm = document.querySelector('form');
  const searchBar = document.querySelector('input[name="listing_title"]');

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchString = searchBar.value;
    searchListings(searchString);
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
          appendListing(listing, listingsElement);
        }
      }
    });
}

function searchListings(searchString) {
  fetch(`search.php?listing_title=${searchString}`)
    .then(response => response.json())
    .then(data => {
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
          appendListing(listing, listingsElement);
        }
      }
    });
}

function appendListing(listing, listingsElement){
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

