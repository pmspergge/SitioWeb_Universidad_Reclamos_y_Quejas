import React from "react";
import ImagenPrincipal from "../../images/image2.svg";
import "./main.css";
export default function Main() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h1 className="title_principal fw-bolder">
            Presenta tus reclamos y quejas
          </h1>
          <p className="description_principal">
            A través del siguiente espacio usted podrá formular las peticiones,
            quejas, reclamos o comentarios que tenga con respecto a una
            determinada dependencia administrativa o unidad académica de la
            Universidad del Kongo, conforme a lo establecido en la Resolución R-
            141 de 2019, expedida por la Rectoría de la institución.<br></br> De
            igual forma, la Resolución Rectoral N° 0246 de 2020 por medio del
            cual se establece el trámite transitorio de Peticiones, Quejas,
            Reclamos, Sugerencias y Felicitaciones durante la Emergencia
            Económica, Social y Ecológica por el Coronavirus COVID – 19.
            <br></br> La especificación de su nombre completo y de su correo
            electrónico es obligatoria para que los funcionarios encargados de
            darle trámite a sus comentarios, puedan atenderlo correctamente.
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center col-xs-12 col-sm-10 col-md-10 col-lg-5 col-xl-5">
          <img
            className="img-fluid"
            src={ImagenPrincipal}
            alt="Imagen principal"
          />
        </div>
      </div>
    </div>
  );
}
