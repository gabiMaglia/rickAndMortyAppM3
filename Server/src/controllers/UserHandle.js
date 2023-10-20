const { user } = require("../db");

const getUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll()
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const postUser = async (req, res) => {

  try {
    const {id,  first_name, last_name, user_email, user_handle, user_password } =
      req.body;
    
    if (
      !user_handle ||
      user_handle === "" ||
      !user_password ||
      user_password === ""
    ) {
      res.status(400).send("Faltan datos");
    } else {
      // FIND OR CREATE TE DEVUELVE EL SUSUARIO SI LO ENCUENTRA O LO COREA Y TE LO DEVUELVE
      const newUser = await user.create({
          id: id,
          first_name: first_name,
          last_name: last_name,
          user_email: user_email,
          user_handle: user_handle,
          user_password: user_password,
      
      });

      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {postUser, getUsers};
