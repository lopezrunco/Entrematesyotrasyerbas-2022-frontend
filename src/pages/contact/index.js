import { Soundwave, Clock, TelephoneFill, Envelope, Facebook, Youtube } from 'react-bootstrap-icons'

import PageTitle from '../../components/PageTitle'
import './style.scss'

function Contact() {
    return (
        <>
            <PageTitle
                title='Contacto'
                text='Participe de nuestro programa'
                imgClassName='contact'
            />
            <main className="contact-page">
                <section className="container">
                    <article className="row">

                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <Soundwave className='icon' />
                                <p>Radio Carve 850 AM</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="box">
                                <Clock className='icon' />
                                <p>Lunes a viernes 00 a 03 am</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href='tel:2900 7643' target='_blank' rel="noreferrer" className="box">
                                <TelephoneFill className='icon' />
                                <p>2900 7643</p>
                            </a>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href='mailto:entrematesyotrasyerbas@gmail.com' target='_blank' rel="noreferrer" className="box">
                                <Envelope className='icon' />
                                <p>entrematesyotrasyerbas@gmail.com</p>
                            </a>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-xl-3 offset-xl-3">
                            <a href='https://es-la.facebook.com/Entrematesyotrasyerbas/' target='_blank' className="box">
                                <Facebook className='icon' />
                                <p>Entrematesyotrasyerbas</p>
                            </a>
                        </div>

                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <a href='https://www.youtube.com/channel/UCn8eMAereXltvTtj-OLKEkQ' target='_blank' rel="noreferrer" className="box">
                                <Youtube className='icon' />
                                <p>Entre mates y Otras yerbas</p>
                            </a>
                        </div>

                    </article>
                </section>
            </main>
        </>
    )
}

export default Contact