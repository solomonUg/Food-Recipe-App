import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import NavBar from "./components/NavBar"
import Container from "./components/Container"
import InnerContainer from "./components/InnerContainer"
import DetailsFoodContainer from "./components/DetailsFoodContainer"


function App() {


  const [foodData, setFoodData] = useState ([])
  
  return (
      
      <div className=" w-full">
      <NavBar/>
      <h1 className="text-green-600 font-medium text-3xl ">Get the Right Recipe for Your Favourite Food</h1>
     <Search foodData={foodData} setFoodData={setFoodData}/>
     <Container>
      <InnerContainer>
     <FoodList foodData={foodData} />
      </InnerContainer>
      <InnerContainer>
        <DetailsFoodContainer/>
      </InnerContainer>
     </Container>
      </div>
  )
}

export default App
