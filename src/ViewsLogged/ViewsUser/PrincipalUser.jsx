import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Table1 from "../../Components/UserTables/Table1";
import data from "../../data/data.json";
import ModalDetails from "../../Components/ModalDetails/ModalDetails";

const PrincipalUser = () => {
  const [detaisModal, setDetaisModal] = useState("");
  // reclamos
  const numReclamos = () => {
    return data.filter((value) => value.type).length;
  };
  // quejas
  const numQuejas = () => {
    return data.filter((value) => !value.type).length;
  };
  return (
    <>
      <h1 className="mt-4">INFORMACIÓN GENERAL</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Visualiza la información de tus reclamos y quejas.
        </li>
      </ol>
      <div className="d-grid">
        <div className="row">
          <Card
            title="Tus reclamos"
            cant={numReclamos()}
            details={"Total de reclamos"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
              </svg>
            }
          />
          <Card
            title="Tus quejas"
            cant={numQuejas()}
            details={"Total de quejas"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-chat-dots"
                viewBox="0 0 16 16"
              >
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
              </svg>
            }
          />
        </div>
      </div>
      <div className="d-grid">
        <Table1 data={data} textModal={setDetaisModal} />
      </div>
      {/* modal */}
      <ModalDetails details={detaisModal} />
    </>
  );
};

export default PrincipalUser;
