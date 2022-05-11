const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      img: DataTypes.TEXT,
    });
  
    Products.associate = (models) => {
      Products.belongsTo(models.Groups,
        { foreignKey: 'idGrupo', as: 'produtos' });
    };

    return Products;
  };
  
  module.exports = Products;