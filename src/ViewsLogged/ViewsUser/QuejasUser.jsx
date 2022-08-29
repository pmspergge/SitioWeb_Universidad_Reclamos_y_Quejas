import React, { useState } from "react";
import FormQuejas from "../../Components/FormQuejas/FormQuejas";
import Table1 from "../../Components/UserTables/Table1";
import data from "../../data/data.json";
import ModalDetails from "../../Components/ModalDetails/ModalDetails";
const QuejasUser = () => {
  const [detaisModal, setDetaisModal] = useState("");

  const dataQuejas = data.filter((value) => !value.type);
  // quejas
  const numQuejas = () => {
    return data.filter((value) => !value.type).length;
  };
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
          <div className="d-grid">
            <Table1 data={dataQuejas} textModal={setDetaisModal} />
          </div>
          {/* modal */}
          <ModalDetails details={detaisModal} />
        </div>
      </div>
    </>
  );
};

export default QuejasUser;
