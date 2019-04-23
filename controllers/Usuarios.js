var express = require("express");
var router = express.Router();
var Usuario = require("../models/usuarioModel");

//GET usuarios
router.get("/", (req, res) => {
  Usuario.findAll()
    .then(usuarios => {
      res.send(usuarios);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//GET usuario by identificacion
router.get("/:identificacion", (req, res) => {
  let id = req.params.identificacion;
  Usuario.findOne({
    where: {
      identificacion: id
    }
  })
    .then(usuario => {
      if (usuario) {
        res.send(usuario);
      } else {
        res.send("Usuario no existe");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//POST new usuario
router.post("/", (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .sendStatus({ success: false, message: "Bad Request", info: null });
  } else {
    Usuario.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

//DELETE usuario
router.delete("/:identificacion", (req, res) => {
  let id = req.params.identificacion;
  Usuario.destroy({
    where: { identificacion: id }
  })
    .then(() => {
      res.json({ satatus: "Usuario Eliminado" });
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

//PUT usuario
router.put("/:identificacion", (req, res) => {
  let id = req.params.identificacion;
  if (!req.body) {
    return res
      .status(400)
      .sendStatus({ success: false, message: "Bad Request", info: null });
  } else {
    Usuario.update(req.body, {
      where: { identificacion: id }
    })
      .then(() => {
        res.json({ status: "Usuario actualizado" });
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
