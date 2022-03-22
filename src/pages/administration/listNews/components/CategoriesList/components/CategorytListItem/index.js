import { Folder } from 'react-bootstrap-icons'
import './style.scss'

function CategoryListItem(props) {
    return (
        <div className="category-list-item">
            <p className='category-name'><Folder />{props.category.name}</p>
            <small className='badge-tag success'>{props.category.count} artículos</small>
        </div>
    )
}

export default CategoryListItem