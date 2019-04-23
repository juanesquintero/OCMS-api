const Sequelize = require("sequelize");
const db = require("../db/db");

var AgendaGrupo = db.sequelize.define(
  "agendagrupos",
  {
    actividad: {
      type: Sequelize.INTEGER(30),
      primaryKey: true,
      allowNull: false,
      reference:{
        model:"actividad",
        key:"codigo"
      },
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  { timestamps: true }
);

module.exports = AgendaGrupo;
