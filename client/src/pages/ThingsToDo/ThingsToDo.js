import "./ThingsToDo.scss";
import Item from "../../components/Item/Item";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";

const ThingsToDo = ({ data }) => {
  if (!data) {
    return "";
  }

  const filtered = data.filter((item) => item.type === "attraction");

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="to-do">
        <div className="to-do__header"></div>
        <div className="to-do__main">
          <div className="to-do__list-container">
            {filtered.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThingsToDo;
