import React from "react";

type TodolistPropsType = {
  title: string
  tasks: Array<tasksType>
  removeTask: Function

}

type tasksType = {
  id: number
  title: string
  isDone: boolean
}




export function Todolist(props: TodolistPropsType) {
  return( 

   <div>

   <h3>{props.title}</h3>
     
     <div>
      <input/>
      <button></button>
     </div>
      <ul>
          {
            props.tasks.map( (t) => {
              return <li><input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={ ()=> {props.removeTask(t.id)}}>Del</button>
              </li>
            })
          }

        
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
   </div>
   
   );
}