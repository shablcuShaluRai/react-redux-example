import React from "react"
export default function List({list, removeBtnClick, toggleitem}){
 return (
   <div>
     {list.map((item) =>
        <li key={item.id}>
          <span
            className={item.complete ? "toggle" : "none"}
            onClick={() => toggleitem && toggleitem(item.id)}>
         {item.todo ||  item.goals}
       </span>
         <button onClick={() => removeBtnClick(item.id)}>X</button>
        </li>)}
   </div>
 )
}
