import "./Modal.scss";
import { IoClose } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { AiFillPhone, AiFillStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const Modal = (props) => {
  const { showModal, setShowModal, data } = props;
  const modalRef = useRef();

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

  console.log(data);

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
                      <IoMdLink className="modal__link-icon" /> Website
                    </a>
                    <div
                      className={data.number ? "modal__number" : "modal--none"}
                    >
                      <AiFillPhone className="modal__phone-icon" />{" "}
                      {data.number}
                    </div>
                    <div className="modal__location-container">
                      <div
                        className={
                          data.street ? "modal__street" : "modal--none"
                        }
                      >
                        {data.street}
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
                  <div className="modal__recommends-container">
                    <BiHeart className="modal__heart-icon" />
                    <p className="modal__recommended">Recommend this</p>
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
