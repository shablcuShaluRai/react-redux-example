import React from "react"

export default function List({ todos, removeTodoAction}){
 return (
   <div>
     {todos.map((todos) =>
        <li key={todos.id}>
         {todos.todo}
         <button onClick={() => removeTodoAction(todos.id)}>X</button>
        </li>)}
   </div>
 )
}
