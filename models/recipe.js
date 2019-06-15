/* eslint-disable func-names */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
/* eslint-disable comma-dangle */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: true,
      notEmpty: true
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: true,
      notEmpty: true
    }
  }, {});
  Recipe.associate = function (models) {
    // associations can be defined here
    Recipe.belongsTo(models.Menu_Item);
  };
  return Recipe;
};
