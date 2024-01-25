const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  // primero parametro de define el nombre del modelo,
  // segundo parametro un objeto con el modelo
  sequelize.define(
    "favorites",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
        
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    // podemos agregar un tercer objeto como parametro para evitar los timestamps entre otras cosas
    {
        timestamps: false
    }
  );
};
