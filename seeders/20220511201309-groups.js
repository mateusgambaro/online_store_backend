module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Groups',
      [
        {
          name: 'Filosofia',
        },
        {
          name: 'Ficção Científica',
        },
        {
          name: 'Música',
        },
        {
          name: 'Biografia',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  },
};