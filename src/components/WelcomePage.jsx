import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./WelcomePage.module.css";

const webApp = window.Telegram.WebApp;

const validationSchema = Yup.object().shape({
  inputValue: Yup.string().required("Поле обязательно для заполнения"),
});

const WelcomePage = () => {
  const [first_name, setFirst_name] = useState("");
  const [user_id, setUser_id] = useState("");
  const [user_from_storage, setUser_from_storage] = useState(
    localStorage.getItem(user_id)
  );
  const initialValues = {
    inputValue: "",
  };

  const handleSubmit = (values) => {
    localStorage.setItem(user_id, values.inputValue);
    const id = localStorage.getItem(user_id);
    setUser_from_storage(id);
  };

  const handleButton = () => {
    const id = localStorage.getItem(user_id);
    alert(id);
  };

  useEffect(() => {
    webApp.ready();
    if (webApp.initData) {
      setFirst_name(webApp.initDataUnsafe?.user?.first_name);
      setUser_id(webApp.initDataUnsafe?.user?.id.toString());
    }
  }, [user_id]);

  if (!webApp.initData) {
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
        <a href="https://t.me/passwordsMaker_bot"> телеграм-бот</a>
      </div>
    );
  } else {
    return (
      <>
        {user_from_storage ? (
          <span
            style={{ color: "white", fontStyle: "italic", fontSize: "2em" }}
          >
            Введите пароль:
          </span>
        ) : (
          <span
            style={{ color: "white", fontStyle: "italic", fontSize: "2em" }}
          >
            Придумайте пароль:
          </span>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={user_from_storage ? handleSubmit : handleButton}
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
        <button className={classes.button} onClick={handleButton}>
          alert
        </button>
        <button
          className={classes.button}
          onClick={() => {
            localStorage.clear();
          }}
        >
          clear
        </button>
      </>
    );
  }
};

export default WelcomePage;
