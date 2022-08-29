import React from "react";

const ModalDetails = ({ details }) => {
  return (
    <>
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
                Detalles
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{details}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;
