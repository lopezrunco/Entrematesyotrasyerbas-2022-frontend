import { EmojiDizzyFill } from 'react-bootstrap-icons'

import PageTitle from '../../components/PageTitle'
import NotFoundImg from '../../assets/404.png'
import './style.scss'

function NotFound() {
    return (
        <>
            <PageTitle
                title='404!'
                text='No ha sido posible cargar esta página'
                imgClassName='general'
            />
            <main className="not-found-page">
                <section className="container">
                    <article className="row">

                        <div className="col-lg-6">
                            <div className='title'>
                                <EmojiDizzyFill />
                                <h2>Error 404!</h2>
                            </div>
                            <h4>La página que ha solicitado no se encuentra en el servidor</h4>
                            <div className='links'>
                                <h6>Pruebe mejor suerte en estos enlaces:</h6>
                                <a href="/">Inicio</a>
                                <a href="revista">Revista</a>
                                <a href="novedades">Novedades</a>
                                <a href="contacto">Contacto</a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <img className='not-found-img' src={NotFoundImg} alt='Entre mates y otras yerbas' />
                        </div>

                    </article>
                </section>
            </main>
        </>
    )
}

export default NotFound