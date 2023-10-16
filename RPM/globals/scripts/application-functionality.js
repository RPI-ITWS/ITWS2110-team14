import { Listing } from "../components/listing/listing.js";

$(document).ready(function () {
  addListingsToMarketplace(getData());
  loadListingData(directToListing(getData)[0], directToListing(getData)[1]);
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
  let listingsTable = currentData["listings"];
  let listing;
  // let listingCount = 1;
  // const listingRowLimit = 6;
  for (listing in listingsTable) {
    if (listingsTable.hasOwnProperty(listing)) {
      if (listing["active"]) {
        let imgURL = listing["imgURL"];
        let price = listing["price"];
        let listingID = listing["listingID"];
        let listingTitle = listing["listingTitle"];

        $("#marketplace-listings").append(
          Listing(listingTitle, listingID, price, imgURL)
        );
        // listingCount += 1;
      }
    }
  }
}

function directToListing(currentData) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("listingID");
  let clickedListing = lisitingID;
  let listing = currentData["listings"][clickedListing];
  let rcsID = listing["rcsID"];
  let user;

  for (u in currentData["users"]) {
    if (currentData["users"].hasOwnProperty(u)) {
      if (u["rcsID"] === rcsID) {
        user = u["firstName"] + " " + u["lastName"];
        break;
      }
    }
  }

  let output = [listing, user];
  return output;
}

function loadListingData(listing, user) {
  let imgURL = listing["imgURL"];
  let price = listing["price"];
  let listingTitle = listing["listingTitle"];
  let seller = user;
  let description = listing["description"];

  $("#pageTitle").append(listingTitle);
  $("#listingImage").attr("src", imgURL);
  $("#listingTitle").append(listingTitle);
  $("#seller").append(seller);
  $("#price").append(price);
  $("#listingInfo").append(description);
}
