import { useState } from "react"
import { Gear, BarChart, UiChecksGrid, People, FileEarmarkFill, ChevronCompactRight, ChevronCompactLeft, House, Person } from "react-bootstrap-icons"

import mobileLogo from '../../../../../assets/mobile-logo.png'
import './style.scss'

function SideNavBar() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <div className={`side-nav-bar ${open && 'opened'}`}>
                <img src={mobileLogo} />
                <nav>
                    <a className="icon" href="/administration"><Gear className="icon" />Administración</a>
                    <a className="icon" href="/estadisticas"><BarChart className="icon" />Estadísticas</a>
                    <a className="icon" href="/preferencias"><UiChecksGrid className="icon" />Preferencias</a>
                    <a className="icon" href="/usuarios"><People className="icon" />Usuarios</a>
                    <a className="icon" href="/articulos"><FileEarmarkFill className="icon" />Artículos</a>
                </nav>
                <nav>
                    <a className="icon" href="/"><House className="icon" /> Ver web</a>
                    <a className="icon" href="/"><Person className="icon" /> Cerrar sesión</a>
                </nav>
            </div>
            <div className='toogle-menu' onClick={handleClick}>
                {!open ? <ChevronCompactRight /> : <ChevronCompactLeft />}
            </div>
        </>
    )
}

export default SideNavBar