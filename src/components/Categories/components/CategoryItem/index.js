import { useNavigate } from "react-router-dom"
import './style.scss'

function CategoryItem(props) {
    const navigate = useNavigate()
    const viewByCategory = () => {
        navigate(`/posts/category/${props.category.name}`)
    }

    return (
        <li
            className='category-item'
            onClick={viewByCategory}
        >
            {props.category.name}
            <span className='count'>
                ({props.category.count})
            </span>
        </li>
    )
}

export default CategoryItem