import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <div className="container_main">
          <Outlet></Outlet>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
