import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    // Example of how you can programatically navigate
    navigate("products");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>
        Got to <Link to="products">the list of products.</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </div>
  );
}

export default HomePage;
