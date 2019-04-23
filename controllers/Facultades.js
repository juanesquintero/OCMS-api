var express = require("express");
var router = express.Router();
var Facultad = require("../models/facultadModel");

//GET Facultads
router.get("/", (req, res) => {
  Facultad.findAll()
    .then(facultades => {
      res.send(facultades);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Facultad by nombre
router.get("/:nombre", (req, res) => {
  let nombre = req.params.nombre;
  Facultad.findOne({
    where: {
      nombre: nombre
    }
  })
    .then(facultad => {
      if (facultad) {
        res.send(facultad);
      } else {
        res.send("Facultad no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Facultad by codigo
router.get("/:codigo", (req, res) => {
  let cod = req.params.codigo;
  Facultad.findOne({
    where: {
      codigo: cod
    }
  })
    .then(facultad => {
      if (facultad) {
        res.send(facultad);
      } else {
        res.send("Facultad no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
