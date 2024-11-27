export default function IngredientsItems ({item}) {
    return <div>
        <h3>{item.name}</h3>
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ item.image} alt="" />
    </div>
}