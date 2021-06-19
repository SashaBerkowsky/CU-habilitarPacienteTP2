function crearDaoSolicitudesMongo(db) {
  const dbSolicitudes = db.collection("solicitudes");

  return {
    add: async (solicitud) => {
      await dbSolicitudes.insertOne(solicitud, function (err, res) {
        if (err) {
          throw new Error("error mongo");
        }
        console.log(res);
      });
    },
    cerrar: async () => {
      await db.close();
    },
  };
}

export { crearDaoSolicitudesMongo };
