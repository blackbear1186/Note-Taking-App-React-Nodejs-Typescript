import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header flex justify-between'>
      <div className='logo'>
  
        <Link to='/'>
          Take Note</Link>
      </div>
      <ul className='flex'>
        <li className='mr-1'>
            <Link to='/login' className='flex items-center'>
                <FaSignInAlt/> Login
            </Link>
        </li>
        <li>
            <Link to='/register' className='flex items-center'>
                <FaUser/> Register
            </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
