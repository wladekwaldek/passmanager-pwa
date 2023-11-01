import { NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <nav
        style={{ margin: 10, display: "flex", justifyContent: "space-between" }}
      >
        <NavLink to="/">WP</NavLink>
        <NavLink to="/list">main</NavLink>
        <NavLink to="/list/aaa">aaa</NavLink>
      </nav>
      <Navigation />
    </>
  );
}

export default App;
