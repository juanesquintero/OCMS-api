const express = require("express");
const routes = express.Router();
routes.use(express.json());

routes.use("/facultades", require("./controllers/Facultades"));
routes.use("/programas", require("./controllers/Programas"));
routes.use("/usuarios", require("./controllers/Usuarios"));
routes.use("/grupos", require("./controllers/Grupos"));
routes.use("/agendaGrupos", require("./controllers/AgendaGrupos"));

routes.use("/calendarios", require("./controllers/Calendarios"));
routes.use("/programaciones", require("./controllers/Programaciones"));
routes.use("/actividades", require("./controllers/Actividades"));
routes.use("/notificaciones", require("./controllers/Notificaciones"));
routes.use("/asistencias", require("./controllers/Asistencias"));

// routes.use("/asignaturas", require("./controllers/Asignaturas"));



module.exports = routes;
