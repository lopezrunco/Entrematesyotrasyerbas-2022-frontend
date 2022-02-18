import emyoyAvatar from '../../../../assets/emyoy-avatar.jpg'
import './style.scss'

function AuthorInfo() {
    return (
        <div className="author-info">
            <div className='avatar'>
                <img src={emyoyAvatar} />
            </div>
            <h5>EMYOY</h5>
            <small>entrematesyotrasyerbas@gmail.com</small>
            <p>Nosotros no aconsejamos, ni recetamos. Simplemente como periodistas, compartimos con la gente, el uso, dosis, fórmulas y virtudes curativas de las hierbas medicinales, que forman parte del conocimiento empírico de los pueblos y la comprobación luego de la ciencia.</p>
        </div>
    )
}

export default AuthorInfo