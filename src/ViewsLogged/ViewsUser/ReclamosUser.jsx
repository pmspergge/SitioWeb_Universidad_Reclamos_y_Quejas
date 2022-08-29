import React, { useState } from "react";
import Table1 from "../../Components/UserTables/Table1";
import FormReclamos from "../../Components/FormReclamos/FormReclamos";
import data from "../../data/data.json";
import ModalDetails from "../../Components/ModalDetails/ModalDetails";
const ReclamosUser = () => {
  const [detaisModal, setDetaisModal] = useState("");

  const dataReclamos = data.filter((value) => value.type);
  // reclamos
  const numReclamos = () => {
    return data.filter((value) => value.type).length;
  };
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
          <div className="d-grid">
            <Table1 data={dataReclamos} textModal={setDetaisModal} />
          </div>
          {/* modal */}
          <ModalDetails details={detaisModal} />
        </div>
      </div>
    </>
  );
};

export default ReclamosUser;
