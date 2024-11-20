import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import NavBar from "./components/NavBar"


function App() {


  const [foodData, setFoodData] = useState ([])
  
  return (
      
      <div className=" w-full flex flex-col items-center">
      <NavBar/>
      <h1 className="text-green-600 font-medium text-3xl ">Get the Right Recipe for Your Favourite Food</h1>
     <Search foodData={foodData} setFoodData={setFoodData}/>
     <FoodList foodData={foodData} />
      </div>
  )
}

export default App
