import { Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import Search from "./Search";
import RegistrationForm from "./RegistrationForm";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navigation() {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={auth.isAuthenticated ? <MainPage /> : <WelcomePage />}
      />
      <Route path="/list/form" element={<Search />} />
      <Route path="/list/reg" element={<RegistrationForm />} />
    </Routes>
  );
}
