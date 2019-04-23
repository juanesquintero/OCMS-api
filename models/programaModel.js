const Sequelize = require("sequelize");
const db = require("../db/db");

var Programa = db.sequelize.define(
  "programas",
  {
    semestres: {
      type: Sequelize.INTEGER(6),
      allowNull: false,
    },
    programa:{
      type: Sequelize.STRING(30),
      allowNull: true,
      references: {
        model: "programa",
        key: "codigo"
      }
    },
    grupo:{
      type: Sequelize.STRING(30),
      allowNull: true,
      references: {
        model: "grupo",
        key: "codigo"
      }
    },
    facultad: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references: {
        model: "Facultad",
        key: "codigo"
      }
    },
    codigo: {
      type: Sequelize.STRING(30),
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    
    tipo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    modalidad: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    codigoSnies: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    registroIcfes: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    resolucion: {
      type: Sequelize.STRING(30),
      allowNull: true
    },
    actualizacion: {
      type: Sequelize.STRING,
      allowNull: true
    },
    presentacion: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  { timestamps: false }
);

module.exports = Programa;
