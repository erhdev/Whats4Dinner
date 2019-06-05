'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.hasMany(models.Food);
  };
  return Restaurant;
};