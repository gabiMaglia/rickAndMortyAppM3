const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  // primero parametro de define el nombre del modelo,
  // segundo parametro un objeto con el modelo
  sequelize.define(
    "Character",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "Unknown"),
        defaultValue: "Unknown",
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
        type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
        defaultValue: "Unknown",
        allowNull: false,
      },
    }
    // podemos agregar un tercer objeto como parametro para evitar los timestamps entre otras cosas
    // {
    //     timestamps: false
    // }
  );
};
