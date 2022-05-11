const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const userController = require('./controllers/UserController');

const app = express();
const PORT = process.env.DB_PORT;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (_req, res) => {
    try {
      const users = await User.findAll();
  
      return res.status(200).json(users);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  });

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));