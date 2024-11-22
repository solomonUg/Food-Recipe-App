import { useEffect, useState } from "react"
import { FcAlarmClock } from "react-icons/fc";


export default function DetailsFoodContainer ({foodId}){
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const apiKey = "a38e892a406b4a7c93b97a221af963c9";

    const [food, setFood] = useState({})

  useEffect (()=> {
    async function fetchFood (){
        const response = await fetch(`${URL}?apiKey=${apiKey}`)
        const data = await response.json()
        setFood(data)
        console.log(food);  
    }  fetchFood()
  }, [foodId])
   
    
    return <div className=" text-red-600">
        <div>
            <h1 className="text-lg font-medium p-2">{food.title}</h1>
            <img src={food.image} alt="" />
            <span className="flex items-center justify-center">
            <FcAlarmClock />
                {food.readyInMinutes}
            </span>
        </div>
         
        
        </div>
}