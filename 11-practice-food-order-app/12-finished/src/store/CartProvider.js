import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCardState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems = null;
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (theItem) => theItem.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItemAmount = existingItem.amount + action.item.amount;
      const updatedItem = {
        ...existingItem,
        amount: updatedItemAmount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // Creates new array with state.items + action.item
      updatedItems = state.items.concat(action.item);
    }
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (theItem) => theItem.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItemAmount = existingItem.amount - 1;
      if (existingItem.amount === 1) {
        updatedItems = [...state.items];
        updatedItems = state.items.filter((it) => it.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: updatedItemAmount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      }
    }
  } else {
    updatedItems = [];
  }

  const updatedTotalAmount = updatedItems.reduce(
    (accumulator, item) => accumulator + item.amount * item.price,
    0
  );

  const updatedState = {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };

  return updatedState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCardState
  );

  const addItemToCartHandler = (item) => {
    dispatchCardAction({
      type: "ADD",
      item: item,
    });
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
