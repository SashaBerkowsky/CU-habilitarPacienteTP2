import FormData from "form-data";
import fs from "fs";
import axios from "axios";


const yo = {
    nombre: "Sasha",
    apellido: "Berkowsky",
    edad: 20,
    dni: 42816270,
    email: "s.nberkowsky@gmail.com",
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