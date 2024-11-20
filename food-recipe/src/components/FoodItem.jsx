export default function FoodItem ({food}) {
    return <div>
        <img src={food.image} alt="" />
        <h1>{food.title}</h1>
        <button className="px-4 py-3 bg-green-500 text-white my-3 rounded-md font-medium">View Recipe</button>
    
    </div>
}