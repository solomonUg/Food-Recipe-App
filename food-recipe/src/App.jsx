import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import DetailsFoodContainer from "./components/DetailsFoodContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");

  return (
    <div className=" w-full font-sans flex flex-col items-center">
      <NavBar />
      <div className="flex w-[90%] ">
        <div className="text-[#3e4555] font-semibold text-5xl w-[50%] pt-6 pr-30 leading-tight ">
          Get the Right Recipe for Your Favourite Food
        </div>
        <Search foodData={foodData} setFoodData={setFoodData} />
      </div>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <DetailsFoodContainer foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
