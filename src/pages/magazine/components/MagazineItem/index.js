import { useState } from 'react'
import { XLg } from "react-bootstrap-icons"

import './style.scss'

const MagazineItem = (props) => {
    const [openImage, setOpenImage] = useState(false)
    const handleClick = () => {
        setOpenImage(!openImage)
    }

    return (
        <>
            <div className='col-sm-6 col-md-4 col-lg-3'>
                <div className='magazine-item' onClick={handleClick}>
                    <img src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    <h6>{props.imageTitle}</h6>
                </div>
            </div>
            {openImage && (
                <div className='image-viewer' onClick={handleClick}>
                    <img src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                    <h6>{props.imageTitle}</h6>
                    <XLg className='close-icon' />
                </div>
            )}
        </>
    )
}

export default MagazineItem