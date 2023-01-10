import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const sumCallbackFx = (accumulator, item) => {
    return accumulator + item.amount;
  };
  const numberOfCartItems = cartContext.items.reduce(sumCallbackFx, 0);
  return (
    <button className={css.button} onClick={props.onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
