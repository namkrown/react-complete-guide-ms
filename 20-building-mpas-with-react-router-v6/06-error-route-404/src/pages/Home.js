import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Got to <Link to="/products">the list of products.</Link>
      </p>
    </div>
  );
}

export default HomePage;
