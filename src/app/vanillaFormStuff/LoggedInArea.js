import MessageForm from "./MessageForm";
import MessageFeed from "./MessageFeed";

export default function LoggedInArea({ user }) {
  return (
    <>
      <MessageForm />
      <MessageFeed user={user} />
    </>
  );
}
