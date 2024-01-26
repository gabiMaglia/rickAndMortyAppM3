const server = require("./src/app");
const {sequelize} = require("./src/db");
const PORT = 3001;

try {
  sequelize.sync({ alter: false }).then(() => {
    server.listen(PORT, () => {
      console.log("Server raised at port " + PORT);
    });
 
  });

} catch (error) {
  throw new Error(error.message);
}
