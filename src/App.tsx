import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todolist } from './todolist/Todolist';



function App() {
const task1 = [
  {id: 1, title: "Html & CSS", isDone: true},
  {id: 2, title: "JS", isDone: false},
  {id: 3, title: "React", isDone: false},
  {id: 4, title: "Redux", isDone: false},
]

useState(task1);

function removeTask (id: number) {
  
  let result = task1.filter(t => t.id !== id) //You can write it like that too
  
  console.log(removeTask);
}




  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={task1} removeTask={removeTask} />
    </div>
  );
}














export default App;



