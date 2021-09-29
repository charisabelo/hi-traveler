import "./Planner.scss";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";

const Planner = () => {
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
