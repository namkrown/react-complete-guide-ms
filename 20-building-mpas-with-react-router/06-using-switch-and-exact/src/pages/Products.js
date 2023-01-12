import { Link } from "react-router-dom";

const Products = () => {
  //return <h1>Products Page</h1>;
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <Link to="/products/p2">Carpet</Link>
        <li>
          <Link to="/products/p3">Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
