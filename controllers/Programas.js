var express = require("express");
var router = express.Router();
var Programa = require("../models/programaModel");

//GET programas
router.get("/", (req, res) => {
  Programa.findAll()
    .then(programas => {
      res.send(programas);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET programa by Facultad
router.get("/:facultad", (req, res) => {
  let facultad = req.params.facultad;
  Programa.findAll({
    where: {
      facultad: facultad
    }
  })
    .then(Programa => {
      if (Programa) {
        res.send(Programa);
      } else {
        res.send("Programa no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET programa by nombre
router.get("/:nombre", (req, res) => {
  let nombre = req.params.nombre;
  Programa.findOne({
    where: {
      nombre: nombre
    }
  })
    .then(Programa => {
      if (Programa) {
        res.send(Programa);
      } else {
        res.send("Programa no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET programa by codigo
router.get("/:codigo", (req, res) => {
  let id = req.params.codigo;
  Programa.findOne({
    where: {
      codigo: id
    }
  })
    .then(Programa => {
      if (Programa) {
        res.send(Programa);
      } else {
        res.send("Programa no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
