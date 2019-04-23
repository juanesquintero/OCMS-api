const Sequelize = require("sequelize");
const db = require("../db/db");

var Notificacion = db.sequelize.define(
  "notificaciones",
  {
    usuario: {
      type: Sequelize.STRING(30),
      allowNull: true,
      references: {
        model: "Usuario",
        key: "identificacion"
      },
    },
    evento: {
      type: Sequelize.STRING(30),
      allowNull: false,
      references: {
        model: "Actividad",
        key: "codigo"
      },
    },
    codigo: {
      type: Sequelize.INTEGER(30),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    fecha: {
      type: Sequelize.DATE,
      allowNull: false
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuerpo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  // { timestamps: true }
  { timestamps: false }
);

module.exports = Notificacion;
