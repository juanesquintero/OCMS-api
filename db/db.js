const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("ocms", "ocms", "ocms", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquaire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
