import React from 'react';
import { useState } from "react";
import Search from '../components/Search';
import FoodList from "../components/FoodList";
import Container from "../components/Container";
import InnerContainer from "../components/InnerContainer";
import DetailsFoodContainer from "../components/DetailsFoodContainer";
import { AsideContainer } from "../components/AsideContainer";




export default function Homepage() {
    const [foodData, setFoodData] = useState([]);
    const [foodId, setFoodId] = useState("715415");

  return (
    <div>
        <div className=" w-full font-sans flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-[90%] mb-4 ">
        <div className="text-[#3e4555] font-semibold text-5xl sm:w-[50%] pt-6 pr-30 leading-tight ">
          Get the Right Recipe for Your Favourite Food
        </div >
        <Search foodData={foodData} setFoodData={setFoodData} />
      </div>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <AsideContainer>
          <DetailsFoodContainer foodId={foodId} />
        </AsideContainer>
      </Container>
    </div>
    </div>
  )
}
