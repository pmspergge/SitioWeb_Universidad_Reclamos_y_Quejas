import React from "react";
import "./page_404.css"
import { Link } from "react-router-dom";
const Page_404 = () => {
  return (
    <div className="container-notAuthorized">
      <h2>No autorizado</h2>
      <Link className="link_return" to={-1}>
        Volver Atrás
      </Link>
    </div>
  );
};

export default Page_404;
