const userList = require("../utils/users");


const login = (req, res) => {
  const { email, password } = req.query;

  if (email === userList.email && password === userList.password)
    res.staus(200).json({ access: true });
  else res.status(200).json({ access: false });
};

module.exports = {
    login
}