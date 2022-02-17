import Slider from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'

import './styles.scss'

function ImageSlider() {
    return (
        <div>
            <Slider className='carousel' autoPlay autoPlayInterval={3555000}>
                <img src={slider1} className="sliderimg" />
                <img src={slider2} className="sliderimg" />
                <img src={slider3} className="sliderimg" />
            </Slider>
        </div >
    )
}

export default ImageSlider