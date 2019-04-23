var express = require("express");
var router = express.Router();
var Asistencia = require("../models/asistenciaModel");

//GET Asistencia
router.get("/", (req, res) => {
  Asistencia.findAll()
    .then(Asistencias => {
      res.send(Asistencias);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new Asistencia
router.post("/", (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Asistencia.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

//DELETE Asistencia
router.delete("/:actividad", (req, res) => {
    let activity = req.params.actividad;
    Asistencia.destroy({
      where: { actividad: activity }
    })
      .then(() => {
        res.json({ satatus: "Asistencia Eliminado" });
      })
      .catch(err => {
        res.send("error: " + err);
      });
});


//PUT Asistencia
router.put("/:actividad", (req, res) => {
    let activity = req.params.actividad;
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Asistencia.update(req.body, {
        where: { actividad: activity }
      })
        .then(() => {
          res.json({ status: "Asistencia actualizado" });
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

module.exports = router;
