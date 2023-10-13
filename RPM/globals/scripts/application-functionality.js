import { Marketplace_Listings } from "./marketplace-lisitings.js";

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
  let lisitingsTable = currentData[0];
  let userTable = currentData[1];
  for (let i = 0; )
}
