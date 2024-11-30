export default function IngredientsItems ({item}) {
    return <div className="border-black border-[1px] rounded-lg">
        <div>{item.name}</div>
       <div className="w-[100px] h-[100px]"><img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ item.image} alt="" className=" w-full h-full"/></div> 
        <div>{item.amount}{item.unit}</div>
    </div>
}