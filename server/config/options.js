require("dotenv").config();

const options = {
  access: process.env.ACCESS,
  secret: process.env.SECRET,
  mailPass: process.env.MAIL,
  user: process.env.USER,
  mongodb: process.env.MONGODB_URI || "mongodb://localhost/dono",
  siteUrl: process.env.SITEURL || "http://localhost:3000/",
  clientId: process.env.CLIENT_ID,
  client: process.env.CLIENT_ID_SECRETE,
  sandbox: process.env.SANDBOX
};

module.exports = key => options[key];
