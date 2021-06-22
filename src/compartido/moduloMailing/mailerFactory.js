import { createEmailComprobante } from './emailComprobante.js'
//import { getAuth } from '../../config.js'

//const credenciales = {mail: getAuth.mail , pass: getAuth.pass}
const credenciales = {mail: "ort.proy.integrador.21@gmail.com " , pass: "Ort123456"}

async function crearMailer() {
  return  createEmailComprobante(credenciales.mail, credenciales.pass)
}

export {
  crearMailer
}