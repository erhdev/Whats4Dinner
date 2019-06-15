//Global variables
const apiKey = key.API_KEY;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "community-food2fork.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey
  }
};

$("#apiSubmit").click(function() {
  event.preventDefault();
  console.log("Submit clicked");
  var ingredient = $("#apiSearchEntry").val();
  axios
    .get(
      `https://www.food2fork.com/api/search?key=${apiKey}&q=${ingredient}`,
      options
    )
    .then(response => {
      var apiRecipe = $("#apiResults");
      console.log(response);
      for (var i = 0; i < 10; i++) {
        apiRecipe.append(`<h2>${response.data.recipes[i].title}</h2>`);
        console.log(response.data.recipes[i].title);
        apiRecipe.append(
          `<a href="${
            response.data.recipes[i].f2f_url
          }"><img class="recipe-images" src='${
            response.data.recipes[i].image_url
          }'</a>`
        );
        // console.log(response.data.recipes[i].f2f_url);
        // apiRecipe.append(`<img class="recipe-images" src='${response.data.recipes[i].image_url}'></img>`);
        // console.log(response.data.recipes[i].image_url);
      }
    })
    .catch(error => {
      console.log(error);
    });
  $("#apiResults").show();
});
