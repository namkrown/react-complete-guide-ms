import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCardState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("cartReducer-start state=" + state + ", action=" + action);

  let updatedItems = null;
  let updatedTotalAmount = null;
  console.log("cartReducer action.type=" + action.type);
  if (action.type === "ADD") {
    console.log("cartReducer Action ADD");
    // Creates new array with state.items + action.item
    updatedItems = state.items.concat(action.item);
    const itemTotalAmount = action.item.price + action.item.amount;
    updatedTotalAmount = state.totalAmount + itemTotalAmount;
    console.log(
      "cartReducer itemTotalAmount=" +
        itemTotalAmount +
        ", updatedTotalAmount=" +
        updatedTotalAmount +
        ", updatedItems=" +
        updatedItems
    );
  } else if (action.type === "REMOVE") {
    console.log("cartReducer Action REMOVE");
    //do nothing
  } else {
    console.log("cartReducer Action Default");
    updatedItems = [];
    updatedTotalAmount = 0;
  }

  const updatedState = {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };

  console.log("cartReducer-end");
  console.log(updatedState);
  return updatedState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCardState
  );

  const addItemToCartHandler = (item) => {
    console.log("CartProvider::addItemToCartHandler-start");
    dispatchCardAction({
      type: "ADD",
      item: item,
    });
    console.log("CartProvider::addItemToCartHandler-end");
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCardAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
