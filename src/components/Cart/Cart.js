import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((d) => {
        return (
          <CartItem
            key={d.id}
            name={d.name}
            amount={d.amount}
            price={d.price}
            onRemove={cartItemRemoveHandler.bind(null, d.id)}
            onAdd={cartItemAddHandler.bind(null, d)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
