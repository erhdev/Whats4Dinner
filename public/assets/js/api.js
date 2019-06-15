/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// Global variables
const apiKey = '17451c0032296d12482577496344c284';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'community-food2fork.p.rapidapi.com',
    'X-RapidAPI-Key': apiKey,
  },
};

$('#apiSubmit').click(() => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  console.log('Submit clicked');
  const ingredient = $('#apiSearchEntry').val();
  axios
    .get(
      `https://www.food2fork.com/api/search?key=${apiKey}&q=${ingredient}`,
      options,
    )
    .then((response) => {
      const apiRecipe = $('#apiResults');
      console.log(response);
      for (let i = 0; i < 10; i++) {
        apiRecipe.append(`<h2>${response.data.recipes[i].title}</h2>`);
        console.log(response.data.recipes[i].title);
        apiRecipe.append(
          `<a href="${
            response.data.recipes[i].f2f_url
          }"><img class="recipe-images" src='${
            response.data.recipes[i].image_url
          }'</a>`,
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
  $('#apiResults').show();
});
