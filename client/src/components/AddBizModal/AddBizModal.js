import "./AddBizModal.scss";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const AddBizModal = ({ showAddModal, setShowAddModal }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showAddModal ? 1 : 0,
    transform: showAddModal ? `scale(1)` : `scale(0)`,
  });

  return (
    <>
      {showAddModal ? (
        <div className="add-modal">
          <div className="add-modal__container"></div>
        </div>
      ) : null}
    </>
  );
};

export default AddBizModal;
