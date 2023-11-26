import { useNavigate } from "react-router-dom";
import classes from "./WelcomePage.module.css";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={classes.element}
        onClick={() => navigate("/list/form")}
      >
        Электронные почты
      </button>
      <button className={classes.element}>Сайты</button>
      <button className={classes.element}>Социальные сети</button>
      <button className={classes.element}>Другое</button>
    </>
  );
};

export default MainPage;
