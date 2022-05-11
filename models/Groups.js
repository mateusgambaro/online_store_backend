const Groups = (sequelize, DataTypes) => {
    const Groups = sequelize.define("Groups", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    });

    Groups.associate = (models) => {
        Groups.hasOne(models.Products,
          { foreignKey: 'idGroup', as: 'grupos' });
      };
  
    return Groups;
  };
  
  module.exports = Groups;