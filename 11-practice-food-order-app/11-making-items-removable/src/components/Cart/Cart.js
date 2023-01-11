import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import css from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={css["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          name={item.name}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={css.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={css.actions}>
        <button className={css["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={css.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
