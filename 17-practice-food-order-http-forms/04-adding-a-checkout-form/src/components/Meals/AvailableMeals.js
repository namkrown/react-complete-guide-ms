import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      // setIsLoading(false); // set if initially false
      //const baseUrl = "https://<firebase.url>/";
      const baseUrl = "https://react-http-87306-default-rtdb.firebaseio.com/";
      const mealsUrl = baseUrl + "meals.json";
      const response = await fetch(mealsUrl);

      if (!response.ok) {
        throw new Error(
          "Something went wrong: status=" +
            response.status +
            ", statusText=" +
            response.statusText
        );
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        const meal = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        };
        loadedMeals.push(meal);
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    /* Not valid
    try {
      fetchMeals();
    } catch (error) {
      console.log("error loading meals", error);
      setIsLoading(false);
      setHttpError(error.message);
    }
    */
    fetchMeals().catch((error) => {
      console.log("error loading meals", error);
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  } else if (httpError) {
    return (
      <section className={classes.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
