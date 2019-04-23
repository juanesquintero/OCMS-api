const Sequelize = require("sequelize");
const db = require("../db/db");

var Actividad = db.sequelize.define(
  "actividades",
  {
    programacion: {
      type: Sequelize.INTEGER(30),
      allowNull: true,
      references:{
        model: "programacion",
        key:"codigo",
      }
    },
    observador: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references:{
        model: "usuarios",
        key:"codigo",
      }
    },
    docente: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references:{
        model: "usuarios",
        key:"codigo",
      }
    },
    grupo: {
      type: Sequelize.STRING,
      allowNull: true,
      references:{
        model:"grupo",
        key:"codigo",
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
    descripcion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    fechaInicio: {
      type: Sequelize.DATE,
      allowNull: false
    },
    fechaFin: {
      type: Sequelize.DATE,
      allowNull: false
    },
    lugar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    aforo: {
      type: Sequelize.INTEGER(6),
      defaultValue: null,
      allowNull: true
    },
    asistentes: {
      type: Sequelize.INTEGER(6),
      defaultValue: null,
      allowNull: true
    }
  },
  { timestamps: true }
);

module.exports = Actividad;
