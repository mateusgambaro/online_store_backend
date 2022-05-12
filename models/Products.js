const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      autor: DataTypes.TEXT,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Products',
      underscored: true,
    }
    );
  
    Products.associate = (models) => {
      Products.belongsTo(models.Groups,
        { foreignKey: 'grupo', as: 'produtos' });
    };

    return Products;
  };
  
  module.exports = Products;