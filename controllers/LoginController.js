const jwt = require('jsonwebtoken');
const express = require('express');
const { User } = require('../models');
const router = express.Router();


const secret = 'senhaSuperSecreta13122100';

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

        const user = await User.findOne({ where: { email } });

        if (!user || user.password !== password)
            return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

            const payload = {
                email: req.body.email,
                admin: false,
              };
            
              const token = jwt.sign(payload, secret, {
                expiresIn: '7d',
              });
            
              res.status(200).json({ token });

        res.status(200).json({ token });

    } catch (err) {
        return res.status(500).json({ message: 'Erro interno', error: err.message });
    }
});

module.exports = router;