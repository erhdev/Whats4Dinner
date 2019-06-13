const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')
const Restaurant = require('../../models/restaurant');
const Menu_Item = require('../../models/menu_item');

describe('restaurant model', () => {
    const Model = Restaurant(sequelize, dataTypes)
    const instance = new Model()
    checkModelName(Model)('Restaurant')
    context('properties', () => {
        ;['restaurant_name', 'restaurant_category'].forEach(checkPropertyExists(instance));
    });
});


