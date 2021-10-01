import "./App.scss";
import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Planner from "./pages/Planner/Planner";
import Restaurants from "./pages/Restaurants/Restaurants";
import ThingsToDo from "./pages/ThingsToDo/ThingsToDo";
import Tours from "./pages/Tours/Tours";
import All from "./pages/All/All";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

export const AllContext = React.createContext();

const App = () => {
  let location = useLocation();
  const [businesses, setBusinesses] = useState();
  const [plannerCart, setPlannerCart] = useState([]);
  const [didChange, setDidChange] = useState(false);
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem("planner")) || plannerCart
  );

  const globalContext = {
    localCart,
    setLocalCart,
    plannerCart,
    setPlannerCart,
    didChange,
    setDidChange,
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("planner"))) {
      setLocalCart(JSON.parse(localStorage.getItem("planner")));
    }

    axios.get("http://localhost:8080/businesses").then((res) => {
      setBusinesses(res.data);
    });
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8080/businesses").then((res) => {
  //     setBusinesses(res.data);
  //   });
  // }, [businesses]);

  return (
    <div className="app">
      <AllContext.Provider value={globalContext}>
        <Navbar localCart={localCart} />
        <div className="app__main">
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route
                path="/"
                exact
                render={() => (
                  <Home businesses={businesses} setBusinesses={setBusinesses} />
                )}
              ></Route>
              <Route path="/planner" exact component={Planner}></Route>
              <Route
                path="/restaurants"
                exact
                render={() => <Restaurants data={businesses} />}
              ></Route>
              <Route
                path="/thingstodo"
                exact
                render={() => <ThingsToDo data={businesses} />}
              ></Route>
              <Route
                path="/tours"
                exact
                render={() => <Tours data={businesses} />}
              ></Route>
              <Route
                path="/all"
                exact
                render={() => <All data={businesses} />}
              ></Route>
            </Switch>
          </AnimatePresence>
        </div>
        <Footer />
      </AllContext.Provider>
    </div>
  );
};

export default App;
