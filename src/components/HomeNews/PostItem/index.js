import { ChevronRight } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

import './style.scss'

function PostItem({ post }) {
    const navigate = useNavigate()

    const viewPost = () => {
        navigate(`/posts/${post.id}`)
    }

    return (
        <div className="col-lg-4">
            <div className="post-wrapper">
                <div className="img-wrapper">
                    <img onClick={viewPost} src={post.primaryImageUrl} />
                </div>
                <div className="info-wrapper">
                    <h3 onClick={viewPost}>{post.title}</h3>
                    <button className="read-more" onClick={viewPost}>Leer más <ChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default PostItem