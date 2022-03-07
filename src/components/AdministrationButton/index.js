import { useContext } from "react"
import { Gear } from "react-bootstrap-icons"

import { AuthContext } from "../../App"
import './style.scss'

function AdministrationButton() {
    const { state: auth } = useContext(AuthContext)

    if (auth.isAuthenticated) {
        return <a href='/administration' className="administration-button"><Gear /></a>
    } else {
        return null
    }

}

export default AdministrationButton