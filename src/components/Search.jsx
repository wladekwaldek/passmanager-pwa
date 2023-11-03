import { Formik, Form, Field } from "formik";
import classes from "./Search.module.css";

export default function Search() {
  const initialValues = {
    inputValue: "",
  };

  const handleSubmit = (values) => {
    // Здесь вы можете выполнить логику обработки отправки формы
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={classes.form}>
          <button className={classes.button}>
            <i className="fa fa-arrow-left" />
          </button>
          <Field
            type="text"
            name="inputValue"
            className={classes.field}
            placeholder="Поиск..."
          />

          <button className={classes.button}>
            <i className="fa fa-search" />
          </button>
        </Form>
      </Formik>
    </>
  );
}
