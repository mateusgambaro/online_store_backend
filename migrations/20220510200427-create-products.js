'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      autor: {
        type: Sequelize.TEXT('long')
      },
      description: {
        type: Sequelize.STRING
      },
      id_grupo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_group'
      }
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};