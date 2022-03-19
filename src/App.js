import React from "react";
import { Counter } from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./app/vanillaFormStuff/LandingPage.js";
import Register from "./app/vanillaFormStuff/Register.js";
import LoggedInArea from "./app/vanillaFormStuff/LoggedInArea.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<LoggedInArea />} />
      </Routes>
      {/* <hr /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
