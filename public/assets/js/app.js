new Vue({
    el: '#root',
    template: `
    <div>
        <p v-if="error">{{ error }}</p>
        <h1>There are the found recipes</h1>
        <div v-for="recipe in recipes" :key="recipe.id">
            <p>{{ recipe.name }}</p>
            <ul>
                <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
            </ul>
        </div>
    </div>
    `,

    created: function() {
       axios.get('/api/recipes').then((response) => {
           recipes = response.data
       }).catch((err) => {
           console.log(err)
           this.error = "There was an error fetching recipes";
       })
    },

    data: {
        error: null,
        recipes: [
            {
                id: 1,
                name: "Chicken Bryan",
                category: "Italian",
                ingredients: [
                    "chicken", "tomatoes", "lemon", "garlic", "basil"
                ]
            },
            {
                id: 2,
                name: "Shrimp Scampi",
                category: "Seafood",
                ingredients: [
                    "shrimp", "butter", "lemon", "garlic", "butter", "linguine", "basil"
                ]
            }
        ]
    }
})