import "./AddBizModal.scss";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const AddBizModal = (props) => {
  const { showAddModal, setShowAddModal } = props;

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showAddModal ? 1 : 0,
    transform: showAddModal ? `scale(1)` : `scale(0)`,
  });

  const { setBusinesses } = useContext(AllContext);

  const [name, setName] = useState();
  const [type, setType] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [number, setNumber] = useState();
  const [website, setWebsite] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();

  const [changed, setChanged] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/businesses").then((res) => {
      setBusinesses(res.data);
    });
  }, [changed, setBusinesses]);

  const overlayRef = useRef();
  const closeModal = (e) => {
    if (overlayRef.current === e.target) {
      setShowAddModal(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("street", street);
    data.append("city", city);
    data.append("number", number);
    data.append("website", website);
    data.append("image", image);
    data.append("description", description);

    axios
      .post(`http://localhost:8080/businesses/`, data)
      .then((res) => console.log(res));
    setShowAddModal(false);
    setChanged(!changed);
  };

  return (
    <>
      {showAddModal ? (
        <div className="add-modal" ref={overlayRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="add-modal__container">
              <form onSubmit={handleOnSubmit} autoComplete="off">
                <div className="add-modal__name-container">
                  <label htmlFor="name" className="add-modal__name-label">
                    Business Name
                  </label>
                  <input
                    className="add-modal__input"
                    type="text"
                    placeholder="Enter business name"
                    name="name"
                    onChange={(event) => {
                      const { value } = event.target;
                      setName(value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="add-modal__type-container">
                  <label htmlFor="type" className="add-modal__type-label">
                    Business Type
                  </label>
                  <select
                    className="add-modal__input-select"
                    name="type"
                    onChange={(event) => {
                      const { value } = event.target;
                      setType(value);
                    }}
                  >
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
                  <input
                    type="file"
                    name="image"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setImage(file);
                    }}
                  />
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
                    onChange={(event) => {
                      const { value } = event.target;
                      setStreet(value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="add-modal__city-container">
                  <div className="add-modal__city-label">City & Zipcode</div>
                  <input
                    type="text"
                    className="add-modal__input"
                    placeholder="Enter city & zipcode here"
                    name="city"
                    onChange={(event) => {
                      const { value } = event.target;
                      setCity(value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="add-modal__number-container">
                  <div className="add-modal__number-label">Business Number</div>
                  <input
                    type="text"
                    className="add-modal__input"
                    placeholder="Enter number here"
                    name="number"
                    onChange={(event) => {
                      const { value } = event.target;
                      setNumber(value);
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="add-modal__website-container">
                  <div className="add-modal__website-label">Website</div>
                  <input
                    autoComplete="off"
                    type="text"
                    name="website"
                    className="add-modal__input"
                    placeholder="Enter website here"
                    onChange={(event) => {
                      const { value } = event.target;
                      setWebsite(value);
                    }}
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
                    onChange={(event) => {
                      const { value } = event.target;
                      setDescription(value);
                    }}
                    autoComplete="off"
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
