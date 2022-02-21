import { EmojiDizzyFill } from "react-bootstrap-icons"

import './style.scss'

function ServerError() {
    return (
        <div className="server-error">
            <div className="title">
                <EmojiDizzyFill className="icon" />
                <h3>Error al conectar el servidor</h3>
            </div>
            <p>Algo anduvo mal. Trate de refrescar el navegador o compruebe su conexión a internet.</p>
        </div>
    )
}

export default ServerError