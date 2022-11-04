import React, { Fragment } from "react";
import AvaliableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";

const Meal = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvaliableMeals></AvaliableMeals>
    </Fragment>
  );
};

export default Meal;
