import { Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

import PageTitle from "../../components/PageTitle"

function LoggedOut() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login')
    }

    return (
        <>
            <PageTitle
                title='Sesión finalizada'
                text='Si usted es un administrador de esta web, ingrese sus credenciales para iniciar sesión'
                imgClassName='general'
            />
            <main className="logged-out-page">
                <section className="container">
                    <article className="row">
                        <div className="message">
                            <p>Para realizar tareas de administrador, necesita loguearse</p>
                            <button className="button md-button primary-button" onClick={handleClick}>
                                <Person />
                                Iniciar sesión
                            </button>
                        </div>
                    </article>
                </section>
            </main>
        </>

    )
}

export default LoggedOut