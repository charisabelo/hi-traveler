import "./Home.scss";
import Item from "../../components/Item/Item";
import { motion } from "framer-motion";
import { animationOpacity, transition } from "../../animations/animations";
import Modal from "../../components/Modal/Modal";
import { useEffect } from "react";
import axios from "axios";
import { AllContext } from "../../App";
import React, { useContext } from "react";

const Home = (props) => {
  const { businesses, setBusinesses } = props;
  const { localCart, setLocalCart } = useContext(AllContext);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/businesses").then((res) => {
  //     setBusinesses(res.data);
  //   });
  // }, [businesses]);

  if (!businesses) {
    return "";
  }
  console.log(props);
  const filtered = businesses.filter((item) => item.recommended);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOpacity}
      transition={transition}
    >
      <div className="home">
        <div className="home__header"></div>
        <div className="home__main">
          <div className="home__recommend-container">
            <div className="home__recommend">
              {filtered.map((item) => {
                return <Item key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </motion.div>
  );
};

export default Home;
