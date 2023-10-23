const { user } = require("../db");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || email === "" || !password || password === "") {
      return res.status(400).send("Faltan datos");
    }
    const newAcces = await user.findOne({
      where: { user_handle: email },
    });
   
    if (!newAcces) return res.status(404).send({ message: "User not found" });
    
    const isCorrectPassword = await bcrypt.compare(
      password,
      newAcces.user_password
    );
    if (!isCorrectPassword)
    return res.status(403).send({ message: "Wrong password" });
    return res.status(200).json({ access: true });

  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = loginController;
