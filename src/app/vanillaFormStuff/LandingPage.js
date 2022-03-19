import { Link } from "react-router-dom";
export default () => (
  <div>
    <h1>Landing Page</h1>
    <p>This is the landing page.</p>
    <p>
      <Link to="/register">Register</Link>
    </p>
  </div>
);
