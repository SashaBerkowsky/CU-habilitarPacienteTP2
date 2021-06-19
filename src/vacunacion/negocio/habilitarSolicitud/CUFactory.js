import { crearEmailModule } from "../../../compartido/moduloMailing/emailModule.js";
import { crearDaoSolicitudesDeTurno } from "../../persistencia/daos/daoSolicitudesDeTurno.js";
import { HabilitarSolicitud } from "./habilitarSolicitud.js";
import { getAuth } from "../../../config.js";

const authVacunatorio = {
  mail: "ort.proy.integrador.21@gmail.com",
  pass: "Ort123456",
};
const emailAdmin = "s.nberkowsky@gmail.com";

const x = getAuth();
console.log(x);

function crearCU_HabilitarPaciente() {
  const emailModule = crearEmailModule(getAuth(), emailAdmin);
  const daoSolicitudes = crearDaoSolicitudesDeTurno();
  return HabilitarSolicitud(daoSolicitudes, emailModule);
}

export { crearCU_HabilitarPaciente };
