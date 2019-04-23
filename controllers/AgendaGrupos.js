var express = require("express");
var router = express.Router();
var AgendaGrupo = require("../models/agendaGruposModel");

//GET AgendaGrupo
router.get("/", (req, res) => {
  AgendaGrupo.findAll()
    .then(AgendaGrupos => {
      res.send(AgendaGrupos);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new AgendaGrupo
router.post("/", (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      AgendaGrupo.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

//DELETE AgendaGrupo
router.delete("/:actividad", (req, res) => {
    let activity = req.params.actividad;
    AgendaGrupo.destroy({
      where: { actividad: activity }
    })
      .then(() => {
        res.json({ satatus: "AgendaGrupo Eliminado" });
      })
      .catch(err => {
        res.send("error: " + err);
      });
});


//PUT AgendaGrupo
router.put("/:actividad", (req, res) => {
    let activity = req.params.actividad;
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      AgendaGrupo.update(req.body, {
        where: { actividad: activity }
      })
        .then(() => {
          res.json({ status: "AgendaGrupo actualizado" });
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

module.exports = router;
