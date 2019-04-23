const Sequelize = require("sequelize");
const db = require("../db/db");

var Programacion = db.sequelize.define(
  "programaciones",
  {
    semestre: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
    },
    programa: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references:{
        model:"programa",
        key:"codigo"
      }
    },
    grupo: {
      type: Sequelize.STRING,
      allowNull: true,
      references:{
        model:"grupo",
        key:"codigo"
      }
    },
    creador: {
      type: Sequelize.STRING(30),
      allowNull: false,
      references:{
        model:"usuario",
        key:"identificacion"
      }
    },
    facultad: {
      type: Sequelize.STRING,
      allowNull: true,
      references:{
        model:"facultad",
        key:"codigo"
      }
    },
    codigo: {
      type: Sequelize.INTEGER(30),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
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
    descripcion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tipo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    nivelPosgrado: {
      type: Sequelize.INTEGER(6),
      allowNull: true
    }
  },
  { timestamps: true }
);

module.exports = Programacion;
