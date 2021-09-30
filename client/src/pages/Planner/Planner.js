import "./Planner.scss";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const Planner = () => {
  const { localCart, setLocalCart } = useContext(AllContext);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="planner"></div>
    </motion.div>
  );
};

export default Planner;
