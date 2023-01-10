import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCardState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log("cartReducer-start");

  console.log("cartReducer action.type=" + action.type);

  let updatedItems = null;

  if (action.type === "ADD") {
    console.log("cartReducer action.type=ADD");

    const existingItemIndex = state.items.findIndex(
      (theItem) => theItem.id === action.item.id
    );
    console.log("cartReducer existingItemIndex=" + existingItemIndex);

    const existingItem = state.items[existingItemIndex];
    console.log("cartReducer existingItem=" + existingItem);

    if (existingItem) {
      console.log("cartReducer action.type=ADD existingItem");
      console.log(existingItem);
      const updatedItemAmount = existingItem.amount + action.item.amount;
      const updatedItem = {
        ...existingItem,
        amount: updatedItemAmount,
      };
      console.log(updatedItem);
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      console.log("cartReducer action.type=ADD newItem");
      // Creates new array with state.items + action.item
      updatedItems = state.items.concat(action.item);
    }
  } else if (action.type === "REMOVE") {
    console.log("cartReducer Action REMOVE");

    const existingItemIndex = state.items.findIndex(
      (theItem) => theItem.id === action.id
    );
    console.log("cartReducer existingItemIndex=" + existingItemIndex);

    const existingItem = state.items[existingItemIndex];
    console.log("cartReducer existingItem=" + existingItem);

    if (existingItem) {
      const updatedItemAmount = existingItem.amount - 1;
      if (updatedItemAmount <= 0) {
        updatedItems = [...state.items];
        updatedItems = state.items.filter((it) => it.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: updatedItemAmount,
        };
        console.log(updatedItem);
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
    }
  } else {
    console.log("cartReducer Action Default");
    updatedItems = [];
  }

  let updatedTotalAmount = updatedItems.reduce(
    (accumulator, item) => accumulator + item.amount * item.price,
    0
  );

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
