const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

const validation = (useData) => {
  const objErrors = {};

  if (!useData.username) {
    objErrors.username = "Debe completar este dato.";
  } else if (!regexUsername.test(useData.username)) {
    objErrors.username = "El usuario debe ser un mail válido.";
  } else if (useData.username.length > 35) {
    objErrors.username = "El usuario debe tener menos de 35 caracteres.";
  }

  if (!useData.password) {
    objErrors.password = "Debe completar este dato.";
  } else if (!regexPassword.test(useData.password)) {
    objErrors.password =
      "Debe tener entre 6 y 10 caracteres y al menos un número.";
  }

  return objErrors;
};

export default validation;
