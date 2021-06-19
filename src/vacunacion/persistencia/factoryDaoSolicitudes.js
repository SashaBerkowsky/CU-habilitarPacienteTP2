import { crearDaoSolicitudesMongo } from "./mongo/daoSolicitudesMongo.js";
import { crearMongoClient } from "./mongo/mongoClient.js";
import { getDBAuth } from "../../config.js";

let daoSolicitudesMongo;

const conectionStr = getDBAuth();
const mongoClient = crearMongoClient(conectionStr);
const db = await mongoClient.connect();
daoSolicitudesMongo = crearDaoSolicitudesMongo(db);

function getDaoSolicitudes() {
  return daoSolicitudesMongo;
}

export { getDaoSolicitudes };
