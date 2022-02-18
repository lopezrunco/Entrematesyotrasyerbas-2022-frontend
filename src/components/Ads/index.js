import vitanna from '../../assets/vitanna.jpg'
import waykana from '../../assets/waykana.jpg'
import supertico from '../../assets/super-tico.jpg'
import fix from '../../assets/fix1.jpg'
import trinidad from '../../assets/la-trinidad.jpg'
import scaglioni from '../../assets/scaglioni.jpg'

import './style.scss'

function Ads() {
    return (
        <section className="ads">
            <article className='container'>
                <div className='row'>
                    <a href='https://vitanna.com.uy/' className='col-md-2' target='_blank'>
                        <img src={vitanna} alt='vitanna' />
                    </a>
                    <a href='https://www.waykanauruguay.com.uy/' className='col-md-2' target='_blank'>
                        <img src={waykana} alt='waykana' />
                    </a>
                    <a href='https://tico.com.uy/' className='col-md-2' target='_blank'>
                        <img src={supertico} alt='supertico' />
                    </a>
                    <a href='https://www.fix1.uy/' className='col-md-2' target='_blank'>
                        <img src={fix} alt='fix1' />
                    </a>
                    <a href='https://latrinidad.com.uy/' className='col-md-2' target='_blank'>
                        <img src={trinidad} alt='trinidad' />
                    </a>
                    <a href='http://scaglioni.com.uy/' className='col-md-2' target='_blank'>
                        <img src={scaglioni} alt='scaglioni' />
                    </a>
                </div>
            </article>
        </section>
    )
}

export default Ads