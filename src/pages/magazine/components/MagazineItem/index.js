import './style.scss'

const MagazineItem = (props) => {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='magazine-item'>
                <img src={props.imageSource} alt={`Entre mates y otras yerbas ${props.imageTitle}`} />
                <h6>{props.imageTitle}</h6>
            </div>
        </div>
    )
}

export default MagazineItem