import React from "react";

const PrincipalAdmin = () => {
  return (
    <>
      <h1 className="mt-4">RECLAMOS Y QUEJAS</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Visualiza el estado general de los reclamos y quejas de los usuarios.
        </li>
      </ol>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>Total de reclamos</span>
              <span className="fw-bold fs-4">12</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card container-card text-white mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>Total de quejas</span>
              <span className="fw-bold fs-4">12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">Tabla</div>
    </>
  );
};

export default PrincipalAdmin;
