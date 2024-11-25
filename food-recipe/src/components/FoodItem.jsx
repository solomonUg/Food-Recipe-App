export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="rounded-lg shadow-2xl w-[300px] overflow-hidden flex flex-col gap-3 p-4 m-4 justify-between">
      <img src={food.image} alt="" className="rounded-lg h-auto w-full" />
      <h1 className="text-red-700 font-medium ">{food.title}</h1>
      <button
        onClick={() => setFoodId(food.id)}
        className="px-4 py-3 bg-green-500 text-white rounded-md font-medium"
      >
        View Recipe
      </button>
    </div>
  );
}
