import { useContext } from "react"
import { PersonFill } from "react-bootstrap-icons"

import { AuthContext } from "../../../../../App"
import './style.scss'

function UserInfo() {
    const { state: auth } = useContext(AuthContext)

    if (auth.isAuthenticated) {
        return (
            <div className="user-info">
                <PersonFill className="avatar" />
                <div className="name-role">
                    <h6>{auth.user.name}</h6>
                    <small>Administrador</small>
                </div>
            </div>
        )
    }
}

export default UserInfo