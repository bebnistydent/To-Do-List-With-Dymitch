import React from "react";

type TodolistPropsType = {
  title: string

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
        <li><input type="checkbox" checked={true} /><span>HTML&CSS</span></li>
        <li><input type="checkbox" checked={true} /><span>JavaScript</span></li>
        <li><input type="checkbox" checked={false} /><span>React</span></li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
   </div>
   
   );
}