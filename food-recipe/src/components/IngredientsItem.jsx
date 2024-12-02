export default function IngredientsItems ({item}) {
    return <div className="shadow-xl rounded-lg flex gap-4 p-4 ">
       <div className="w-[100px] h-[100px]"><img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ item.image} alt="" className=" w-full h-full rounded-lg"/>
       </div> 
       <div className="font-medium">
       <div>{item.name}</div>
        <div className="mt-3">{item.amount}{item.unit}</div>
       </div>
    </div>
}