const Sequelize = require("sequelize");
const db = require("../db/db");

var Asistencia = db.sequelize.define(
  "asistencias",
  {
    actividad: {
      type: Sequelize.INTEGER(30),
      primaryKey: true,
      allowNull: false,
      reference:{
        model:"actividad",
        key:"codigo"
      }    
    },
    asistente: {
      type: Sequelize.STRING(30),
      primaryKey: true,
      allowNull: false,
      reference:{
        model:"usuario",
        key:"identificacion"
      }
    },
    observaciones: {
      type: Sequelize.STRING,
      defaultvalue: null ,
      allowNull: true
    }
  },
  // { timestamps: false }
);

module.exports = Asistencia;
