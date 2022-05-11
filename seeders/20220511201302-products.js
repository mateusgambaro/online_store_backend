module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'Pizza',
          price: '30',
          img: '',
          description: 'aaaaaa',
          idGrupo: 1
        },
        {
          name: 'Notebook',
          price: '2000',
          img: '',
          description: 'aaaaaa',
          idGrupo: 2
        },        {
          name: 'Violao',
          price: '400',
          img: '',
          description: 'aaaaaa',
          idGrupo: 3
        },        {
          name: 'A Republica',
          price: '40',
          img: '',
          description: 'aaaaaa',
          idGrupo: 4
        },        {
          name: 'O senhor dos aneis',
          price: '30',
          img: '',
          description: 'aaaaaa',
          idGrupo: 4
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
