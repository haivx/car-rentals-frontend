import React from 'react';

const Modal = ({ visible = false, title, content, onClose, width }) => {
  return (
    <>
      <div
        class={`modal fade ${visible ? 'show' : ''} custom-modal`}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{
          display: visible ? 'block' : 'none',
        }}
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                {title}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div class="modal-body">{content}</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>
                Close
              </button>
              <button type="button" class="btn btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {visible && <div className="modal-backdrop fade show" />}
    </>
  );
};

export default Modal;
