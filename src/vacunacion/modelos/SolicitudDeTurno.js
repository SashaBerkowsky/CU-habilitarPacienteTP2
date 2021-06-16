import { crearPaciente } from "./Paciente.js";
import { crearTurno } from "./Turno.js";

const estadosDeSolicitud = [
  "CONFIRMACION_DE_VACUNACION_PENDIENTE",
  "CONFIRMADO_PARA_VACUNARSE",
  "VACUNADO_PRIMERA_DOSIS",
  "VACUNADO_SEGUNDA_DOSIS",
  "VACUNACION_COMPLETA",
];

let idSolicitud = 0;

function crearSolicitudDeTurno(datos) {
  const solicitud = {};
  let paciente;
  let turno;
  let estado;
  let id;

  if (!datos.paciente) {
    throw new Error("falta paciente");
  } else {
    paciente = crearPaciente(datos.paciente);
  }

  if (!datos.turno) {
    turno = null;
  } else {
    turno = crearTurno(datos.turno);
  }

  if (!datos.estado) {
    estado = "PENDIENTE";
  } else {
    const esEstadoValido = estadosDeSolicitud.some((e) => {
      e === datos.estado;
    });
    if (!esEstadoValido) {
      throw new Error("estado de solicitud invalido");
    }
    estado = datos.estado;
  }

  id = idSolicitud++;

  solicitud.getPaciente = () => {
    return paciente;
  };

  solicitud.getTurno = () => {
    return turno;
  };

  solicitud.getEstado = () => {
    return estado;
  };

  solicitud.getId = () => {
    return id;
  };

  solicitud.getSolicitud = () => {
    return { turno, paciente, id, estado };
  };

  solicitud.getFecha = () => {
    return turno.fecha;
  };

  /* Lo hace el Dao consultando la BD
   solicitud.esElPaciente = (dni) => {
    return paciente.dni === dni;
  };

  solicitud.esLaSolicitud = (id) => {
    return id === id;
  };
  
  solicitud.confirmarSolicitud = (turno) => {
    turno = turno;
    estado = "CONFIRMADO";
  }; 
  */

  return solicitud;
}

export { crearSolicitudDeTurno };
