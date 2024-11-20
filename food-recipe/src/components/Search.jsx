import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "a38e892a406b4a7c93b97a221af963c9"

export default function Search ({foodData, setFoodData}){
    const [query, setQuery] = useState("pasta")
    // Syntax of a useEffect hook is a callback fxn and a dependency list 
    useEffect(()=>{
        async function getFood(){
            const response = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`)
            const data = await response.json()
            setFoodData(data.results)
        } getFood()
    }, [query])
    return <div className="w-[30%]">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} className=" bg-slate-300 w-full"/>
    </div>
}
