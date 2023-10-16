import { Listing } from "../components/Listing/Listing.js";

$(document).ready(function () {
  addListingsToMarketplace(getData());
});

function getData() {
  //Pull data from database in json format
  let dataPath = "pathToDB/JSON";
  return fetch(dataPath)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("Could not get data!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function addListingsToMarketplace(currentData) {
  //Add listing object to marketplace
  let listingsTable = currentData[0];
  let listing;
  let pageCount = 1;
  let listingCount = 1;
  const listingLimit = 60;
  for (listing in listingsTable) {
    if (listingsTable.hasOwnProperty(listing)) {
      if (listing["active"]) {
        let imgPath = listing["imgURL"];
        let price = listing["price"];
        let listingTitle = listing["listingTitle"];

        if (listingCount == listingLimit) {
          //Maximum amount of listings have been reached on a page, add items to the next page
          listingCount = 0;
          pageCount += 1;
        }

        $("#marketplace-listings" + pageCount + "-" + listingCount).append(
          Listing(price, listingTitle, imgPath)
        );
        listingCount += 1;
      }
    }
  }
}
