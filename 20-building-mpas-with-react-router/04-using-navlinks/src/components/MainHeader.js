import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import css from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
