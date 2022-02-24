import { useNavigate } from "react-router-dom"

function TagButton(props) {
    const navigate = useNavigate()

    const ViewByTag = () => {
        navigate(`/posts/tag/${props.tag}`)
    }

    return <button className="tag" onClick={ViewByTag}>{props.tag}</button>
}

export default TagButton