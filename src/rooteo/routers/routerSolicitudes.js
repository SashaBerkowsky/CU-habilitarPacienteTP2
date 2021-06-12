import express from "express";
import multer from "multer";
import { crearCU } from "../../CUFactory.js";
//import { crearImageMiddleware } from "../ImageMiddleware";
import { crearImageMiddleware } from "./ImageMiddleware.js";

/* const ImageMiddleware = crearImageMiddleware();
const upload = ImageMiddleware.crearUpload({
  dest: "./uploads",
  fieldName: "foto",
}); */

const imageMiddleware = crearImageMiddleware({
  dest: "./uploads",
  fieldName: "foto",
});

function crearRouterSolicitudes() {
  const routerSolicitudes = express.Router();

  // routerSolicitudes.post("/", (req, res) => {
  //   upload(req, res, async (err) => {
  //     if (err instanceof multer.MulterError) {
  //       throw new Error("Error subiendo imagen", err.message);
  //     }

  //     const paciente = {
  //       ...req.body,
  //       foto: {
  //         fileName: req.file.filename,
  //         filePath: `${req.file.destination}/${req.file.filename}`,
  //         root: req.file.destination,
  //       },
  //     };
  //     const cu = await crearCU();
  //     const solicitud = cu.ejecutar({ paciente: paciente });
  //     res.status(200).json(solicitud);
  //   });
  // });

  function mid(req, res, next) {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res
          .status(400)
          .send(new Error("Error subiendo imagen", err.message));
      }
      next();
    });
  }

  routerSolicitudes.post("/", mid, (req, res) => {
    const paciente = {
      ...req.body,
      foto: {
        fileName: req.file.filename,
        filePath: `${req.file.destination}/${req.file.filename}`,
        root: req.file.destination,
      },
    };
    const cu = crearCU();
    const solicitud = cu.ejecutar({ paciente: paciente });
    res.status(200).json(solicitud);
  });

  routerSolicitudes.post("/test", imageMiddleware, async (req, res) => {
    const cu = await crearCU();
    const solicitud = cu.ejecutar({ paciente: req.body });

    res.status(200).json(solicitud);
  });

  return routerSolicitudes;
}

export { crearRouterSolicitudes };
