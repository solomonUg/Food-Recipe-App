import { useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { Lia500Px } from "react-icons/lia";
import IngredientsList from "./IngredientsList";

export default function DetailsFoodContainer({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "a38e892a406b4a7c93b97a221af963c9";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className=" shadow-lg p-6 w-full">
      <h1 className="text-3xl font-medium text-[#3e4555] mb-3">{food.title}</h1>
      <div className="rounded-xl">
        <img src={food.image} alt="" />
      </div>
      <div className="flex flex-wrap gap-6 my-4 text-base text-black font-medium">
        <span className="flex items-center justify-between">
          <FcAlarmClock />
          {food.readyInMinutes} Minutes
        </span>
        <span>🍽️{food.servings} Servings</span>
        <span>{food.vegetarian ? "🥕Vegetarian" : "🍖non-vegetarian"}</span>
      </div>
      <div className="text-black mb-4">
        ${(food.pricePerServing / 100).toFixed(2)} Per Serving
      </div>
      <div>
        <h2 className="text-2xl text-[#3e4555] font-medium mb-4">
          Ingredients
        </h2>
        <IngredientsList food={food} isLoading={isLoading} />
      </div>
      <div>
        <h2 className="text-3xl text-[#3e4555] font-medium mt-3">Instructions</h2>
        <div className="mt-3 mx-3">
        <ol  className="list-decimal">
            {isLoading ? <h1>Loading instructions...please wait</h1>: (food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>  )) }
      </ol>
        </div>
      </div>
    </div>
  );
}
