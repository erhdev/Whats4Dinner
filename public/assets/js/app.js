new Vue({
  el: "#root",
  template: `
    <div>
        <p v-if="error">{{ error }}</p>
        <h1 class="center">These are the found recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.id">
            <h5 class="center">{{ recipe.name }}</h5>
            <ul>
                <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
            </ul>
        </div>
    </div>
    `,

  created: function() {
    axios
      .get("/api/recipes")
      .then(response => {
        recipes = response.data;
      })
      .catch(err => {
        console.log(err);
        this.error = "There was an error fetching recipes";
      });
  },
  // we need a way to put the retrived data into this 
  data: {
    error: null,
    recipes: [
      {
        id: 1,
        name: "Chicken Bryan",
        category: "Italian",
        ingredients: ["chicken", "tomatoes", "lemon", "garlic", "basil"]
      },
      {
        id: 2,
        name: "Shrimp Scampi",
        category: "Seafood",
        ingredients: [
          "shrimp",
          "butter",
          "lemon",
          "garlic",
          "butter",
          "linguine",
          "basil"
        ]
      }
    ]
  }
});
