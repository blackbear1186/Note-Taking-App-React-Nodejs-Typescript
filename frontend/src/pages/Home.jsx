import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='text-center'>
      <h1>Take Note</h1>
      <h3>Start taking notes today</h3>
      <p>If you already have an account</p>
      <Link to='/login'>
        <button 
        className='bg-white hover:bg-gray-100 text-gray-800 font-semibold 
        shadow border border-gray-100 rounded h-10 w-52 mb-4'>
          Login</button>
      
      </Link>
      <p>If you do not have an account</p>
      <Link to='/register'>
        <button className='bg-blue-500 hover:bg-blue-700 font-bold rounded h-10 w-52'>
        Create an account</button>
      </Link>

    </div>
  )
}

export default Home
