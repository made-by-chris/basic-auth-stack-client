import { useEffect, useState } from "react";

export default function MyFeed({ user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (user) {
      fetch("/messages", {
        headers: {
          Authorization: `Bearer ${localStorage["user-jwt"]}`,
        },
      })
        .then((res) => res.json())
        .then((messages) => setMessages(messages));
    }
  }, []);
  return (
    <div>
      Im the logged in feed area
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
