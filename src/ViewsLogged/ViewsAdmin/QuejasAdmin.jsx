import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Table3 from "../../Components/AdminTables/Table3";
import ModalDetails from "../../Components/ModalDetails/ModalDetails";
import ModalDelete from "../../Components/ModalDetails/ModalDelete";
import data from "../../data/data.json";
const QuejasAdmin = () => {
  const [idTicket, setIdTicket] = useState(undefined);
  const [reclamos, setReclamos] = useState([]);
  const [cardData, setCardData] = useState({});
  const [detaisModal, setDetaisModal] = useState("");
  // reclamos
  useEffect(() => {
    const DATA = data.filter((value) => !value.type);
    setReclamos(DATA);
  }, []);
  // valores de los card
  useEffect(() => {
    const DATA = {
      rRecibidas: data.filter((value) => !value.type).length,
    };
    setCardData(DATA);
  }, []);
  const deleteTicket = () => {
    const DATA = reclamos.filter((value) => value.id !== idTicket);
    setReclamos(DATA);
  };
  return (
    <>
      <div className="d-grid gap-1 my-3 bg-white p-4 rounded">
        <h5 className="fw-bold">INFORMACIÓN DE LAS QUEJAS</h5>
        <div className="d-grid gap-1">
          <div className="row">
            <Card
              title="Quejas Recibidas"
              cant={cardData.rRecibidas}
              details={"Total de quejas"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div className="d-grid gap-1 my-3 bg-white p-4 rounded">
        <Table3
          data={reclamos}
          textModal={setDetaisModal}
          idButton={setIdTicket}
        />
      </div>
      {/* modal */}
      <ModalDetails details={detaisModal} />
      <ModalDelete functionDelete={deleteTicket} />
    </>
  );
};

export default QuejasAdmin;
