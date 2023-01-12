import { NavLink } from "react-router-dom";

import css from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={css.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={css.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
