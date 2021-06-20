import { crearEmailModule } from "../../../compartido/moduloMailing/emailModule.js";
import { crearDaoSolicitudesDeTurno } from "../../persistencia/daos/daoSolicitudesDeTurno.js";
import { getDaoSolicitudes } from "../../persistencia/factoryDaoSolicitudes.js";
import { HabilitarSolicitud } from "./habilitarSolicitud.js";
import { getAuth } from "../../../config.js";

const emailAdmin = "s.nberkowsky@gmail.com";

function crearCU_HabilitarPaciente() {
  const emailModule = crearEmailModule(getAuth(), emailAdmin);
  const daoSolicitudes = crearDaoSolicitudesDeTurno();
  const daoSolicitudesMongo = getDaoSolicitudes();
  daoSolicitudesMongo.getByEstado("PENDIENTE");
  return HabilitarSolicitud(daoSolicitudesMongo, emailModule);
}

export { crearCU_HabilitarPaciente };
