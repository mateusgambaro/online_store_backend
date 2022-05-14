const express = require('express');
const { User } = require('../models');
const Sequelize = require('sequelize');
const router = express.Router();

router.get('/getUser', async (_req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.get('/userLogin', async (req, res) => {
  const { email, admin } = req.user;

  res.status(200).json({ email, admin });
})


// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByPk(id);

//     if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(user);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// router.get('/search/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.query;
//     const user = await User.findOne({ where: { id, email }});

//     if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

//     return res.status(200).json(user);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { fullName, email } = req.body;
//     const newUser = await User.create({ fullName, email });

//     return res.status(201).json(newUser);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

router.put('/updateUser/:id', async (req, res) => {
  try {
    const { saldo } = req.body;
    const { id } = req.params;

    const [updateUser] = await User.update(
      { saldo },
      { where: { id } },
    );

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// // Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteUser = await User.destroy(
//       { where: { id } },
//     );

//     console.log(deleteUser) // confira o que é retornado quando o user com o id é ou não encontrado;

//     return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

module.exports = router;