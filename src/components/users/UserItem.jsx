import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function UserItem({user:{ login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-150'>
        <div className="flex-row items-center space-x-5 card-body">
            <div>
             <div className="avatar">
                <div className="rounded-full shadow w-15 h-15">
                    <img src={avatar_url} alt="Profile"/>
                </div>
             </div>
            </div>
            <div>
           <h2 className="card-title">
           {login}
           </h2>
           <Link className='text-base-content-white text-opacity-40 ' to={
            `/user/${login}`
           }>
            Visit Profile
           </Link>
            </div>

        </div>

    </div>
  )
}
UserItem.propTypes = {
    user:PropTypes.object.isRequired
}

export default UserItem