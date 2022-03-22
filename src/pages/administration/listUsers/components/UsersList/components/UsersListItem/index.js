import { Envelope, Hash, Person } from 'react-bootstrap-icons'
import './style.scss'

function UsersListItem({ user }) {
    return (
        <div className="users-list-item">
            <div className='row'>
                <div className='col-12 col-lg-4 user-name'>
                    <Person />
                    <h6>{user.name}</h6>
                </div>
                <div className='col-12 col-lg-4 user-email'>
                    <Envelope />
                    <p>{user.email}</p>
                </div>
                <div className='col-12 col-lg-2 user-mfa-enabled'>
                    {user.mfaEnabled ?
                        <small className='badge-tag success'>MFA habilitado</small> :
                        <small className='badge-tag danger'>MFA deshabilitado</small>}
                </div>
                <div className='col-12 col-lg-2 user-id'>
                    <small className='badge-tag warning'>
                        <Hash />
                        {user.id}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default UsersListItem