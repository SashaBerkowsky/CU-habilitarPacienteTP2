import express from "express";
import { crearCU_HabilitarPaciente } from "../../negocio/habilitarSolicitud/CUFactory.js";
import { crearImageMiddleware } from "./imageMiddleware.js";

const imageMiddleware = crearImageMiddleware({
  dest: "./uploads",
  fieldName: "foto",
});

function crearRouterSolicitudes() {
  const routerSolicitudes = express.Router();

  routerSolicitudes.post("/", imageMiddleware, async (req, res) => {
    const CU_HabilitarPaciente = crearCU_HabilitarPaciente();
    const solicitud = await CU_HabilitarPaciente.ejecutar({
      paciente: req.body,
    });

    res.status(200).json(solicitud);
  });

  return routerSolicitudes;
}

export { crearRouterSolicitudes };
