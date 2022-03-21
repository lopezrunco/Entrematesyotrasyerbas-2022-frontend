import './style.scss'

function CategoryListItem(props) {
    return (
        <div className="category-list-item">
            <p>{props.category.name}</p>
            <p>{props.category.count} artículos</p>
        </div>
    )
}

export default CategoryListItem