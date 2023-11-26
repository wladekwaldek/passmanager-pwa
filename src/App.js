import { NavLink } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  const { isAuthenticated, login } = useAuth();
  return (
    <div className="wraper">
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
        <NavLink to="/list/reg">reg</NavLink>
      </nav>
      <AuthContext.Provider value={{ isAuthenticated, login }}>
        <Navigation />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
