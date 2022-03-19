import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LandingPage from "./app/vanillaFormStuff/LandingPage.js";
import Register from "./app/vanillaFormStuff/Register.js";
import LoggedInArea from "./app/vanillaFormStuff/LoggedInArea.js";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const jwt = localStorage["user-jwt"];
    if (jwt) {
      fetch("http://localhost:8080/users/me", {
        headers: {
          Authorization: `Bearer ${JSON.parse(jwt)}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            setUser(data.data);
            console.log(data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="App">
      <header className="nav">
        <span>{user ? `welcome back ${user.name}` : "welcome"}</span>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/register">Register</Link>
        </span>
        <span>
          <Link to="/my-feed">the feed</Link>
        </span>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/my-feed" element={<LoggedInArea user={user} />} />
      </Routes>
      {/* <hr /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
