export const validateUser = (data) => {
  let errors = {};

  if (!data.username || data.username.trim() === "") {
    errors.e = "";
  } else {
    if (!data.username) {
      errors.e2 = "Ingresa un email.";
    }
    if (!data.username.includes("@")) {
      errors.e1 = "Ingresa un email válido.";
    }
    if (data.username.length > 35) {
      errors.e3 = "Debe tener menos de 36 caracteres.";
    }
  }
  if (!data.password || data.password.trim() === "") {
    errors.p = "";
  } else {
    if (!/^(?=(?:[^A-Za-z]*[A-Za-z]){4})(?=(?:\D*\d){4}).*$/.test(data.password)) {
      errors.p1 = "El password debe incluir al menos 4 números y 4 letras";
    }
    if (
      (data.password.length >= 1 && data.password.length < 6) ||
      data.password.length > 10
    ) {
      errors.p2 = "El password debe tener mas de 8 y menos de 24 caracteres.";
    }
  }
  return errors;
};
