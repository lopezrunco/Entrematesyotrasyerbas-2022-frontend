import { Newspaper, EnvelopeOpen } from 'react-bootstrap-icons'
import lastNumber from '../../assets/magazine/last-number.jpg'

import './style.scss'

function NewMagazine() {
    return (
        <section className="new-magazine">
            <article className="container">
                <div className="row">
                    <div className="col-lg-4 last-number-img">
                        <img src={lastNumber} />
                    </div>
                    <div className="col-lg-8 info">
                        <h3>Ya salió la nueva edición de la revista Entre mates y otras yerbas</h3>
                        <div className='row icons'>
                            <div className='col-lg-6'>
                                <Newspaper className='icon' />
                                <h4>Toda la información</h4>
                                <p>Los temas que le interesan, notas y la buena información de siempre, ahora en papel.</p>
                            </div>
                            <div className='col-lg-6'>
                                <EnvelopeOpen className='icon' />
                                <h4>¿Cómo conseguirla?</h4>
                                <p>Sólo debe contactarnos a través del email: <a href='mailto:entrematesyotrasyerbas@gmail.com'>entrematesyotrasyerbas@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default NewMagazine