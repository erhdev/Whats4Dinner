/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable comma-dangle */
/* eslint-disable func-names */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    restaurant_category: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    }
  }, {});
  Restaurant.associate = function (models) {
    // associations can be defined here
    Restaurant.hasMany(models.Menu_Item);
  };
  return Restaurant;
};
