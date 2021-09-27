import "./App.scss";
import { useState, useEffect } from "react";
import Start from "./pages/Start/Start";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Planner from "./pages/Planner/Planner";
import Restaurants from "./pages/Restaurants/Restaurants";
import ThingsToDo from "./pages/ThingsToDo/ThingsToDo";
import Tours from "./pages/Tours/Tours";
import All from "./pages/All/All";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {!isLoggedIn ? (
        <Start />
      ) : (
        <BrowserRouter>
          <div className="app">
            <Navbar />
            <div className="app__main">
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/planner" exact component={Planner}></Route>
                <Route
                  path="/restaurants"
                  exact
                  component={Restaurants}
                ></Route>
                <Route path="/thingstodo" exact component={ThingsToDo}></Route>
                <Route path="/tours" exact component={Tours}></Route>
                <Route path="/all" exact component={All}></Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
