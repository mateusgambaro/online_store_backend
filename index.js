const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const userController = require('./controllers/UserController');
const productController = require('./controllers/ProductController');
const groupController = require('./controllers/GroupController');



const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', userController, productController, groupController );
app.use('/:id', productController, groupController );



app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));