import { useRef } from "react";

export default function Register() {
  const passwordConfirmationRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = new FormData(form);
    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    if (data.get("password") === passwordConfirmationRef.current.value) {
      fetch("/api/register", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("Successfully registered!");
          } else {
            alert(data.message);
          }
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="name" />
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <input
        ref={passwordConfirmationRef}
        type="password"
        placeholder="Confirm Password"
      />
      <button>Register</button>
    </form>
  );
}
