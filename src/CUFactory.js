import { crearEmailModule } from "./moduloMailing/EmailModule.js";
import { crearDaoSolicitudesDeTurno } from "./persistencia/daos/daoSolicitudesDeTurno.js";
import { HabilitarSolicitud } from "./HabilitarSolicitud.js";

const authVacunatorio = {
  mail: "ort.proy.integrador.21@gmail.com",
  pass: "Ort123456",
};
const emailAdmin = "s.nberkowsky@gmail.com";

async function crearCU() {
  const emailModule = await crearEmailModule(authVacunatorio, emailAdmin);
  const daoSolicitudes = crearDaoSolicitudesDeTurno();
  return HabilitarSolicitud(daoSolicitudes, emailModule);
}

export { crearCU };
