import React from 'react'
import classes from './AvilabelMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [ {
   id: 'm1',
   name: 'Sushi',
   description: 'Finest fish and veggise',
   price: '22.99'
}, {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: '16.86'
}, {
    id: 'm3',
   name: 'Barbecu burger',
   description: 'American, raw, meaty',
   price: '18.99'
}, {
    id: 'm4',
   name: 'Green bowl',
   description: 'Healthy...and green...',
   price: '15.34'
}];

const AvilabelMeals = () => {
    const mealslist = DUMMY_MEALS.map(meal => <MealItem key={meal.id} 
      name={meal.name}
      id={meal.id}
      description={meal.description}
      price={meal.price} />);
  return <section className={classes.meals}>
    <Card>
    <ul>
        {mealslist}
    </ul>
    </Card>
  </section>
}

export default AvilabelMeals