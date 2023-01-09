import React from "react";

import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={css.button}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
