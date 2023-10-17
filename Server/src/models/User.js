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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
    // podemos agregar un tercer objeto como parametro para evitar los timestamps entre otras cosas
    // {
    //     timestamps: false
    // }
  );
};
