import { useEffect, useState } from "react"
import { FcAlarmClock } from "react-icons/fc";
import { Lia500Px } from "react-icons/lia";
import IngredientsList from "./IngredientsList";


export default function DetailsFoodContainer ({foodId}){
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = "a38e892a406b4a7c93b97a221af963c9";

    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true);

  useEffect (()=> {
    async function fetchFood (){
        const response = await fetch(`${URL}?apiKey=${apiKey}`)
        const data = await response.json()
        setFood(data)
        console.log(food);  
        setIsLoading(false)
    }  fetchFood()
  }, [foodId])
   
    
    return <div >
        <div>
            <h1 className="text-2xl font-medium p-2 my-4">{food.title}</h1>
            <img src={food.image} alt="" />
            <div className="flex gap-2 mt-3 ml-2 text-base text-black font-medium">
              <span className="flex items-center gap-2"><FcAlarmClock  />
              {food.readyInMinutes} Minutes</span>
              <span>🍽️{food.servings}  Servings</span>
               <span>{food.vegetarian? "🥕Vegetarian": "🍖non-vegetarian"}</span> 
               <span className="text-black">${(food.pricePerServing/100).toFixed(2)}</span>
            </div>
            <div>
              <h2 className="text-xl font-medium" >Ingredients</h2>
                <IngredientsList food = {food}/>
            </div>
            <div>
              <h2 className="text-3xl">Instructions</h2>
              <div> 
              {isLoading? <h1>Loading instructions...please wait</h1> : food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>)}
                 </div> 
                </div>
        </div>
         
        
        </div>
}