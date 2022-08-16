import React from "react";
import err_404 from "../../images/15.svg";
import "./page_404.css";
import { Link } from "react-router-dom";
const Page_404 = () => {
  return (
    <div className="container_page404">
      <img
        className="image_page404"
        src={err_404}
        alt="Page 404"
        title="Page 404"
      />
      <Link className="link_return" to="/">Volver a la página principal</Link>
    </div>
  );
};

export default Page_404;
