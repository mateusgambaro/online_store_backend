const express = require('express');
const { Products } = require('../models');
const router = express.Router();

router.get('/getProducts', async (_req, res) => {
  try {
    const products = await Products.findAll();

    return res.status(200).json(products);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


router.get('/getProducts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(product);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// router.get('/search/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.query;
//     const product = await Products.findOne({ where: { id, email }});

//     if (!product) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(product);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

router.post('/insertProducts', async (req, res) => {
  try {
    const { name, price, autor, description, grupo } = req.body;
    const newproduct = await Products.create({ name, price, autor, description, grupo });

    return res.status(201).json(newproduct);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/updateProducts/:id', async (req, res) => {
  try {
    const { name, price, autor, description, grupo } = req.body;
    const { id } = req.params;

    const [updateproduct] = await Products.update(
      { name, price, autor, description, grupo } ,
      { where: { id } },
    );

    console.log(updateproduct);

    if(!updateproduct) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json({ message: 'Produto atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteproduct = await Products.destroy(
//       { where: { id } },
//     );

//     console.log(deleteproduct) // confira o que é retornado quando o product com o id é ou não encontrado;

//     return res.status(200).json({ message: 'Produto excluído com sucesso!' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

module.exports = router;