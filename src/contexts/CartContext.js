import { createContext, useContext, useReducer } from "react";

const initialState = {
  cartItems: [],
  quantity: 0,
};

const CartContext = createContext();

const addItemToCart = (cartItems, newItem) => {
  return [...cartItems, { ...newItem, quantity: 1 }];
};

const removeItemFromCart = (cartItems, itemId) => {
  return cartItems.filter((item) => item.id !== itemId);
};

const clearCart = () => {
  return [];
};

const increaseItemQuantity = (cartItems, itemId) => {
  return cartItems.map((item) =>
    item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const decreaseItemQuantity = (cartItems, itemId) => {
  return cartItems.map((item) =>
    item.id === itemId
      ? { ...item, quantity: Math.max(1, item.quantity - 1) }
      : item
  );
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        quantity: state.quantity + 1,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        quantity: state.quantity - 1,
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload),
        quantity: state.quantity + 1,
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
        quantity: state.quantity - 1,
      };
    case "CLEAR_CART":
      return { ...state, cartItems: clearCart() };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
