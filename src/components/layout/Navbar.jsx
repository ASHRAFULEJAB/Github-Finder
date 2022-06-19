import { FaGithub } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-15 shadow-lg bg-neutral text-neutral-content'>
      <div className="container mx-auto">
      < div className="flex-none px-3 mx-3">
          <FaGithub className='inline pr-3 text-6xl'/>
          <Link to='/' className='text-lg  text-white font-bold align-middle'>
          {title}
          </Link>
      
      </div>
      </div>
      
      <div className="flex-2 px-3 mx-3">
          <div className="flex justify-end">
              <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-white font-bold '>
                  Home 
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn  text-white font-bold'>
                  About  
              </Link>
          </div>
          </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title : 'Github Finder',
}
Navbar.propTypes = {
    title : PropTypes.string,
}

export default Navbar