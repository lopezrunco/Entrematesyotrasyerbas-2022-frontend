import { Folder2Open } from "react-bootstrap-icons"

import './style.scss'

function NoPosts() {
    return (
        <div className="server-error">
            <div className="title">
                <Folder2Open className="icon" />
                <h3>No hay artículos</h3>
            </div>
            <p>Esta página aún no contiene artículos. Intente de nuevo mas tarde.</p>
        </div>
    )
}

export default NoPosts