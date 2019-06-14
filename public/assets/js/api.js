//Global variables
const apiKey = "17451c0032296d12482577496344c284";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "community-food2fork.p.rapidapi.com",
    "X-RapidAPI-Key": apiKey
  }
};

$("#apiSubmit").click(function () {
  event.preventDefault();
  var ingredient = $("#apiSearchEntry").val();
    axios
      .get(`https://www.food2fork.com/api/search?key=${apiKey}&q=${ingredient}`, options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });
