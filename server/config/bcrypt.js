const bcrypt = require("bcryptjs");
const util = require("util");

// Promisify our variables to remove callback.
const genSalt = util.promisify(bcrypt.genSalt);
const genHash = util.promisify(bcrypt.genHash);
const compare = util.promisify(bcrypt.compare);

const SALT_WORK_FACTOR = 10;

// Create hash password.
const createPassword = async password => {
  const salt = await genSalt(SALT_WORK_FACTOR);
  const hash = await genHash(password, salt);

  return hash;
};

// Compare password
const comparePassword = async (password, hash) => {
  const match = await compare(password, hash);
  return match;
};

module.exports.createPassword = createPassword;
module.exports.comparePassword = comparePassword;
