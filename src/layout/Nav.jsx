import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export default function Nav() {
  const [selected, setSelected] = useState(true)
  const handleClick = () => {
    console.log('navClick')
    setSelected(!selected)
  }
  const classPosition = useMemo(
    () =>
      selected
        ? 'fixed w-1/2 p-6 text-5xl text-bold  md:text-9xl  transition duration-700 ease-in-out translate-x-24 translate-y-24 animate__animated animate__fadeIn tracking-widest'
        : 'fixed w-1/2 p-6 top-80 md:top-96 text-5xl text-bold  md:text-9xl  transition duration-700 ease-in-out translate-x-24 translate-y-96 py-12 md:py-28 overflow-hidden tracking-widest',
    [selected]
  )
  const navPosition = useMemo(
    () =>
      selected
        ? 'w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration-300 mt-2'
        : 'w-full transition ease-in-out font-medium duration-300 mt-2 hover:animate-bounce ',
    [selected]
  )
  return (
    <nav className="" onClick={handleClick}>
      <div className={(classNames(''), classPosition)}>
        <Link to={!selected ? '/' : ''}>
          <div className={(classNames(''), navPosition)}>Carlos</div>
        </Link>
        <Link to="/about">
          <div className="w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration-300 mt-2">
            About
          </div>
        </Link>
        <Link to="/home">
          <div className="w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration-300 mt-2">
            Work
          </div>
        </Link>
      </div>
    </nav>
  )
}
