import React from "react";
import FormQuejas from "../../Components/FormQuejas/FormQuejas";
const QuejasUser = () => {
  return (
    <>
      <div className="row my-2 shadow">
        <FormQuejas />
      </div>
      <div className="row my-2 shadow">
        <div className="card p-3">
          <h2>TABLA DE LAS QUEJAS</h2>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">
              Información de todas las quejas
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default QuejasUser;
