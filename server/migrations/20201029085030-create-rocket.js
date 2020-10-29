'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rockets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mission: {
        type: Sequelize.STRING
      },
      launch: {
        type: Sequelize.STRING
      },
      time_target: {
        type: Sequelize.DATE
      },
      pad_location: {
        type: Sequelize.STRING
      },
      customerOrganization: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rockets');
  }
};