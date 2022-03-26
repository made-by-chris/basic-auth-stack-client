import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    console.log(JSON.stringify(object));
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUser(data.data);
          localStorage.setItem("user-jwt", JSON.stringify(data.jwt));
          navigate(`/my-feed`);
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
}
