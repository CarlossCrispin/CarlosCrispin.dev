import { useMemo, useState } from 'react'
import classNames from 'classnames'

const Menu = () => {
  const [selected, setSelected] = useState(true)
  const handleClick = () => {
    console.log('handleClick')
    setSelected(!selected)
  }
  const classPosition = useMemo(
    () =>
      selected
        ? 'absolute self-center h-24 w-24 z-1 transition duration-700 ease-in-out bg-sky-200'
        : 'absolute self-center h-24 z-1 w-24 -translate-x-96 translate-y-96 transition duration-700 ease-in-out bg-red-400',
    [selected]
  )
  const classPosition1 = useMemo(
    () =>
      selected
        ? 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-200'
        : 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-400 -translate-x-96 -translate-y-96',
    [selected]
  )
  const classPosition2 = useMemo(
    () =>
      selected
        ? 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-200'
        : 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-400 -translate-x-96 translate-y-96',
    [selected]
  )
  const classPosition3 = useMemo(
    () =>
      selected
        ? 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-200'
        : 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-400 translate-x-96 -translate-y-96',
    [selected]
  )
  const classPosition4 = useMemo(
    () =>
      selected
        ? 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-200'
        : 'h-60 row-span-2 col-span-2 border-2 border-violet-900 transition duration-700 ease-in-out bg-violet-400 translate-x-96 translate-y-96',
    [selected]
  )

  return (
    <div className="h-screen w-screen border-2 border-red-400 flex justify-center content-center items-stretch">
      <div className="static grid grid-rows-4 grid-flow-col border-2 border-emerald-400 z-0 p-5 w-full self-center">
        <div className={(classNames(''), classPosition1)}>01</div>
        <div className={(classNames(''), classPosition2)}>02</div>
        <div className={(classNames(''), classPosition3)}>03</div>
        <div className={(classNames(''), classPosition4)}>04</div>
      </div>
      <div
        className={classNames('rounded-full', classPosition)}
        onClick={handleClick}
      ></div>
    </div>
  )
}

export default Menu
