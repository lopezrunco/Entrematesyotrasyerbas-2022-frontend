import './style.scss'

function Loader() {
    return (
        <div className="loader">
            <div className="container">
                <svg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20">
                    </circle>
                </svg>
                <h6>Cargando...</h6>
            </div>
        </div>
    )
}

export default Loader