import { Routes, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import MainPage from "./MainPage";
import Search from "./Search";
import RegistrationForm from "./RegistrationForm";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/list" element={<MainPage />} />
      <Route path="/list/form" element={<Search />} />
      <Route path="/list/reg" element={<RegistrationForm />} />
    </Routes>
  );
}
