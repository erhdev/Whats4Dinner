//Global variables
const axios = require("axios");
let ingredient = "";
const apiKey = "c13f6b9c29mshacae678a7d2f47cp14ffecjsn26928bb60cb5";
const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" +
  ingredient;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey
  }
};

$(function() {
    $(".api-entry").on("click", function(event) {
      var ingredient = $(this).data("api-entry");
    });
    

axios
  .get(url, options)
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log(error));
