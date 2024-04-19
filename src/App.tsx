import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './todolist/Todolist';
import { tasksType } from './todolist/Todolist';


export type FilterValuesType = "All" | "Completed" | "Active";


function App() {
let [task, setTask] = useState<Array<tasksType>> ([
  {id: 1, title: "Html & CSS", isDone: true},
  {id: 2, title: "JS", isDone: false},
  {id: 3, title: "React", isDone: false},
  {id: 4, title: "Redux", isDone: false},
  
]);

let [filter, setFilter] = useState<FilterValuesType>("All");

 let arr = useState(task);
 let tasks = arr[0];
 let setTasks = arr[1]; 

function removeTask (id: number) {
  
  let filteredTask = task.filter(task => task.id !== id) //You can write it like that too
  setTasks(filteredTask)
  console.log(removeTask);
}

function changeFilter(value: FilterValuesType ) {
        setFilter(value);
}

let taskForToDoList = task;
if(filter === "Completed") {
  taskForToDoList = task.filter( task => task.isDone === true);
}
if(filter === "Active") {
  taskForToDoList = task.filter( task => task.isDone === false);
}


  return (
    <div className="App">
      <Todolist title="What to learn?" 
      tasks={taskForToDoList} 
      removeTask={removeTask}
      changeFilter={changeFilter} />
    </div>
  );
}














export default App;



