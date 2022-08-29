import React from "react";

const ModalDelete = ({ functionDelete }) => {
  return (
    <div
      className="modal fade"
      id="exampleModalDelete"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Eliminar
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            ¿Está seguro de eliminar este elemento?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => {
                functionDelete();
              }}
            >
              Seguro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
