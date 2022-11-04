import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCatItems = items.reduce((c, item) => {
    return c + item.amount;
  }, 0);

  const [ish, setIsh] = useState(false);
  const btnClasses = `button ${ish ? "bump" : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsh(true);
    const timer = setTimeout(() => {
      setIsh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className="badge">Total Amount: {numberOfCatItems}</span>
    </button>
  );
};

export default HeaderCartButton;
