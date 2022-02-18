import { Envelope, TelephoneFill, Facebook, Youtube } from 'react-bootstrap-icons'

import logo from '../../assets/mobile-logo.png'
import magazine1 from '../../assets/magazine/30.jpg'
import magazine2 from '../../assets/magazine/39.jpg'
import newMagazine from '../../assets/magazine/last-number.jpg'

import './style.scss'

const magazines = [newMagazine, magazine1, magazine2]

function Bottom() {
    return (
        <section className='bottom'>
            <article className='container'>
                <div className='row'>

                    <div className='col-lg-3 about'>
                        <img src={logo} alt='Entre mates y otras yerbas' />
                        <p>De lunes a viernes de 00 a 03 am en Radio Carve con la conducción de Miguel Cabrera</p>
                    </div>

                    <div className='col-lg-3 contact-info'>
                        <h4>Información de contacto</h4>
                        <div className='item'>
                            <Envelope />
                            <p><a href='mailto:entrematesyotrasyerbas@gmail.com'>entrematesyotrasyerbas@gmail.com</a></p>
                        </div>
                        <div className='item'>
                            <TelephoneFill />
                            <p><a href='tel:+59829007643'>2900 7643</a></p>
                        </div>
                    </div>

                    <div className='col-lg-2 social'>
                        <h4>Síganos en</h4>
                        <div className='item'>
                            <Facebook />
                            <p><a href='https://es-la.facebook.com/Entrematesyotrasyerbas/'>Facebook</a></p>
                        </div>
                        <div className='item'>
                            <Youtube />
                            <p><a href='https://www.youtube.com/channel/UCn8eMAereXltvTtj-OLKEkQ'>YouTube</a></p>
                        </div>
                    </div>

                    <div className='col-lg-4 magazine'>
                        <div className='img-grid'>
                            {magazines.map((magazine, index) => {
                                return <a href='/revista'><img src={magazine} alt='Tapa Revista Entre mates y otras yerbas' key={index} /></a>
                            })}
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default Bottom