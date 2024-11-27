import IngredientsItems from "./IngredientsItem";

export default function IngredientsList( {food}) {
    return <div>
         {food.extendedIngredients && food.extendedIngredients.map((item)=> <IngredientsItems item={item}/> )}
    </div>
}