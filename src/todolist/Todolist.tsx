import React from "react";
import { FilterValuesType } from "../App";

type TodolistPropsType = {
  title: string
  tasks: Array<tasksType>
  removeTask: (id: number) => void
  changeFilter: (value: FilterValuesType) => void

}

export type tasksType = {
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
            props.tasks.map( (tasks) => {
              return <li><input type="checkbox" checked={tasks.isDone} />
              <span>{tasks.title}</span>
              <button onClick={ ()=> {props.removeTask(tasks.id)}}>Del</button>
              </li>
            })
          }

        
      </ul>
      <div>
        <button onClick={()=> {props.changeFilter("All")}}>All</button>
        <button onClick={()=> {props.changeFilter("Active")}}>Active</button>
        <button onClick={()=> {props.changeFilter("Completed")}}>Completed</button>
      </div>
   </div>
   
   );
}