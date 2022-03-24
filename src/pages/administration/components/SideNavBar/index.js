import { useContext, useState } from "react"
import { Gear, BarChart, UiChecksGrid, People, ChevronCompactRight, ChevronCompactLeft, House, Person, FileEarmark } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../../App"

import mobileLogo from '../../../../assets/mobile-logo.png'
import { LOGOUT } from "../../../../utils/general-action-types"
import './style.scss'

function SideNavBar() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const { dispatch } = useContext(AuthContext)
    
    const handleClick = () => {
        setOpen(!open)
    }
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        navigate('/sesion-finalizada')
    }

    return (
        <>
            <div className={`side-nav-bar ${open && 'opened'}`}>
                <img src={mobileLogo} />
                <nav>
                    <a className="icon" href="/administration"><Gear className="icon" />Administración</a>
                    {/* <a className="icon" href="/administration/estadisticas"><BarChart className="icon" />Estadísticas</a> */}
                    {/* <a className="icon" href="/administration/preferencias"><UiChecksGrid className="icon" />Preferencias</a> */}
                    <a className="icon" href="/administration/usuarios"><People className="icon" />Usuarios</a>
                    <a className="icon" href="/administration/novedades"><FileEarmark className="icon" />Novedades</a>
                </nav>
                <nav>
                    <a className="icon" href="/"><House className="icon" /> Ver web</a>
                    <a className="icon" onClick={logout}><Person className="icon" /> Cerrar sesión</a>
                </nav>
            </div>
            <div className='toogle-menu' onClick={handleClick}>
                {!open ? <ChevronCompactRight /> : <ChevronCompactLeft />}
            </div>
        </>
    )
}

export default SideNavBar