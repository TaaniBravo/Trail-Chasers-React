// Declare our dependencies
const { User } = require("../models");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const access = require("./options")("access");

// Options for JWT authentication method
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: access
};

const strategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await User.findOne({ username: payload.username });

    // IF user is found
    if (user) return done(null, user);

    // Otherwise return false for user.
    return done(null, false);
  } catch (error) {
    // IF error then return the error and user is false.
    return done(error, false);
  }
});
