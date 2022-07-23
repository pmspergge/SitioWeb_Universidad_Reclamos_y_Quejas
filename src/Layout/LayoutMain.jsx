import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="container_main">
          <Outlet />
        </div>
      </main>
    </>
  );
}
