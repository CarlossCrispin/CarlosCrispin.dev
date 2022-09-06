import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='animate-fadeInLeft absolute top-20 md:left-40 w-1/3  text-9xl text-slate-800 tracking-wide'>
      <Link to='/'>
        <div className='w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration- mt-6'>
          Carlos
        </div>
      </Link>
      <Link to='/about'>
        <div className='w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration- mt-6'>
          About
        </div>
      </Link>
      <Link to='/home'>
        <div className='w-full transition ease-in-out hover:translate-x-24 hover:scale-110 hover:text-slate-900 hover:font-medium duration- mt-6'>
          Work
        </div>
      </Link>
    </nav>
  );
}
