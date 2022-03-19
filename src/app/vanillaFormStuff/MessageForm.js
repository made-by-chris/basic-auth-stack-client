// POST http://localhost:8080/messages
// Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWNlODE5OTM1ZTUzOWMzNDNmMTQxZWNlIiwiaWF0IjoxNjQ3NDYwODgxLCJleHAiOjE2NDc0NjI2ODF9.OTd-LjFvBjMv_CLcXQ__6j2qzVx6IqrBUFoH0iEN01Y
// Content-Type: application/json

// {
//     "from": "bob",
//     "to": "dave",
//     "message": "1010101000101101"
// }

export default function MessageForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var object = {};
    data.forEach(function (value, key) {
      object[key] = value;
    });

    const jwt = localStorage["user-jwt"];
    fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${JSON.parse(jwt)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
        } else {
          alert(data.message);
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="to" type="text" placeholder="to" />
      <input name="message" type="text" placeholder="message" />
      <button>send</button>
    </form>
  );
}
