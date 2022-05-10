const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      img: DataTypes.TEXT,
    });
  
    return Products;
  };
  
  module.exports = Products;