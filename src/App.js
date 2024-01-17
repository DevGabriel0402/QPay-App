import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route
          path="/createAccount"
          Component={CreateAccount}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
