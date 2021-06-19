import { crearRecordatorio } from "./casoDeUso_enviarRecordatorio.js";
import { createEmailController } from "../../compartido/email/EmailController.js";
import { crearDaoSolicitudesCache } from "../../vacunacion/persistencia/DaoPersonasCache.js";


const emailController = async () => {
  const controller = await createEmailController(
    "ort.proy.integrador.21@gmail.com",
    "Ort123456"
  );
  return controller;
};
const enviadorMails =await emailController()


 function crearCURecodatorio() {
  const dao =  crearDaoSolicitudesCache()
  
  
  const recordatorio = crearRecordatorio(enviadorMails,dao);

  return recordatorio;
}

export { crearCURecodatorio };
