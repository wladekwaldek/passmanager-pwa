import { NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import classes from "./components/WelcomePage.module.css";

function App() {
  return (
    <div className={classes.wraper}>
      <nav
        style={{
          position: "fixed",
          top: 10,

          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <NavLink to="/">WP</NavLink>
        <NavLink to="/list">main</NavLink>
        <NavLink to="/list/form">form</NavLink>
      </nav>
      <Navigation />
    </div>
  );
}

export default App;
