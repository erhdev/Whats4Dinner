'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    }
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.Menu_Item);
  };
  return Recipe;
};