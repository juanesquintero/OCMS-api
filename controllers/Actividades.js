var express = require("express");
var router = express.Router();
var Actividad = require("../models/ActividadModel");

//GET actividades
router.get("/", (req, res) => {
  Actividad.findAll()
    .then(actividades => {
      res.send(actividades);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET Actividad by codigo
router.get("/:codigo", (req, res) => {
  let cod = req.params.codigo;
  Actividad.findOne({
    where: {
      codigo: cod
    }
  })
    .then(Actividad => {
      if (Actividad) {
        res.send(Actividad);
      } else {
        res.send("Actividad no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new Actividad
router.post("/", (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .sendStatus({ success: false, message: "Bad Request", info: null });
  } else {
    Actividad.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

//DELETE Actividad
router.delete("/:codigo", (req, res) => {
  let id = req.params.codigo;
  Actividad.destroy({
    where: { codigo: id }
  })
    .then(() => {
      res.json({ satatus: "Actividad Eliminado" });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//PUT Actividad
router.put("/:codigo", (req, res) => {
  let id = req.params.codigo;
  if (!req.body) {
    return res
      .status(400)
      .sendStatus({ success: false, message: "Bad Request", info: null });
  } else {
    Actividad.update(req.body, {
      where: { codigo: id }
    })
      .then(() => {
        res.json({ status: "Actividad actualizado" });
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
