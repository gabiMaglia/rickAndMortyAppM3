const DataTypes = require("sequelize");

module.exports = (sequelize) => {
  // primero parametro de define el nombre del modelo,
  // segundo parametro un objeto con el modelo
  sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },

      user_handle: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
        timestamps: false
    }
    // podemos agregar un tercer objeto como parametro para evitar los timestamps entre otras cosas
  );
};
