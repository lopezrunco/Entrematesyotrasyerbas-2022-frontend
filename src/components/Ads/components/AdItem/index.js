function AdItem(props) {
    return (
        <a href={props.web} className='col-sm-6 col-md-4 col-lg-2' target='_blank'>
            <img src={props.imageSource} alt={props.imageTitle} />
        </a>
    )
}

export default AdItem