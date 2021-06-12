import { startServer } from "./rooteo/Server.js";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const puerto = 5000;
const url = `http://localhost:${puerto}/solicitudes`;

const yo = {
  nombre: "Sasha",
  apellido: "Berkowsky",
  edad: 20,
  dni: 42816270,
  email: "snberkowsky@gmail.com",
  antecedentes: "nada",
  foto: fs.createReadStream("./inputs/fotoPaciente.png"),
};

function crearPacienteForm() {
  const pacienteForm = new FormData();
  for (let key in yo) {
    pacienteForm.append(key, yo[key]);
  }
  return pacienteForm;
}

async function test() {
  const servidor = await startServer(puerto);
  const paciente = crearPacienteForm();
  const res = await axios.post(url + "/", paciente, {
    headers: paciente.getHeaders(),
  });

  console.log(res.data);
}

test();
