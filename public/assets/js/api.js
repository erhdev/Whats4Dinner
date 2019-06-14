//Global variables
const axios = require("axios");
let ingredient = "chicken";
const apiKey = "17451c0032296d12482577496344c284";
const url = "https://www.food2fork.com/api/get?key=" + apiKey + "q=" + ingredient;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "community-food2fork.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey
  }
};


  $("#apiSubmit").on("click", function(event) {
    let ingredient = $(this).data("api-entry");
    axios
      .get(url, options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
