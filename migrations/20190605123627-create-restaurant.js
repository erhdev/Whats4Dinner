/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Restaurants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('Restaurants');
}
