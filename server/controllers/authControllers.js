const { User } = require("../models/user");
const { createPassword, comparePassword } = require("../config/bcrypt");
const JWT = require("../config/jwt");
const jwt = new JWT();

module.exports = {
  // signUp function for new users
  signUp: async (req, res) => {
    // Get our deconstructed values for cleaner code.
    const { email, username, password } = req.body;

    // Assign those req values to an object.
    const userObject = {
      email,
      username,
      password
    };

    try {
      // IF there is a user with the username or email already
      // then we need to return out of the function.

      const checkForUser = await User.findOne({
        $or: [{ username: username }, { email: email }]
      });

      if (checkForUser) {
        return res.status(422).json({
          header: "Sorry",
          message: "Username or email is unavailable.",
          footer: "Please try another email/username."
        });
      } else {
        await User.create(userObject);
        return res.status(200).json({
          header: "Thank You!",
          message: "Welcome to the TC family.",
          footer: "Enjoy your adventures!"
        });
      }
    } catch (error) {
      res.status(422).json(error);
    }
  }
};
