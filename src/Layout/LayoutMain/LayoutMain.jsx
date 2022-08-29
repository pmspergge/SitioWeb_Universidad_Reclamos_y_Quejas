import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";
import "./LayoutMain.css";
export default function LayoutMain() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
