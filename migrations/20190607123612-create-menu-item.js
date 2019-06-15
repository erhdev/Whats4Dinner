/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Menu_Items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    menu_item: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    restaurant_ID: {
      type: Sequelize.INTEGER
    }
  });
}
export function down(queryInterface, Sequelize) { return queryInterface.dropTable('Menu_Items'); }
