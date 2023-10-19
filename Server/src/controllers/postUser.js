const { userModel } = require("../db");

const postUser = async (req, res) => {
  try {
    const { first_name, last_name, user_email, user_handle, user_password } =
      req.body;
    if (
      !user_handle ||
      user_handle === "" ||
      !user_password ||
      user_password === ""
    ) {
      res.status(400).send("Faltan datos");
    } else {
      const user = await userModel.findOrCreate({
        where: {
          first_name: first_name,
          last_name: last_name,
          user_email: user_email,
          user_handle: user_handle,
          user_password: user_password,
        },
      });
      res.status(200), json(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postUser;
