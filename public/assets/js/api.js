//Global variables
const apiKey = "c09b3e51cf34eefb52153e61aaba7013";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "community-food2fork.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey
  }
};

$("#apiSubmit").click(() => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  console.log("Submit clicked");
  const ingredient = $("#apiSearchEntry").val();
  axios
    .get(
      `https://www.food2fork.com/api/search?key=${apiKey}&q=${ingredient}`,
      options
    )
    .then(response => {
      const apiRecipe = $("#apiResults");
      console.log(response);
      for (let i = 0; i < 10; i++) {
        apiRecipe.append(`<h2>${response.data.recipes[i].title}</h2>`);
        console.log(response.data.recipes[i].title);
        apiRecipe.append(
          `<a href="${
            response.data.recipes[i].f2f_url
          }"><img class="recipe-images" src='${
            response.data.recipes[i].image_url
          }'</a>`
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
  $("#apiResults").show();
});
