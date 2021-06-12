import express from "express";
import { crearCU } from "../../CUFactory.js";
import { crearImageMiddleware } from "./ImageMiddleware.js";

const imageMiddleware = crearImageMiddleware({
  dest: "./uploads",
  fieldName: "foto",
});

function crearRouterSolicitudes() {
  const routerSolicitudes = express.Router();

  routerSolicitudes.post("/", imageMiddleware, async (req, res) => {
    const cu = crearCU();
    const solicitud = await cu.ejecutar({ paciente: req.body });

    res.status(200).json(solicitud);
  });

  return routerSolicitudes;
}

export { crearRouterSolicitudes };
