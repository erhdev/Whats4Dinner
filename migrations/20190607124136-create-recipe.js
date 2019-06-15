/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Recipes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    ingredient: {
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
    menu_item_ID: {
      type: Sequelize.INTEGER
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Recipes');
}
