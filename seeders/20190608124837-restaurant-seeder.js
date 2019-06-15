/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-return-await */
'use strict';

export async function up(queryInterface, Sequelize) {
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
  }, {
    restaurant_name: 'Olive Garden',
    restaurant_category: 'Italian',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    restaurant_name: 'Bojangles',
    restaurant_category: 'Southern Comfort',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    restaurant_name: 'Crab Shack',
    restaurant_category: 'Seafood',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    restaurant_name: `P.F. Chang's`,
    restaurant_category: 'Chinese',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  const restaurants = await queryInterface.sequelize.query(`SELECT id from Restaurants;`);
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
  }, {
    menu_item: 'Lasagna',
    RestaurantId: restaurantRows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    menu_item: 'Fried Chicken',
    RestaurantId: restaurantRows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    menu_item: 'Grilled Salmon',
    RestaurantId: restaurantRows[6].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    menu_item: 'Teriyaki Chicken',
    RestaurantId: restaurantRows[7].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
  const menu_items = await queryInterface.sequelize.query(`SELECT id from Menu_Items;`);
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
    ingredient: null,
    instruction: `Brush chicken on both sides with olive oil, season to taste with Kosher salt and cracked pepper.\nGrill chicken until done (internal temp of 165F) - prepare lemon butter sauce while\nchicken is grilling.\nSautee onion and garlic in 2 Tbps butter until soft and fragrant.\nAdd white wine and lemon juice, reduce heat to medium-low and simmer 10 minutes to\nreduce.\nAdd remaining 6 Tbsp butter, a little at a time, until it melts and mixture is emulsified.\nAdd chopped sun-dried tomatoes and basil, heat until hot (but do not overheat or\nsauce may break).\nTop nearly-done chicken breasts with 2 oz each of the goat cheese until cheese warms\nand softens.\nTo serve, spoon lemon butter sauce over chicken breasts.\n`,
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
    instruction: `Place 1 cup flour in a shallow bowl. In a separate shallow bowl, whisk eggs and 1/2 cup milk until\nblended. Sprinkle steaks with 3/4 teaspoon each salt and pepper. Dip in flour to coat both sides; shake o􀃠\nexcess. Dip in egg mixture, then again in flour.\nIn a large cast-iron or other heavy skillet, heat 1/4 in. of oil over medium heat. Add steaks; cook until\ngolden brown and a thermometer reads 160°, 4-6 minutes on each side. Remove from pan; drain on\npaper towels. Keep warm.\nRemove all but 2 tablespoons oil from pan. Stir in the remaining 1/4 cup flour, 1/2 teaspoon salt and\n1/4 teaspoon pepper until smooth; cook and stir over medium heat until golden brown, 3-4 minutes.\nGradually whisk in water and remaining milk. Bring to a boil, stirring constantly; cook and stir until\nthickened, 1-2 minutes. Serve with steaks.`,
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
    instruction: `In a 10-in. ovenproof skillet, saute garlic in butter and oil until fragrant. Add the shrimp, lemon juice,\npepper and oregano; cook and stir until shrimp turn pink. Sprinkle with cheese, bread crumbs and\nparsley.\nBroil 6 in. from the heat for 2-3 minutes or until topping is golden brown. Serve with pasta`,
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
    instruction: `Bake popcorn chicken according to package directions.\nMeanwhile, in a large skillet, heat oil over medium-high heat. Add carrots; cook and stir 3-5 minutes or\nuntil tender. Add garlic; cook 1 minute longer. Stir in orange zest, juice, hoisin sauce, sugar and\nseasonings; bring to a boil. Reduce heat; simmer, uncovered, 4-6 minutes or until thickened, stirring\nconstantly.\nAdd chicken to skillet; toss to coat. Serve with rice.’, ‘16 ounces frozen popcorn chicken (about 4 cups)`,
    MenuItemId: menu_item_Rows[3].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '9 lasgana noodles',
    instruction: null,
    MenuItemId: menu_item_Rows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1 medium onion, diced',
    instruction: null,
    MenuItemId: menu_item_Rows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1-1/4 pounds bulk Italian sausage',
    instruction: null,
    MenuItemId: menu_item_Rows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '3 garlic cloves, minced',
    instruction: null,
    MenuItemId: menu_item_Rows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: null,
    instruction: `Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain.\nStir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally.\nIn a small bowl, mix egg, ricotta cheese, and remaining parsley and salt.\nPreheat oven to 375�. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese. Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full).\nBake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.`,
    MenuItemId: menu_item_Rows[4].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '9 chicken breasts',
    instruction: null,
    MenuItemId: menu_item_Rows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1 cup flower',
    instruction: null,
    MenuItemId: menu_item_Rows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1 cup canola oil',
    instruction: null,
    MenuItemId: menu_item_Rows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '3 garlic cloves, minced',
    instruction: null,
    MenuItemId: menu_item_Rows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: null,
    instruction: `Cut the whole chickens into 4 breasts, 4 thighs, 4 legs and 4 wings and set aside.\nPreheat your oil, in either a heavy pan on the stove or a deep-fryer, to 325 degrees F.\nIn a large bowl, combine the flour, salt, black pepper, garlic powder, onion powder and cayenne pepper until thoroughly mixed. Set aside.\nPour the buttermilk into another bowl large enough for the chicken to be immersed in the buttermilk.\nPrepare your dredging station. Place your chicken in a bowl. Next to that, your bowl of buttermilk, and next to that, your dry mixture.\nTake your breasts, lightly dust them with your flour mixture, then dip them in the buttermilk until they are coated, and then place them in the flour mixture.\nTake the breasts that are in the flour mixture and aggressively push the flour mixture into the wet chicken. Make sure that the chicken in very thoroughly coated, or you will not achieve the crust and crunch you are looking for. Gently place the breasts in your hot oil.\nNext, repeat the dredging steps with your other pieces of chicken in this order: thigh, leg then wing.\nWhen you place the last wing into the fryer, you should have 16 pieces of chicken in the oil. Set a timer for 15 minutes.\nAfter 15 minutes, take a probe thermometer and check the temperature of a breast. If it reads 180 degrees F, all of your chicken is done. (Keep in mind that it will continue to cook after it has been removed from the fryer.)\nRemove the chicken from the oil and let it drain for 5 minutes. Let cool for an additional 10 minutes before serving.`,
    MenuItemId: menu_item_Rows[5].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '2 pounds salmon',
    instruction: null,
    MenuItemId: menu_item_Rows[6].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1/2 cup olive oil',
    instruction: null,
    MenuItemId: menu_item_Rows[6].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: 'seasoning of choice',
    instruction: null,
    MenuItemId: menu_item_Rows[6].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: null,
    instruction: `Season salmon fillets with lemon pepper, garlic powder, and salt.\nIn a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours.\nPreheat grill for medium heat.\nLightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork.`,
    MenuItemId: menu_item_Rows[6].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '2 pounds chicken',
    instruction: null,
    MenuItemId: menu_item_Rows[7].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1/2 cup soy sauce',
    instruction: null,
    MenuItemId: menu_item_Rows[7].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: '1 cup teriyaki sauce',
    instruction: null,
    MenuItemId: menu_item_Rows[7].id,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ingredient: null,
    instruction: `Heat cooking oil in a large pan over medium heat. Stir fry chicken, stirring occasionally until lightly browned and crisp.\nIn a small jug or bowl whisk together the soy sauce, sugar, Sake/vinegar, Mirin and sesame oil to combine. Set aside.\nAdd the garlic to the centre of the pan and saute until lightly fragrant (about 30 seconds). Pour in the sauce and allow to cook, while stirring, until the sauce thickens into a beautiful shiny glaze (about 2-3 minutes).*\nAdd in the steamed broccoli. Garnish with green onion (or shallot) slices and serve over steamed rice.`,
    MenuItemId: menu_item_Rows[7].id,
    createdAt: new Date(),
    // eslint-disable-next-line comma-dangle
    updatedAt: new Date()
  }]);
}
export function down(queryInterface, Sequelize) {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
}
