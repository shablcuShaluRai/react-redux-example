import React from "react"
export default function List({ todos, removeTodoAction, toggleTodo}){
 return (
   <div>
     {todos.map((todos) =>
        <li key={todos.id}>
          <span
            className={todos.complete ? "toggle" : "none"}
            onClick={() => toggleTodo && toggleTodo(todos.id)}>
         {todos.todo}
       </span>
         <button onClick={() => removeTodoAction(todos.id)}>X</button>
        </li>)}
   </div>
 )
}
