
# :shopping: Online Store | BACKEND

Desenvolvimento de uma aplicação de cadastro e venda de livros, e controle de moedas dos usuários da plataforma.

Os livros estão separados por categorias que mais me interessam e que fazem diferança no meu dia :)

## :globe_with_meridians: HEROKU URL - API
https://online-store-backend-voll.herokuapp.com/

## ROTAS

GET.


/getUser - Retorna todos os usuários | https://online-store-backend-voll.herokuapp.com/getUser.


/getProducts - Retorna todos os livros | https://online-store-backend-voll.herokuapp.com/getProducts.


/getGroups - Retorna todas as categorias de livros | https://online-store-backend-voll.herokuapp.com/getGroups.



PUT.


/updateUser - Altera o saldo do usuário | https://online-store-backend-voll.herokuapp.com/updateUser.


POST.


/login - Gera token de autenticação para admin user e normal user | https://online-store-backend-voll.herokuapp.com/login.


/insertProduct - Cria um novo livro | https://online-store-backend-voll.herokuapp.com/insertProduct.


As rotas de delete e update foram criadas para todas as rotas, porém no código estão comentadas por não serem utilizadas neste projeto.


## 🛠️ BackEnd construído com

* [Sequelize](https://sequelize.org/) 
* [Supabase](https://supabase.com/) 
* [MySQL](https://www.mysql.com/) 
* [Express](https://expressjs.com/)
* [NodeJs](https://nodejs.org/en/) 
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Docker](https://www.docker.com/) 
* [Heroku](https://dashboard.heroku.com/)
* [Joi](https://www.npmjs.com/package/joi)
