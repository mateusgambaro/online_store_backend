const Groups = (sequelize, DataTypes) => {
    const Groups = sequelize.define("Groups", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Groups',
      underscored: true,
    }
    );

    Groups.associate = (models) => {
        Groups.hasMany(models.Products,
          { foreignKey: 'grupo', as: 'grupos' });
      };
  
    return Groups;
  };
  
  module.exports = Groups;