import { Person, ChevronRight } from "react-bootstrap-icons"
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
                    <span className="category">{post.category}</span>
                    <h3 onClick={viewPost}>{post.title}</h3>
                    <p>{post.content[0]}</p>
                    <p className="tags">
                        {post.tags.map((tag, index) => {
                            return <button className="tag" key={index}>{tag}</button>
                        })}
                    </p>
                    <button className="read-more" onClick={viewPost}>Leer más <ChevronRight /></button>
                    <span className="author"><Person /> Autor: {post.author}</span>
                </div>
            </div>
        </div>
    )
}

export default PostItem