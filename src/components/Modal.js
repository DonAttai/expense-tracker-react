import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../App";

const Modal = () => {
  const { closeModal, modalContent } = useContext(GlobalContext);
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <div className="row">
      <div className="col col-md-4 mx-auto">
        <div
          className="mt-3 mb-0 text-center font-weight-bold"
          style={{ color: "red", backgroundColor: "white" }}
        >
          {modalContent}
        </div>
      </div>
    </div>
  );
};

export default Modal;
