import IngredientsItems from "./IngredientsItem";

export default function IngredientsList( {food, isLoading}) {
    return <div className="flex flex-wrap gap-3">
         {isLoading? <h2>Loading...</h2> : food.extendedIngredients.map((item)=> <IngredientsItems item={item}/> )}
    </div>
}