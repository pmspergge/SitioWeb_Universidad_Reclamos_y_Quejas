import React from "react";

const ModalDetails = () => {
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
            <div className="modal-body">
              <p>
                This is some placeholder content to show the scrolling behavior
                for modals. We use repeated line breaks to demonstrate how
                content can exceed minimum inner height, thereby showing inner
                scrolling. When content becomes longer than the predefined
                max-height of modal, content will be cropped and scrollable
                within the modal. asdfasdfasudhfi Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Est repellendus, velit delectus
                modi cumque iste aperiam saepe accusantium rerum placeat nobis
                harum voluptatem voluptatibus ullam. Necessitatibus neque quos
                dolorem velit, ex debitis consequuntur natus similique eligendi
                fugiat alias molestiae quas cupiditate! Dolor a possimus,
                eveniet porro similique aliquam aspernatur nisi illum aliquid,
                mollitia autem numquam nobis excepturi error nostrum tenetur
                quisquam! Iure, aspernatur porro? Quisquam fuga tempore
                doloribus delectus aliquid, illo quas. Sequi odio minus aliquid
                est id inventore, quasi voluptates deleniti autem velit
                quibusdam ea nihil beatae tempora corrupti. Quisquam vel a,
                reiciendis sed quos inventore veritatis nobis consectetur.
                asdfasdfasudhfi Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Est repellendus, velit delectus modi cumque
                iste aperiam saepe accusantium rerum placeat nobis harum
                voluptatem voluptatibus ullam. Necessitatibus neque quos dolorem
                velit, ex debitis consequuntur natus similique eligendi fugiat
                alias molestiae quas cupiditate! Dolor a possimus, eveniet porro
                similique aliquam aspernatur nisi illum aliquid, mollitia autem
                numquam nobis excepturi error nostrum tenetur quisquam! Iure,
                aspernatur porro? Quisquam fuga tempore doloribus delectus
                aliquid, illo quas. Sequi odio minus aliquid est id inventore,
                quasi voluptates deleniti autem velit quibusdam ea nihil beatae
                tempora corrupti. Quisquam vel a, reiciendis sed quos inventore
                veritatis nobis consectetur. asdfasdfasudhfi Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Est repellendus, velit
                delectus modi cumque iste aperiam saepe accusantium rerum
                placeat nobis harum voluptatem voluptatibus ullam.
                Necessitatibus neque quos dolorem velit, ex debitis consequuntur
                natus similique eligendi fugiat alias molestiae quas cupiditate!
                Dolor a possimus, eveniet porro similique aliquam aspernatur
                nisi illum aliquid, mollitia autem numquam nobis excepturi error
                nostrum tenetur quisquam! Iure, aspernatur porro? Quisquam fuga
                tempore doloribus delectus aliquid, illo quas. Sequi odio minus
                aliquid est id inventore, quasi voluptates deleniti autem velit
                quibusdam ea nihil beatae tempora corrupti. Quisquam vel a,
                reiciendis sed quos inventore veritatis nobis consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDetails;
