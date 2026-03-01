import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/cart'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"tusahr",
    age: "21"
  }
  return (
    <>
     <h1
     className='bg-green-400'
     >Tailwind Working</h1>
     <Cart channel="chaiaurcode"  username="tushar"/>
     <Cart  username="sharma"/>
    </>
   
    
  )
}

export default App
