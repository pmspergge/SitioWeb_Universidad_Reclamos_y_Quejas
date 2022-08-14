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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            doloremque suscipit facilis cupiditate esse repudiandae, quaerat
            autem soluta doloribus eveniet saepe rem possimus dicta molestias
            eligendi commodi cumque aliquid corrupti placeat alias qui illo
            iusto repellendus vitae? Id sed illum dignissimos recusandae
            consectetur sint aliquam est debitis, atque ipsum laudantium
            voluptates minima nihil quae adipisci quia deserunt a quam,
            cupiditate vel quod, veritatis quo! Distinctio quaerat vitae tempora
            incidunt nobis.
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
