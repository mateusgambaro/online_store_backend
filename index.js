const express = require('express');
const bodyParser = require("body-parser");

const cors = require('cors')

const middlewares = require('./middlewares')


const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');
const groupController = require('./controllers/GroupController');
const loginController = require('./controllers/LoginController');





const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', userController, productController, groupController, loginController, middlewares.auth);
app.use('/:id', userController, productController, groupController );




app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));