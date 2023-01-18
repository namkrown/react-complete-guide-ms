import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
