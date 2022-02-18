import './styles.scss'

function Footer() {
    return (
        <footer>
            @{new Date().getFullYear()} | Desarrollo: <a href="https://www.lopezrunco.com/" target="_blank">Damián López</a>
        </footer>
    )
}

export default Footer