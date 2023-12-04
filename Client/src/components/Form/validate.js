import * as yup from 'yup' 

const passwordRegExp = /^(?=(?:.*[A-Za-z]){4})(?=(?:.*\d){4})[A-Za-z\d]{8,}$/;


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

export const yupRegisterValidation = yup.object().shape({
  first_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  user_email: yup.string().email('Please enter a valid email').required('Required'),
  user_handle: yup.string().min(3).required('Required'),
  user_password:yup.string().min(3).matches(passwordRegExp, {message: 'Password must have at least 4 letters and 4 numbers'}).required('Required'),
  confirm_password:yup.string().oneOf([yup.ref('user_password'), null], 'Passwords must match').required('Required'),
})