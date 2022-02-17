import './styles.scss'

function PageTitle(props) {
    return (
        <div className={`page-title ${props.imgClassName}`}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default PageTitle