import "./AddBizModal.scss";
import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

const AddBizModal = ({ showAddModal, setShowAddModal }) => {
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showAddModal ? 1 : 0,
    transform: showAddModal ? `scale(1)` : `scale(0)`,
  });

  const overlayRef = useRef();
  const closeModal = (e) => {
    if (overlayRef.current === e.target) {
      setShowAddModal(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShowAddModal(false);
  };

  return (
    <>
      {showAddModal ? (
        <div className="add-modal" ref={overlayRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="add-modal__container">
              <form action="POST" onSubmit={handleOnSubmit}>
                <div className="add-modal__name-container">
                  <label htmlFor="name" className="add-modal__name-label">
                    Business Name
                  </label>
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="Enter business name"
                    name="name"
                  />
                </div>
                <div className="add-modal__type-container">
                  <label htmlFor="type" className="add-modal__type-label">
                    Business Type
                  </label>
                  <select className="add-modal__input-select" name="type">
                    <option defaultValue="">Select Type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="attraction">Attraction</option>
                    <option value="tour">Tour</option>
                  </select>
                </div>
                <div className="add-modal__file-container">
                  <label htmlFor="" className="add-modal__file-label">
                    Business Image
                  </label>
                  <input type="file" name="file" />
                </div>
                <div className="add-modal__street-container">
                  <label htmlFor="" className="add-modal__street-label">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="add-modal__input"
                    placeholder="Enter street here"
                    name="street"
                  />
                </div>
                <div className="add-modal__city-container">
                  <div className="add-modal__city-label">City & Zipcode</div>
                  <input
                    type="text"
                    className="add-modal__input"
                    placeholder="Enter city & zipcode here"
                    name="city"
                  />
                </div>
                <div className="add-modal__number-container">
                  <div className="add-modal__number-label">Business Number</div>
                  <input
                    type="text"
                    className="add-modal__input"
                    placeholder="Enter number here"
                    name="number"
                  />
                </div>
                <div className="add-modal__website-container">
                  <div className="add-modal__website-label">Website</div>
                  <input
                    type="text"
                    name="website"
                    className="add-modal__input"
                    placeholder="Enter website here"
                  />
                </div>
                <div className="add-modal__description-container">
                  <div className="add-modal__description-label">
                    Description
                  </div>
                  <textarea
                    name="description"
                    className="add-modal__input-textarea"
                    placeholder="Enter business description here"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <button type="submit" className="add-modal__btn">
                  Submit
                </button>
              </form>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default AddBizModal;
