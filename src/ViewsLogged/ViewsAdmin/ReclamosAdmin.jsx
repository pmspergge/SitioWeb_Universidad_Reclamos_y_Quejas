import React from "react";
import TableReclamos from "../../Components/TablesAdmin/TableReclamos";
const ReclamosAdmin = () => {
  return (
    <>
      <div className="d-grid gap-1 my-3">
        <h5 className="fw-bold">TABLA DE RECLAMOS</h5>
        <TableReclamos />
      </div>
      <div
        className="modal fade"
        id="exampleModalScrollable"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Descripción
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              accusamus optio molestias ratione, fugiat natus rem quos
              asperiores eos, aut laudantium! Alias nesciunt blanditiis possimus
              molestiae reprehenderit ea nobis non, placeat libero totam
              numquam, rerum assumenda minus amet sequi similique? Minima
              aliquid laborum, fuga cupiditate recusandae, corrupti molestiae
              maiores minus vel, explicabo perferendis? Eaque corrupti vitae
              fugiat maiores eos, quisquam alias perferendis ducimus blanditiis
              recusandae error necessitatibus et quos, quod quidem qui soluta?
              Laboriosam nihil placeat corporis ducimus, facere maiores
              cupiditate repudiandae quasi nostrum voluptas veniam et molestiae
              accusamus architecto explicabo qui ad quisquam excepturi quibusdam
              nesciunt nobis quia asperiores.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReclamosAdmin;
