import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// Here we import the Head css file 
import '../styles/header.css';
//importing the navbar css
import '../styles/nav.css';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
   
  return (
    <header className='header'>  
      <ul>
        {user ? (
          <>
          <li>
            <button className='btn' onClick={onLogout}>
            Logout
            </button>
          </li>
           <li>
             <Link to='/dashboard' className='routelink'>
                Dashboard
             </Link>
           </li>
         </>
        ) : (
          <>
            <li>
              <Link to='/login' className='routelink'>
                 Login
              </Link>
            <span></span>
              <Link to='/register' className='routelink'>
                 Register
              </Link>
              <span></span>
              <Link to='/dashboard' className='routelink'>
                Dashboard
             </Link>
             <span></span>
              <Link to='/' className='routelink'>
                Home
             </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header