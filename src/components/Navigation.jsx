import { Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import Search from "./Search";
import RegistrationForm from "./RegistrationForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import List from "./List";

export default function Navigation() {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={auth.isAuthenticated ? <MainPage /> : <WelcomePage />}
      />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}
