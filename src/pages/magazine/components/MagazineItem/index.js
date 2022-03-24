import { useState } from 'react'
import { ChevronRight, XLg } from "react-bootstrap-icons"

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
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <img src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                            </div>
                            <div className='col-lg-6'>
                                <h6>{props.imageTitle}</h6>
                                {props.resume.map((item, itemIndex) => {
                                    return <p key={itemIndex}><ChevronRight /> {item}</p>
                                })}
                            </div>
                        </div>
                    </div>
                    <XLg className='close-icon' />
                </div>
            )}
        </>
    )
}

export default MagazineItem