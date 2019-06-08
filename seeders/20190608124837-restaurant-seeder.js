'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Restaurants', [{
      restaurant_name: 'Carrabbas',
      restaurant_category: 'Italian',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_name: 'Cracker Barrel',
      restaurant_category: 'Southern Comfort',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_name: 'Red Lobster',
      restaurant_category: 'Seafood',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      restaurant_name: 'Panda Express',
      restaurant_category: 'Chinese',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    const restaurants = await queryInterface.sequelize.query(
      `SELECT id from Restaurants;`);

    const restaurantRows = restaurants[0];

    await queryInterface.bulkInsert('Menu_Items', [{
      menu_item: 'Chicken Bryan',
      RestaurantId: restaurantRows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      menu_item: 'Chicken Fried Steak',
      RestaurantId: restaurantRows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      menu_item: 'Shrimp Scampi',
      RestaurantId: restaurantRows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      menu_item: 'Orange Chicken',
      RestaurantId: restaurantRows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    const menu_items = await queryInterface.sequelize.query(
      `SELECT id from Menu_Items;`);

    const menu_item_Rows = menu_items[0];

    return await queryInterface.bulkInsert('Recipes', [{
      ingredient: '2 boneless skinless chicken breasts',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'kosher salt to taste',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'olive oil to taste',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '4 ounces goat cheese',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '6 sun-dried tomatoes chopped',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '2-4 tablespoons fresh basil chopped',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '4 teaspoons onions minced',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '4 teaspoons garlic minced',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '8 tablespoons butter divided',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '0.5 cup white wine',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '4 tablespoons fresh lemon juice',
      instruction: null,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'null',
      instruction: `Brush chicken on both sides with olive oil, season to taste with Kosher salt and cracked pepper.
Grill chicken until done (internal temp of 165F) - prepare lemon butter sauce while
chicken is grilling.
Sautee onion and garlic in 2 Tbps butter until soft and fragrant.
Add white wine and lemon juice, reduce heat to medium-low and simmer 10 minutes to
reduce.
Add remaining 6 Tbsp butter, a little at a time, until it melts and mixture is emulsified.
Add chopped sun-dried tomatoes and basil, heat until hot (but do not overheat or
sauce may break).
Top nearly-done chicken breasts with 2 oz each of the goat cheese until cheese warms
and softens.
To serve, spoon lemon butter sauce over chicken breasts.
`,
      MenuItemId: menu_item_Rows[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1-1/4 cups all-purpose flour divided',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '2 large eggs',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1-1/2 cups 2% milk divided',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '4 beef cube steaks (6 ounces each)',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1-1/4 teaspoons salt divided',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 teaspoon pepper divided',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'Oil for frying',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 cup water',
      instruction: null,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: null,
      instruction: `Place 1 cup flour in a shallow bowl. In a separate shallow bowl, whisk eggs and 1/2 cup milk until
blended. Sprinkle steaks with 3/4 teaspoon each salt and pepper. Dip in flour to coat both sides; shake o􀃠
excess. Dip in egg mixture, then again in flour.
In a large cast-iron or other heavy skillet, heat 1/4 in. of oil over medium heat. Add steaks; cook until
golden brown and a thermometer reads 160°, 4-6 minutes on each side. Remove from pan; drain on
paper towels. Keep warm.
Remove all but 2 tablespoons oil from pan. Stir in the remaining 1/4 cup flour, 1/2 teaspoon salt and
1/4 teaspoon pepper until smooth; cook and stir over medium heat until golden brown, 3-4 minutes.
Gradually whisk in water and remaining milk. Bring to a boil, stirring constantly; cook and stir until
thickened, 1-2 minutes. Serve with steaks.`,
      MenuItemId: menu_item_Rows[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '3 to 4 garlic cloves minced',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 cup butter cubed',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 cup olive oil',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 pound uncooked medium shrimp peeled and deveined',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 cup lemon juice',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/2 teaspoon pepper',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 teaspoon dried oregano',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/2 cup grated Parmesan cheese',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 cup dry bread crumbs',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 cup minced fresh parsley',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'Hot cooked angel hair pasta',
      instruction: null,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: null,
      instruction: `In a 10-in. ovenproof skillet, saute garlic in butter and oil until fragrant. Add the shrimp, lemon juice,
pepper and oregano; cook and stir until shrimp turn pink. Sprinkle with cheese, bread crumbs and
parsley.
Broil 6 in. from the heat for 2-3 minutes or until topping is golden brown. Serve with pasta`,
      MenuItemId: menu_item_Rows[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '16 ounces frozen popcorn chicken (about 4 cups)',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 tablespoon canola oil',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '2 medium carrots thinly sliced',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 garlic clove minced',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1-1/2 teaspoons grated orange zest',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1 cup orange juice',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/3 cup hoisin sauce',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '3 tablespoons sugar',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 teaspoon salt',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: '1/4 teaspoon pepper',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'Dash cayenne pepper',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: 'Hot cooked rice',
      instruction: null,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ingredient: null,
      instruction: `Bake popcorn chicken according to package directions.
Meanwhile, in a large skillet, heat oil over medium-high heat. Add carrots; cook and stir 3-5 minutes or
until tender. Add garlic; cook 1 minute longer. Stir in orange zest, juice, hoisin sauce, sugar and
seasonings; bring to a boil. Reduce heat; simmer, uncovered, 4-6 minutes or until thickened, stirring
constantly.
Add chicken to skillet; toss to coat. Serve with rice.’, ‘16 ounces frozen popcorn chicken (about 4 cups)`,
      MenuItemId: menu_item_Rows[3].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

