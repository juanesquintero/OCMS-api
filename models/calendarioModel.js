const Sequelize = require("sequelize");
const db = require("../db/db");

var Calendario = db.sequelize.define(
  "calendarios",
  {
    semestre: {
      type: Sequelize.INTEGER(30),
      primaryKey: true,
      allowNull: false
    },
    fechaInicio: {
      type: Sequelize.DATE,
      allowNull: false
    },
    fechaFin: {
      type: Sequelize.DATE,
      allowNull: false
    },
    acuerdo: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  { timestamps: false }
);

module.exports = Calendario;
