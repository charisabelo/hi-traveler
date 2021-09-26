import "./App.scss";
import { useState, useEffect } from "react";
import Start from "./pages/Start/Start";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import TransactionsPage from "./pages/TransactionsPage/TransactionsPage";
import Navbar from "./components/Navbar/Navbar";
import TodoPage from "./pages/TodoPage/TodoPage";

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
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/leads" exact component={LeadsPage}></Route>
                <Route path="/calendar" exact component={CalendarPage}></Route>
                <Route
                  path="/transactions"
                  exact
                  component={TransactionsPage}
                ></Route>
                <Route path="/todos" component={TodoPage}></Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
