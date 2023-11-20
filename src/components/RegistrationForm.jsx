import classes from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  inputEmail: Yup.string().required("Поле обязательно для заполнения"),
  inputPass: Yup.string().required("Поле обязательно для заполнения"),
});

export default function RegistrationForm() {
  const initialValues = {
    inputEmail: "",
    inputPass: "",
  };

  const handleSubmit = (values) => {
    // Здесь вы можете выполнить логику обработки отправки формы
    console.log(values);
  };
  return (
    <>
      <div className={classes.head}>Регистрация</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={classes.form}>
          <span>Email:</span>
          <Field type="text" name="inputEmail" className={classes.field} />
          <ErrorMessage
            name="inputEmail"
            component="div"
            style={{ color: "white" }}
          />
          <span htmlFor="inputPass">Пароль:</span>

          <Field type="text" name="inputPass" className={classes.field} />
          <ErrorMessage
            name="inputPass"
            component="div"
            style={{ color: "white" }}
          />
          <button type="submit" className={classes.button}>
            OK
          </button>
          <button type="submit" className={classes.button}>
            login
          </button>
        </Form>
      </Formik>
    </>
  );
}
