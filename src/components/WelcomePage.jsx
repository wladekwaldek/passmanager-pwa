import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import classes from "./WelcomePage.module.css";

const webApp = window.Telegram.WebApp;

const validationSchema = Yup.object().shape({
  inputValue: Yup.string().required("Поле обязательно для заполнения"),
});

const WelcomePage = () => {
  const [telegram_id, setTelegram_id] = useState("");
  const initialValues = {
    inputValue: "",
  };

  const handleSubmit = (values) => {
    // Здесь вы можете выполнить логику обработки отправки формы
    alert(telegram_id);
  };

  useEffect(() => {
    webApp.ready();
    if (webApp.initData) setTelegram_id(webApp.initDataUnsafe.user.first_name);
  }, []);

  if (!telegram_id) {
    return (
      <div>
        <span
          style={{
            color: "white",
            fontStyle: "italic",
            fontSize: "2em",
            marginRight: 5,
          }}
        >
          Войдите через
        </span>
        <a href="https://t.me/passwordsMaker_bot">телеграм-бот</a>
      </div>
    );
  } else {
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
  }
};

export default WelcomePage;
