module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'Crime e Castigo',
          price: '30',
          autor: '',
          description: 'aaaaaa',
          idGrupo: 1
        },
        {
          name: '50 fatos sobre a historia do rock',
          price: '10',
          autor: '',
          description: 'aaaaaa',
          idGrupo: 3
        },        {
          name: 'O homem e seus símbolos',
          price: '400',
          autor: '',
          description: 'aaaaaa',
          idGrupo: 1
        },        {
          name: 'A Republica',
          price: '40',
          autor: '',
          description: 'aaaaaa',
          idGrupo: 1
        },        {
          name: 'O senhor dos aneis',
          price: '30',
          autor: '',
          description: 'aaaaaa',
          idGrupo: 2
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
