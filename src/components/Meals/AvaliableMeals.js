import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import "./AvaliableMeals.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvaliableMeals = () => {
  const getData = DUMMY_MEALS.map((d) => {
    return (
      <MealItem
        id={d.id}
        key={d.id}
        name={d.name}
        description={d.description}
        price={d.price}
      />
    );
  });
  return (
    <Card className="meals">
      <ul>{getData}</ul>
    </Card>
  );
};

export default AvaliableMeals;
