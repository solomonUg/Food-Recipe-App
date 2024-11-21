import FoodItem from "./FoodItem";

export default function FoodList ({foodData}){
    return <div className="w-[90%] flex flex-wrap m-auto bg-slate-300">
              {foodData.map((food)=><FoodItem key={food.id} food={food}/>)}
    </div>
}