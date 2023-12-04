import { Formik, Form, Field, ErrorMessage } from "formik";
import { yupRegisterValidation } from "./validate.js";
import GoBtn from "../common/GoBtn";

import styles from "./form.module.css";

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ registerFunction }) => {
  return (
    <div className={styles.loginCard}>
      <div>
        <div className={styles.loginBackground}></div>
        <span className={styles.titleCont}>
          <strong className={styles.mainTitle}>Create a new user</strong>
        </span>
      </div>
      <Formik
        initialValues=
        {{
          first_name: "",
          last_name: "",
          user_email: "",
          user_handle: "",
          user_password: "",
          confirm_password: "",
        }}
        validationSchema = {yupRegisterValidation} 
        onSubmit =
        {(values, { setSubmitting }) => {
          setSubmitting(false);
          registerFunction(values)
        }}
        >
        {({ isSubmitting }) => (
          <Form className={styles.loginForm}>
            <label htmlFor="user">First Name</label>
            <Field type="text" name="first_name" />
            <ErrorMessage name="first_name" component="span" />
            <label htmlFor="user">Last Name</label>
            <Field type="text" name="last_name" />
            <ErrorMessage name="last_name" component="span" />
            <label htmlFor="user">Email</label>
            <Field type="text" name="user_email" />
            <ErrorMessage name="user_email" component="span" />
            <label htmlFor="user">Username</label>
            <Field type="text" name="user_handle" />
            <ErrorMessage name="user_handle" component="span" />
            <label htmlFor="password">Password</label>
            <Field type="text" name="user_password" />
            <ErrorMessage name="user_password" component="span" />
            <label htmlFor="confirm_password">Confirm password</label>
            <Field type="text" name="confirm_password" />
            <ErrorMessage name="confirm_password" component="span" />

            <div>
              <GoBtn
                disabled={isSubmitting}
                type="button"
                content={"Create!"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
