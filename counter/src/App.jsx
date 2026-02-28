//hook 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCounter]= useState(0);
  // let count=0;

  // adding the value
  const addValue=()=>{
    
    if(count<20){
      count=count+1;
      setCounter(count);
    }

    
    // console.log("adding the value" ,count);
  }


  // decreasing the value
  const decValue=()  =>{
   
    if(count>0){
       count=count-1;
      setCounter(count);
      
    }
    
  }
  
  return (
    
    <>
    <h1>Tushar</h1>
    <h2>counter value: {count}</h2>
    <button 
    onClick={addValue}
    >add value</button>
    <br />
    <br />
    <button 
    onClick={decValue}
    >decrease value</button>
    </>
  )
}

export default App
