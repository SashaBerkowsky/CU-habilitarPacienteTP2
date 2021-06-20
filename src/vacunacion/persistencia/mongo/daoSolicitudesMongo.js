function crearDaoSolicitudesMongo(db) {
  const dbSolicitudes = db.collection("solicitudes");

  async function findByDni(dni) {
    return await dbSolicitudes.findOne({
      "paciente.dni": dni,
    });
  }

  return {
    add: async (solicitud) => {
      const solicitudByPaciente = findByDni(solicitud.paciente.dni);
      const solicitudById = await dbSolicitudes.findOne({
        id: { $eq: solicitud.id },
      });
      if (!(solicitudById && solicitudByPaciente)) {
        await dbSolicitudes.insertOne(solicitud, function (err, res) {
          if (err) {
            throw new Error("error mongo");
          }
        });
      } else {
        console.log("Hay duplicados");
      }
    },
    getByDni: async (dni) => {
      const solicitud = findByDni(dni);

      if (solicitud) {
        return { solicitud, found: 1 };
      } else {
        return { found: 0 };
      }
    },
    getByEstado: async (estado) => {
      const solicitudes = await dbSolicitudes
        .find({ estado: { $eq: estado } })
        .toArray();

      if (solicitudes) {
        return { solicitudes, found: solicitudes.length };
      } else {
        return { found: 0 };
      }
    },
    getSolicitudesParaRecordatorio: async (estado) => {
      const solicitudesConfirmadas = this.getByEstado(estado);
    },

    cerrar: async () => {
      await db.close();
    },
  };
}

export { crearDaoSolicitudesMongo };
