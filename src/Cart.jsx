import { createContext, useState, useContext } from "react";
import data from "./data.json";
import PropTypes from "prop-types";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    data.products.map((product) => ({ ...product, quantity: 1 }))
  );
  const removeItemFromCart = (productId) => {
    const removedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(removedItems);
  };

  const updateQuantity = (productId, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalQuantity,
        totalAmount,
        removeItemFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartProvider.PropTypes = {
  children: PropTypes.any,
};
