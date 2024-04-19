import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './todolist/Todolist';



function App() {
const task = [
  {id: 1, title: "Html & CSS", isDone: true},
  {id: 2, title: "JS", isDone: false},
  {id: 3, title: "React", isDone: false},
  {id: 4, title: "Redux", isDone: false},
  
]

 let arr = useState(task);
 let tasks = arr[0];
 let setTasks = arr[1]; 

function removeTask (id: number) {
  
  let filteredTask = task.filter(task => task.id !== id) //You can write it like that too
  setTasks(filteredTask)
  console.log(removeTask);
}




  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}














export default App;



