var express = require("express");
var router = express.Router();
var Notificacion = require("../models/notificacionModel");

//GET notificaciones
router.get("/", (req, res) => {
  Notificacion.findAll()
    .then(notificaciones => {
      res.send(notificaciones);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET notificaciones by actividad
router.get("/:actividad", (req, res) => {
  let activity = req.params.actividad;
  Notificacion.findAll({
    where: {
        actividad: activity
    }
  })
    .then(Notificacion => {
      if (Notificacion) {
        res.send(Notificacion);
      } else {
        res.send("Notificacion no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET notificaciones by usuario
router.get("/:usuario", (req, res) => {
  let user = req.params.usuario;
  Notificacion.findOne({
    where: {
        usuario: user
    }
  })
    .then(Notificacion => {
      if (Notificacion) {
        res.send(Notificacion);
      } else {
        res.send("Notificacion no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});


//POST new notificacion
router.post("/", (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      notificacion.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
  });

//DELETE notificacion
router.delete("/:codigo", (req, res) => {
    let cod = req.params.codigo;
    notificacion.destroy({
      where: { codigo: cod }
    })
      .then(() => {
        res.json({ satatus: "notificacion Eliminada" });
      })
      .catch(err => {
        res.send("error: " + err);
      });
  });
  



module.exports = router;
