const jwt = require("jsonwebtoken");
const util = require("util");

class JWT {
  constructor() {
    this.jwtSign = util.promisify(jwt.sign);
    this.jwtVerify = util.promisify(jwt.verify);
    this.access = require("../config/options")("access");
    this.expires = "2d";
  }

  // Creates a token by sending user id and date created as payload, access keym and time created.
  async sign(payload) {
    try {
      const token = await this.jwtSign(payload, this.access, {
        expiresIn: this.expires
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Verify if token is still valid.
  async verify(token) {
    const decoded = await this.jwtVerify(token, this.access);
    return decoded;
  }

  // Issue a token for each user by sending in _id then return bearer token and expire time.
  async issueToken({ email, username, _id }) {
    const expiresIn = this.expires;

    const payload = {
      email,
      username,
      _id
    };

    const signedToken = await this.sign(payload);

    return {
      sucesss: true,
      token: "Bearer " + signedToken,
      user: {
        email,
        username,
        _id
      },
      expires: expiresIn
    };
  }
}

module.exports = JWT;
