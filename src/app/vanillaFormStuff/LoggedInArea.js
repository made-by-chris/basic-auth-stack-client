import { useEffect, useState } from "react";

export default () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("/api/messages")
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
  }, []);
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};
