import "./Item.scss";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Modal from "../Modal/Modal";

const Item = (props) => {
  const [showModal, setShowModal] = useState(false);

  if (!props) {
    return "";
  }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const {
    id,
    name,
    smallbusiness,
    stars,
    city,
    image,
    recommends,
    description,
  } = props.item;

  return (
    <>
      <div className="modal__fullpage">
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          data={props.item}
        />
      </div>

      <div id="outer__container">
        <div className="item" onClick={openModal}>
          <div className="item__main-container">
            <div className="item__upper-container">
              <div
                className="item__image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="item__business-container">
                  {/* {smallbusiness && (
                <>
                  <GiIsland className="item__image-icon" />
                  <p className="item__small-business">Small Business</p>
                </>
              )} */}
                </div>
              </div>
              <div className="item__details">
                <h5 className="item__header">{name}</h5>
                <p className="item__description">{description}</p>
              </div>
            </div>

            <div className="item__lower-container">
              <div className="item__location-container">
                <IoMdPin className="item__location-icon" />{" "}
                <span className="item__location-span">{city}</span>
              </div>
              <div className="item__icons-container">
                <div className={stars ? "item__stars" : "item__stars--hidden"}>
                  <AiFillStar className="item__star-icon" />{" "}
                  <p className="item__stars-span">{stars}</p>
                </div>
                <div className="item__recommends">
                  <p className="item__recommends-paragraph">{recommends}</p>
                  <p className="item__recommends-title">Recommended</p>
                </div>
              </div>
            </div>
          </div>
          <button className="item__btn">
            <FiPlus
              className="item__plus-icon"
              style={{ stroke: "white", strokeWidth: "3" }}
            />{" "}
            Add to planner
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
