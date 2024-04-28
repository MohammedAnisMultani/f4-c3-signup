import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>This is not the page you are looking for</h1>
      <p>
        Please <Link to="/signup">Click here</Link> to navigate to Signup
      </p>
    </div>
  );
};
