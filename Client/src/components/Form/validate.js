export const validateUser = (data) => {
  let errors = {username: 0, password: 0};

  if (!data.username || data.username.trim() === "") {
    errors.e = "";
  } else {
    if (!data.username) {
      errors.e2 = "Ingresa un email.";
      errors.username++
    }
    if (!data.username.includes("@")) {
      errors.e1 = "Ingresa un email válido.";
      errors.username++
    }
    if (data.username.length > 35) {
      errors.e3 = "Debe tener menos de 36 caracteres.";
      errors.username++
    }
  }
  if (!data.password || data.password.trim() === "") {
    errors.p = "";
  } else {
    if (!/^(?=(?:[^A-Za-z]*[A-Za-z]){4})(?=(?:\D*\d){4}).*$/.test(data.password)) {
      errors.p1 = "El password debe incluir al menos 4 números y 4 letras";
      errors.password++
    }
    if (
      (data.password.length >= 1 && data.password.length < 6) ||
      data.password.length > 10
    ) {
      errors.p2 = "El password debe tener mas de 8 y menos de 24 caracteres.";
      errors.password++
    }
  }
  return errors;
};
