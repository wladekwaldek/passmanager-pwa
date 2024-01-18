import { useFormik } from "formik";
import classes from "./Search.module.css";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      param: "",
    },
    onSubmit: (values) => {
      navigation(`/list?query=${values.param}`);
    },
  });

  return (
    <>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <button className={classes.button} onClick={() => navigation("/")}>
          <i className="fa fa-arrow-left" />
        </button>
        <input
          type="text"
          name="param"
          id="param"
          className={classes.field}
          placeholder="Поиск..."
          onChange={formik.handleChange}
          value={formik.values.param}
        />

        <button className={classes.button} type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </>
  );
}
