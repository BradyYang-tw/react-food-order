import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        {/* <button>Cart</button> */}
      </header>
      <div className="header-img">
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="header-pic"
        />
      </div>
    </Fragment>
  );
};
export default Header;
