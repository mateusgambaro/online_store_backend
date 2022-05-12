const express = require('express');
const { Groups } = require('../models');
const router = express.Router();

router.get('/getGroups', async (_req, res) => {
  try {
    const groups = await Groups.findAll();

    return res.status(200).json(groups);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


router.get('/getGroups/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Groups.findByPk(id);

    if (!group) return res.status(404).json({ message: 'Grupo não encontrado' });

    return res.status(200).json(group);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// router.get('/search/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.query;
//     const product = await groups.findOne({ where: { id, email }});

//     if (!product) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(product);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

router.post('/insertGroup', async (req, res) => {
  try {
    const { name } = req.body;
    const newGroup = await Groups.create({ name });

    return res.status(201).json(newGroup);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/updateGroup/:id', async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const [updateGroup] = await Groups.update(
      { name } ,
      { where: { id } },
    );

    console.log(updateGroup);

    if(!updateGroup) return res.status(404).json({ message: 'Grupo não encontrado' });

    return res.status(200).json({ message: 'Grupo atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteGroup = await Groups.destroy(
//       { where: { id } },
//     );

//     console.log(deleteGroup) // confira o que é retornado quando o product com o id é ou não encontrado;

//     return res.status(200).json({ message: 'Grupo excluído com sucesso!' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

module.exports = router;