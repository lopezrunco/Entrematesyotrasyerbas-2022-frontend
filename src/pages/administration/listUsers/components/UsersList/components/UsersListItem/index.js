import { Envelope, Hash, Person } from 'react-bootstrap-icons'
import './style.scss'

function UsersListItem({ user }) {
    return (
        <div className="users-list-item">
            <div className='row'>
                <div className='col-12 col-lg-4 user-name'>
                    <Person />
                    <p>{user.name}</p>
                </div>
                <div className='col-12 col-lg-4 user-email'>
                    <Envelope />
                    <p>{user.email}</p>
                </div>
                <div className='col-12 col-lg-4 user-id'>
                    <Hash />
                    <p>{user.id}</p>
                </div>
            </div>
        </div>
    )
}

export default UsersListItem