import React from "react";
import Users from "./Users";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };
  return (
    <>
      <div>Admin</div>
      <Users></Users>
      <button onClick={signOut}>Cerrar sesión</button>
    </>
  );
};

export default Admin;
