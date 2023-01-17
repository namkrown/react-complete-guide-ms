import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Default html anchor<a href="/products">the list of products.</a>
      </p>
      <p>
        Got to <Link to="/products">the list of products.</Link>
      </p>
    </div>
  );
}

export default HomePage;
