'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu_Item = sequelize.define('Menu_Item', {
    menu_item: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true
    }
  }, {});
  Menu_Item.associate = function(models) {
    // associations can be defined here
    Menu_Item.belongsTo(models.Restaurant);
    Menu_Item.hasMany(models.Recipe);
  };
  return Menu_Item;
};