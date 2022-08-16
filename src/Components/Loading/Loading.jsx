import React from "react";
import Preloader from "../Preloader/Preloader";
import "./loading.css";
const Loading = () => {
  return (
    <div className="container_loading_page">
      <h3>Cargando...</h3>
      <Preloader></Preloader>
    </div>
  );
};

export default Loading;
