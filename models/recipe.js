'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: DataTypes.STRING,
    instruction: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.Menu_Item);
  };
  return Recipe;
};