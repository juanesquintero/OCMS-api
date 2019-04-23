var express = require("express");
var router = express.Router();
var Calendario = require("../models/calendarioModel");

//GET Calendario
router.get("/", (req, res) => {
  Calendario.findAll()
    .then(Calendarios => {
      res.send(Calendarios);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new Calendario
router.post("/", (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Calendario.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

//DELETE Calendario
router.delete("/:semestre", (req, res) => {
    let sem = req.params.semestre;
    Calendario.destroy({
      where: { semestre: sem }
    })
      .then(() => {
        res.json({ satatus: "Calendario Eliminado" });
      })
      .catch(err => {
        res.send("error: " + err);
      });
});


//PUT Calendario
router.put("/:semestre", (req, res) => {
    let sem = req.params.semestre;
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Calendario.update(req.body, {
        where: { semestre: sem }
      })
        .then(() => {
          res.json({ status: "Calendario actualizado" });
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

module.exports = router;
