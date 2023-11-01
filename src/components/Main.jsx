import classes from "./WelcomePage.module.css";

const Main = () => {
  return (
    <div className={classes.wraper}>
      <button className={classes.element}>Электронные почты</button>
      <button className={classes.element}>Сайты</button>
      <button className={classes.element}>Социальные сети</button>
      <button className={classes.element}>Другое</button>
    </div>
  );
};

export default Main;
