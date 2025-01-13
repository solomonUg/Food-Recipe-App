import FoodItem from "./FoodItem";

export default function FoodList ({foodData, setFoodId}){
    return <div className=" flex justify-center flex-wrap w-full ">
              {foodData.map((food)=><FoodItem key={food.id} food={food} setFoodId={setFoodId}/>)}
    </div>
}