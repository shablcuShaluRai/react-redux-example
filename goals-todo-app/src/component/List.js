import React from "react"
export default function List({todos}){
 return (
   <div>{todos.map((todos, index) => <li key={index}>{todos.todo}</li>)}
   </div>
 )
}
