function crearPaciente(datos) {
  const paciente = {};
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (!datos.nombre) {
    throw new Error("falta el nombre");
  } else {
    paciente.nombre = datos.nombre;
  }

  if (!datos.apellido) {
    throw new Error("falta el apellido");
  } else {
    paciente.apellido = datos.apellido;
  }

  if (!datos.email) {
    throw new Error("falta el email");
  }

  //verifica si es un email
  if (!emailFormat.test(datos.email)) {
    throw new Error("no se ingreso un email");
  } else {
    paciente.email = datos.email;
  }

  if (!datos.antecedentes) {
    throw new Error("falta antecedentes");
  } else {
    paciente.antecedentes = datos.antecedentes;
  }

  if (!datos.foto) {
    throw new Error("falta foto");
  } else {
    paciente.foto = datos.foto;
  }

  if (!datos.edad) {
    throw new Error("falta la edad");
  }

  if (isNaN(Number(datos.edad))) {
    throw new Error("la edad debe ser un entero");
  } else {
    paciente.edad = Number(datos.edad);
  }

  if (!datos.dni) {
    throw new Error("falta el dni");
  }

  if (isNaN(Number(datos.dni))) {
    throw new Error("el dni debe ser numerico");
  } else {
    paciente.dni = Number(datos.dni);
  }

  return paciente;
}

export { crearPaciente };
