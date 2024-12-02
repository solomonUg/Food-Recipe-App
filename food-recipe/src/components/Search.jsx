import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "a38e892a406b4a7c93b97a221af963c9";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // Syntax of a useEffect hook is a callback fxn and a dependency list
  useEffect(() => {
    async function getFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    getFood();
  }, [query]);
  console.log(foodData);
  return (
    <div className="w-[30%] relative m-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" w-full h-10 rounded-lg pl-8 border-2 border-green-300 outline-none focus:text-green-900"
      />
      <div className="absolute top-2 left-2 ">
        <IoSearch className="text-xl text-green-900" />
      </div>
    </div>
  );
}
