const Sequelize = require("sequelize");
const db = require("../db/db");

var Facultad = db.sequelize.define(
  "facultades",
  {
    codigo: {
      type: Sequelize.STRING(30),
      primaryKey: true,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    ubicacion: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  { timestamps: false }
);

module.exports = Facultad;
