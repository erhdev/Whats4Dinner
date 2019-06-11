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

    // context('check associations', () => {
    //     //const Menu_Item = 'some other model' // it doesn't matter what
    //     before(() => {
    //         Model.associate({Menu_Item})
    //     })
    //     it('defined a belongsTo association with Menu_Item', () => {
    //         expect(Restaurant.hasMany).to.have.been.calledWith(Menu_Item);
    //     });
    // });
});


