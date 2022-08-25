import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 className='text-3xl font-bold  text-violet-500 bg-slate-200 p-2'>
        <strong>Hey Hola! </strong>Soy Carlos Crispin
      </h1>
    </div>
  );
}

export default App
