import { House, Newspaper, Book, EnvelopeOpen } from "react-bootstrap-icons"
import NavigationLink from "../../NavigationLink"
import { NavbarWrapper } from "./NavbarStyles"

function Navbar({ open, handleClick }) {
    return (
        <NavbarWrapper open={open}>
            <NavigationLink onClick={handleClick} to="/">Inicio <House className="icon" /></NavigationLink>
            <NavigationLink onClick={handleClick} to="/revista">Revista <Book className="icon" /></NavigationLink>
            <NavigationLink onClick={handleClick} to="/novedades">Novedades <Newspaper className="icon" /></NavigationLink>
            <NavigationLink onClick={handleClick} to="/contacto">Contacto <EnvelopeOpen className="icon" /></NavigationLink>
        </NavbarWrapper>
    )
}

export default Navbar 