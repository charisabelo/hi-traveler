import "./Tours.scss";
import Item from "../../components/Item/Item";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";

const Tours = ({ data }) => {
  if (!data) {
    return "";
  }

  const filtered = data.filter((item) => item.type === "tour");

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="tours">
        <div className="tours__header"></div>
        <div className="tours__main">
          <div className="tours__list-container">
            {filtered.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tours;
