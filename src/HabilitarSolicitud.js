import { crearSolicitudDeTurno } from "./modelos/SolicitudDeTurno.js";

function HabilitarSolicitud(daoSolicitudesDeTurno, emailModule) {
  return {
    ejecutar: async (datosSolicitud) => {
      const solicitud = crearSolicitudDeTurno(datosSolicitud);
      const fueAgregado = daoSolicitudesDeTurno.add(solicitud);
      if (!fueAgregado) {
        throw new Error("el paciente ya esta en la lista de espera");
      }
      await emailModule.avisoAPaciente(solicitud.paciente);
      await emailModule.avisoAAdmin(solicitud.paciente);
      return solicitud;
    },
  };
}

export { HabilitarSolicitud };
