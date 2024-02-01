function formValidation(user) {
  let error = {
    name: "",
    email: "",
  };

  if (user.name === "") {
    error.name = "Este campo no puede estar vacio";
  } else if (user.name && user.name.length < 5) {
    error.name = "Este campo debe tener minimo 5 caracteres";
  } else {
    error.name = "";
  }

  if (user.email === "") {
    error.email = "Este campo no puede estar vacio";
  } else if (user.email.includes("@")) {
    error.email = "";
  } else {
    error.email = "El mail no es valido";
  }

  return error
}

export default formValidation;
