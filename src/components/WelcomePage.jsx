import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <div
      style={{
        background: "purple",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Field
            type="text"
            name="inputValue"
            placeholder="Введите что-нибудь"
            style={{
              padding: "10px",
              borderRadius: "5px",
              width: "100%",
            }}
          />
          <ErrorMessage
            name="inputValue"
            component="div"
            style={{ color: "white" }}
          />
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "white",
              color: "purple",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default WelcomePage;
