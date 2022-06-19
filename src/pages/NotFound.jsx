import { FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-9xl font-bold mb-9">
                    Oops!
                </h1>
                <p className="text-6xl mb-9 text-white font-bold">
                    404-Page Not Found!!
                </p>
                <Link to='/' className='btn btn-primary btn-lg'>
                    <FaHome className='mr-3'/>
                    Back To Home
                </Link>
            </div>
        </div>
   </div>
  )
}

export default NotFound