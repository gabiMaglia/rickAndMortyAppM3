const userList = require("../utils/users");

const loginController = (req, res) => {
  const { email, password } = req.query;

  userList.find((user) => email === user.email && password === user.password)
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false })
};

module.exports = {
  loginController,
};
