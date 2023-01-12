import { Link } from "react-router-dom";

import css from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
