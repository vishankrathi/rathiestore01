import { useState } from "react";
import "./Searchbar.scss"
const types=["buy","rent"];
 function Searchbar  (){
    const [query,setQuery]=useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxprice:0,   
    });
    const switchType=(val)=>{
        setQuery((prev)=>({...prev,type:val}));
    };
  return (
    <div className="Searchbar">
        <div className="type">
            {types.map((type)=>{
            <button key={type}
             onClick={()=>switchType(type)}
             className={query.type=== type?"active":""}>{type}</button>
            })}
          
        </div>
        <form>
            <input type="text" name="location" placeholder="city location"/>
            <input  
            type="number"
            name="minprice"
            min={0}
            max={10000000}
            placeholder="min price"
            />
            <input  
            type="number"
            name="minprice"
            min={0}
            max={10000000}
            placeholder="max price"
            />
            <button>
                <img src="/search.png" alt=""/>
            </button>
        </form>
    </div>
  )
}
export default Searchbar;
