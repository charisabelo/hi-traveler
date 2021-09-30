import "./Planner.scss";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";
import { AllContext } from "../../App";
import React, { useContext } from "react";
import Item from "../../components/Item/Item";

const Planner = () => {
  const { localCart, setLocalCart, plannerCart, setPlannerCart } =
    useContext(AllContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="planner">
        <div className="planner__list-container">
          {localCart.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Planner;
