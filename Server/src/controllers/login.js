const userList = require("../utils/users");

const loginController = (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || email === "" || !password || password === "") {
      res.status(400).send("Faltan datos");
    }
    userList.find((user) => email === user.email && password === user.password)
      ? res.status(200).json({ access: true })
      : res.status(200).json({ access: false });
  } catch (error) {
    res.status(500).send(error.mensage);
  }
};

module.exports = loginController;
