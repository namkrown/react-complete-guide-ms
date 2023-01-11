import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import css from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  console.log("HeaderCartButton::start");
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  console.log(items);
  const sumCallbackFx = (accumulator, item) => {
    return accumulator + item.amount;
  };
  const numberOfCartItems = items.reduce(sumCallbackFx, 0);

  const buttonCssClasses = `${css.button} ${btnIsHighlighted ? css.bump : ""}`;
  //const buttonCssClasses = `${css.button} ${css.bump}`;

  console.log(buttonCssClasses);

  useEffect(() => {
    if (items.length > 0) {
      setBtnIsHighlighted(true);

      const timerId = setTimeout(() => {
        setBtnIsHighlighted(false);
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [items]);

  console.log("HeaderCartButton::end");

  return (
    <button className={buttonCssClasses} onClick={props.onClick}>
      <span className={css.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={css.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
