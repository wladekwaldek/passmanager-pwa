import { Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import List from "./List";
import Form from "./Form";

export default function Navigation() {
  const auth = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={auth.isAuthenticated ? <MainPage /> : <WelcomePage />}
      />
      <Route path="/list/:param?" element={<List />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}
