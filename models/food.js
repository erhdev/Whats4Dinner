'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: DataTypes.STRING
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    // Food belongs to a Restaurant
    Food.belongsTo(models.Restaurant);
  };
  return Food;
};