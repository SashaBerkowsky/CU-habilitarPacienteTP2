
function crearRecordatorio(emailController, dao) {
  return {
    recordarDiasAntes: (dias) => {
      
      enviarPrimeraDosis(dias,dao, emailController);
      enviarSegundaDosis(dias, dao, emailController);
    },
  };
}

function enviarPrimeraDosis(dias, dao, emailController) {
  const solicitudes = dao.obtenerSolicitudesParaRecordatorio("CONFIRMADO",dias);
  solicitudes.forEach(element=>{

    emailController.sendEmailWithImage(
      "Vacunate",
      element.paciente.email,
      "Recordatorio Primera Dosis",
      element
    );
  })     
  
}

function enviarSegundaDosis(dias, dao, emailController) {

  const solicitudes = dao.obtenerSolicitudesParaRecordatorio("COMPLETADOPD",dias);
  solicitudes.forEach(element=>{

    emailController.sendEmailWithImage(
      "Vacunate",
      element.paciente.email,
      "Recordatorio Segunda Dosis",
      element
    );
  })  

}

export { crearRecordatorio };
