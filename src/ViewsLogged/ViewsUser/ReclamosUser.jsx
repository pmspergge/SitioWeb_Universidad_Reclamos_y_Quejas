import React from "react";
import FormReclamos from "../../Components/FormReclamos/FormReclamos";
const ReclamosUser = () => {
  return (
    <>
      <div className="row my-2 shadow">
        <FormReclamos />
      </div>
      <div className="row my-2 shadow">
        <div className="card p-3">
          <h2>TABLA DE RECLAMOS</h2>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">
              Información de todos los reclamos.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ReclamosUser;
