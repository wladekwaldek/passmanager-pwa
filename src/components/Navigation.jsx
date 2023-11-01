import { Routes, Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import Main from "./Main";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/list" element={<Main />} />
    </Routes>
  );
}
