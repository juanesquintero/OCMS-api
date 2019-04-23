var express = require("express");
var router = express.Router();
var Grupo = require("../models/GrupoModel");

//GET Grupos
router.get("/", (req, res) => {
  Grupo.findAll()
    .then(grupos => {
      res.send(grupos);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Grupo by semestre
router.get("/:semestre", (req, res) => {
  let semestre = req.params.semestre;
  Grupo.findAll({
    where: {
      semestre: semestre
    }
  })
    .then(grupo => {
      if (grupo) {
        res.send(grupo);
      } else {
        res.send("Grupo no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Grupo by asignatura
router.get("/:asignatura", (req, res) => {
  let asignatura = req.params.asignatura;
  Grupo.findAll({
    where: {
      asignatura: asignatura
    }
  })
    .then(grupo => {
      if (grupo) {
        res.send(grupo);
      } else {
        res.send("Grupo no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Grupo by nombre
router.get("/:nombre", (req, res) => {
  let nombre = req.params.nombre;
  Grupo.findOne({
    where: {
      nombre: nombre
    }
  })
    .then(grupo => {
      if (grupo) {
        res.send(grupo);
      } else {
        res.send("Grupo no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Grupo by codigo
router.get("/:codigo", (req, res) => {
  let id = req.params.codigo;
  Grupo.findOne({
    where: {
      codigo: id
    }
  })
    .then(grupo => {
      if (grupo) {
        res.send(grupo);
      } else {
        res.send("Grupo no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = router;
