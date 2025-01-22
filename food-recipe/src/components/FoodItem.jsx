import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoodItem({ food, setFoodId }) {
    const [isMoblie, setIsMobile] = useState(window.innerWidth < 1024);

    
    const navigate = useNavigate ();
    function handleNav () {
      navigate("/DetailsPageOnMobile", { state: { food } });
        }

    useEffect(()=>{
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, [])

    const handleClick = () => {
      setFoodId(food.id);
      if (!isMoblie) {
        console.log("large screen");
      } else {
        handleNav();
        console.log("small screen")
      }
    };



  return (
    <div className="rounded-lg shadow-2xl w-[280px] overflow-hidden flex flex-col gap-3 p-4 mr-4  justify-between">
      <img src={food.image} alt="" className="rounded-lg h-auto w-full" />
      <h1 className="text-red-700 font-medium ">{food.title}</h1>
      <button
        onClick={() => handleClick() }
        className="px-4 py-3 bg-green-500 text-white rounded-md font-medium"
      >
        View Recipe
      </button>
    </div>
  );
}
