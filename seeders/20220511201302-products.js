module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        {
          name: 'Crime e Castigo',
          price: '30',
          autor: '',
          img: 'https://images-na.ssl-images-amazon.com/images/I/71l6UlO3TxL.jpg',
          description: 'aaaaaa',
          grupo: 1
        },
        {
          name: '50 fatos sobre a historia do rock',
          price: '10',
          img: 'https://images-na.ssl-images-amazon.com/images/I/51-ublsDdkL.jpg',
          autor: '',
          description: 'aaaaaa',
          grupo: 3
        },        {
          name: 'O homem e seus símbolos',
          price: '400',
          img: 'https://images-na.ssl-images-amazon.com/images/I/81s+8Qj6WxL.jpg',
          autor: '',
          description: 'aaaaaa',
          grupo: 1
        },        {
          name: 'A Republica',
          price: '40',
          img: 'https://images-na.ssl-images-amazon.com/images/I/61J+APw6nvL.jpg',
          autor: '',
          description: 'aaaaaa',
          grupo: 1
        },        {
          name: 'O senhor dos aneis',
          price: '30',
          img: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg',
          autor: '',
          description: 'aaaaaa',
          grupo: 1
        },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
