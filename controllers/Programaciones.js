var express = require("express");
var router = express.Router();
var Programacion = require("../models/programacionModel");

//GET Programaciones
router.get("/", (req, res) => {
  Programacion.findAll()
    .then(Programacions => {
      res.send(Programacions);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new Programacion
router.post("/", (req, res) => {
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Programacion.create(req.body)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

//DELETE Programacion
router.delete("/:codigo", (req, res) => {
    let cod = req.params.codigo;
    Programacion.destroy({
      where: { codigo: cod }
    })
      .then(() => {
        res.json({ satatus: "Programacion Eliminado" });
      })
      .catch(err => {
        res.send("error: " + err);
      });
});


//PUT Programacion
router.put("/:codigo", (req, res) => {
    let cod = req.params.codigo;
    if (!req.body) {
      return res
        .status(400)
        .sendStatus({ success: false, message: "Bad Request", info: null });
    } else {
      Programacion.update(req.body, {
        where: { codigo: cod }
      })
        .then(() => {
          res.json({ status: "Programacion actualizado" });
        })
        .catch(err => {
          res.json("error: " + err);
        });
    }
});

module.exports = router;
