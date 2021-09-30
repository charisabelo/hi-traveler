import "./Restaurants.scss";
import Item from "../../components/Item/Item";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const Restaurants = ({ data }) => {
  const { localCart, setLocalCart } = useContext(AllContext);

  if (!data) {
    return "";
  }

  const filtered = data.filter((item) => item.type === "restaurant");

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="restaurants">
        <div className="restaurants__header"></div>
        <div className="restaurants__main">
          <div className="restaurants__list-container">
            {filtered.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Restaurants;
