import classes from "./WelcomePage.module.css";

const MainPage = () => {
  return (
    <>
      <button className={classes.element}>Электронные почты</button>
      <button className={classes.element}>Сайты</button>
      <button className={classes.element}>Социальные сети</button>
      <button className={classes.element}>Другое</button>
    </>
  );
};

export default MainPage;
