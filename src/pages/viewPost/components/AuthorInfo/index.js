import emyoyAvatar from '../../../../assets/emyoy-avatar.jpg'
import './style.scss'

function AuthorInfo() {
    return (
        <div className="author-info">
            <div className='avatar'>
                <img src={emyoyAvatar} alt='Entre mates y otras yerbas' />
            </div>
            <h5>EMYOY</h5>
            <small>entrematesyotrasyerbas@gmail.com</small>
            <p>De lunes a viernes de 00 a 03 am en Radio Carve con la conducción de Miguel Cabrera</p>
        </div>
    )
}

export default AuthorInfo