const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");

// const serverCa = [
//   fs.readFileSync("../../DigiCertGlobalRootCA.crt.pem", "utf8"),
// ];

const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DIALECT,
} = require("../Config/db.config");

const connection = new Sequelize(
  "mysql://root:TkyobWFnsVgOHXcskEQbTcJZtOsCZyUA@roundhouse.proxy.rlwy.net:49378/railway",
  {
    // host: DB_HOST,
    // dialect: DB_DIALECT,
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: true,
    //     ca: serverCa,
    //   },
    // },
  }
);

module.exports = { connection };
