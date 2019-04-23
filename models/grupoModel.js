const Sequelize = require("sequelize");
const db = require("../db/db");

var Grupo = db.sequelize.define(
  "grupos",
  {
    asignatura: {
      type: Sequelize.STRING,
      allowNull: false,
      // references: {
      //   model: "Asignatura",
      //   key: "codigo"
      // },
    },
    semestre: {
      type: Sequelize.INTEGER(6),
      allowNull: false
    },
    codigo: {
      type: Sequelize.STRING(30),
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    aula: {
      type: Sequelize.STRING,
      allowNull: false
    },
    horario: {
      type: Sequelize.STRING,
      allowNull: false
    },
  
  },
  { timestamps: false }
);

module.exports = Grupo;
