const { user } = require("../db");

const loginController = async (req, res) => {

  try {
    const { email, password } = req.query;

    if (!email || email === "" || !password || password === "") {
      res.status(400).send("Faltan datos");
    }

    const newAcces = await user.findOne({
      where: { user_handle: email, user_password: password },
    });

    if (newAcces === null) {
      console.log("Not found!");
      res.status(200).json({ access: false });
    } else {
      res.status(200).json({ access: true });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = loginController;
