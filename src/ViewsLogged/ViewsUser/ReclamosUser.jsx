import React from "react";
import FormReclamos from "../../Components/FormReclamos/FormReclamos";
const ReclamosUser = () => {
  return (
    <>
      <h1 className="mt-4">PRESENTA TUS RECLAMOS</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Presenta tus reclamos mediante el siguiente formulario.
        </li>
      </ol>
      <div className="row">
        <FormReclamos/>
      </div>
    </>
  );
};

export default ReclamosUser;
