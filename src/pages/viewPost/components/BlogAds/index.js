import CarveAd from '../../../../assets/carve.png'

import './style.scss'

function BlogAds() {
    return (
        <div className='blog-ads'>
            <a href='http://www.carve850.com.uy/radio/' target='_blank' rel="noreferrer">
                <img src={CarveAd} alt='Radio Carve 850 am' />
            </a>
        </div>
    )
}

export default BlogAds