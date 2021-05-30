const { User } = require("../models/user");
const { createPassword } = require("../config/bcrypt");

module.exports = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(422).json(error);
    }
  },

  // Get a user.
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};
