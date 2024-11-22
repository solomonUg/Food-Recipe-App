import FoodItem from "./FoodItem";

export default function FoodList ({foodData, setFoodId}){
    return <div className=" flex flex-wrap ">
              {foodData.map((food)=><FoodItem key={food.id} food={food} setFoodId={setFoodId}/>)}
    </div>
}