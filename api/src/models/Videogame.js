const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
     },
    
     background_image: {
      type: DataTypes.STRING,
      allowNull: false,
     },
     released: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     },
     rating: {
      type: DataTypes.FLOAT(),
      allowNull: false,
    },
  });
};
