import { useContext } from "react"

import { AuthContext } from "../../../../../App"
import "./style.scss"

function HelloAdmin() {
    const {state: auth} = useContext(AuthContext)

    return (
        <div className="hello-admin">
            <h5>Good Morning, {auth.user.name}!</h5>
            <small>Here's what's happening with your blog today.</small>
        </div>
    )
}

export default HelloAdmin