import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Carlos from './pages/Carlos'
import Nav from './layout/Nav'
import Counter from './layout/Counter'
import { useState } from 'react'

function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="App bg-slate-100 h-screen w-screen overflow-hidden">
     
      {/*  {!showNav && <Counter showNav={showNav} setShowNav={setShowNav} />}
      {showNav && <Nav />} */}
      <Nav />
      <Routes>
        <Route path="/" element={<Carlos showNav={showNav} />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  )
}

export default App
