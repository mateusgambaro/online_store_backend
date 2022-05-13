const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      saldo: DataTypes.INTEGER
    });
  
    return User;
  };
  
  module.exports = User;