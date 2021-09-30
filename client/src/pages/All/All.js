import "./All.scss";
import Item from "../../components/Item/Item";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const All = ({ data }) => {
  const { localCart, setLocalCart } = useContext(AllContext);

  if (!data) {
    return "";
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="all">
        <div className="all__business-list">
          {data.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default All;
