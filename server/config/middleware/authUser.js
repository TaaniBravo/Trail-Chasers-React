const passport = require("passport");

const authUser = passport.authenticate("jwt", { session: false });

module.exports = authUser;
