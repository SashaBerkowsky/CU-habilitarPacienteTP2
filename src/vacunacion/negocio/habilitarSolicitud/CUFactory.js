import { crearEmailModule } from "../../../compartido/moduloMailing/emailModule.js";
import { crearDaoSolicitudesDeTurno } from "../../persistencia/daos/daoSolicitudesDeTurno.js";
import { HabilitarSolicitud } from "./habilitarSolicitud.js";

const authVacunatorio = {
  mail: "ort.proy.integrador.21@gmail.com",
  pass: "Ort123456",
};
const emailAdmin = "s.nberkowsky@gmail.com";

function crearCU_HabilitarPaciente() {
  const emailModule = crearEmailModule(authVacunatorio, emailAdmin);
  const daoSolicitudes = crearDaoSolicitudesDeTurno();
  return HabilitarSolicitud(daoSolicitudes, emailModule);
}

export { crearCU_HabilitarPaciente };
