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
  let listingsTable = currentData[0];
  let userTable = currentData[1];
  let listing;
  for (listing in listingsTable) {
    if (listingsTable.hasOwnProperty(listing)) {
    }
  }
}
