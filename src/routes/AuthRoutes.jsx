import { Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import Signup from "../components/Signup";
import Login from "../components/Login";

import AccountSettings from "../components/AccountSettings";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/accountsettings" element={<AccountSettings />} />
    </Routes>
  );
}

export default AuthRoutes;
