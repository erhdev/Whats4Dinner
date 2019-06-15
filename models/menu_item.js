/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable comma-dangle */
/* eslint-disable camelcase */
/* eslint-disable func-names */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu_Item = sequelize.define('Menu_Item', {
    menu_item: {
      type: DataTypes.STRING,
      allowNull: true,
      notEmpty: true,
      isAlphanumeric: true
    }
  }, {});
  Menu_Item.associate = (models) => {
    // associations can be defined here
    Menu_Item.belongsTo(models.Restaurant);
    Menu_Item.hasMany(models.Recipe);
  };
  return Menu_Item;
};
