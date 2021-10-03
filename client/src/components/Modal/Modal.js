import "./Modal.scss";
import { IoClose } from "react-icons/io5";
import { IoMdLink, IoMdPin } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import { AiFillPhone, AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import axios from "axios";
import { AllContext } from "../../App";
import React, { useContext, useRef, useEffect, useState } from "react";

const Modal = (props) => {
  const [newChange, setNewChange] = useState(false);
  // const [recommended, setRecommended] = useState(false);
  // const [recommendsObj, setRecommendsObj] = useState(
  //   JSON.parse(localStorage.getItem("recommendsObj")) || []
  // );
  const { showModal, setShowModal, data } = props;
  const modalRef = useRef();

  const { setBusinesses } = useContext(AllContext);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `scale(1)` : `scale(0)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const onClickUpdate = (id) => {
    // **future feature
    // const arrObj = JSON.parse(localStorage.getItem("recommendsObj")) || [];

    // if (!localStorage.getItem("recommendsObj")) {
    // }
    // if (arrObj.length > 0) {
    //   const found = arrObj.find((item) => item.id === data.id);
    //   if (found) {
    //     axios.put(`https://hi-traveler.herokuapp.com/${id}`, {
    //       recommends: data.recommends - 1,
    //     });
    //   } else {
    //     axios.put(`https://hi-traveler.herokuapp.com/${id}`, {
    //       recommends: data.recommends + 1,
    //     });
    //   }
    // }

    axios.put(`https://hi-traveler.herokuapp.com/businesses/${id}`, {
      recommends: data.recommends + 1,
    });

    setNewChange(!newChange);
  };

  useEffect(() => {
    axios.get("https://hi-traveler.herokuapp.com/businesses").then((res) => {
      setBusinesses(res.data);
    });
  }, [newChange, setBusinesses]);

  return (
    <>
      {showModal ? (
        <div className="modal" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal__container">
              <div
                className="modal__photo"
                style={{ backgroundImage: `url(${data.image})` }}
              ></div>
              <div className="modal__main">
                <div className="modal__main-upper">
                  <div className="modal__x-container">
                    <IoClose
                      className="modal__x-icon"
                      onClick={() => setShowModal((prev) => !prev)}
                    />
                  </div>
                  <div className="modal__details-container">
                    <div className="modal__name">{data.name}</div>
                    <a className="modal__btn-site" href={data.website}>
                      <IoMdLink className="modal__link-icon" /> Go To Site
                    </a>

                    <div
                      className={
                        !data.number || data.number === "undefined"
                          ? "modal--hidden"
                          : "modal__number"
                      }
                    >
                      <AiFillPhone
                        className={
                          data.number ? "modal__phone-icon" : "modal--none"
                        }
                      />{" "}
                      {data.number}
                    </div>

                    <div className="modal__location-container">
                      <IoMdPin className="modal__pin-icon" />
                      <div
                        className={
                          data.street ? "modal__street" : "modal--none"
                        }
                      >
                        {data.street},&nbsp;
                      </div>
                      <div className="modal__city">{data.city}</div>
                    </div>
                    <div className="modal__description-container">
                      <p className="modal__description">{data.description}</p>
                    </div>
                  </div>
                </div>
                <div className="modal__lower">
                  <div
                    className={
                      data.stars ? "modal__stars-container" : "modal--hidden"
                    }
                  >
                    <AiFillStar className="modal__stars-icon" />{" "}
                    <p className="modal__stars">{data.stars}</p>
                  </div>
                  <div
                    className="modal__recommends-container"
                    onClick={() => onClickUpdate(data.id)}
                  >
                    <BiHeart className="modal__heart-icon" />
                    <p className="modal__recommended">Recommend This</p>
                    <p className="modal__recommended-number">
                      {data.recommends}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
