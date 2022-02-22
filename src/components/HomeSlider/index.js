import Carousel from 'react-bootstrap/Carousel'

import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import desktopLogo from '../../assets/desktop-logo.png'
import mobileLogo from '../../assets/mobile-logo.png'

import './styles.scss'

function HomeSlider() {
    return (

        <Carousel fade variant='light'>
            <Carousel.Item className='carousel-item'>
                <img
                    className="d-block w-100 carousel-img"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-caption'>
                    <img className='desktop-logo' src={desktopLogo} alt='Entre mates y otras yerbas' />
                    <img className='mobile-logo' src={mobileLogo} alt='Entre mates y otras yerbas' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption className='carousel-caption'>
                    <img className='desktop-logo' src={desktopLogo} alt='Entre mates y otras yerbas' />
                    <img className='mobile-logo' src={mobileLogo} alt='Entre mates y otras yerbas' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption className='carousel-caption'>
                    <img className='desktop-logo' src={desktopLogo} alt='Entre mates y otras yerbas' />
                    <img className='mobile-logo' src={mobileLogo} alt='Entre mates y otras yerbas' />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default HomeSlider