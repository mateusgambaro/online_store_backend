module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Groups',
      [
        {
          name: 'Comida',
        },
        {
          name: 'Computadores',
        },
        {
          name: 'Instrumentos musicais',
        },
        {
          name: 'Livros',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  },
};