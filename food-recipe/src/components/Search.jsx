import { useEffect, useState } from "react"

export default function Search (){
    const [query, setQuery] = useState("")
    // Syntax of a useEffect hook is a callback fxn and a dependency list 
    useEffect(()=>{}, [])
    return <div>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
}