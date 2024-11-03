import React from "react";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

interface MealProps {
  meals: {
    id: string;
    name: string;
    description: string;
  price: number;
    image: string;
  }[];
}

export default function MealsGrid({ meals }: MealProps) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
