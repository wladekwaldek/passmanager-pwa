import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./WelcomePage.module.css";

const validationSchema = Yup.object().shape({
  inputValue: Yup.string().required("Поле обязательно для заполнения"),
});

const WelcomePage = () => {
  const initialValues = {
    inputValue: "",
  };

  const handleSubmit = (values) => {
    // Здесь вы можете выполнить логику обработки отправки формы
    console.log(values);
  };

  return (
    <>
      <span style={{ color: "white", fontStyle: "italic", fontSize: "2em" }}>
        Введите пароль:
      </span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={classes.form}>
          <Field type="text" name="inputValue" className={classes.field} />
          <ErrorMessage
            name="inputValue"
            component="div"
            style={{ color: "white" }}
          />
          <button type="submit" className={classes.button}>
            OK
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default WelcomePage;
