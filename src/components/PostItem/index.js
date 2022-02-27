import { Person, ChevronRight } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

import TagButton from "../TagButton"
import './style.scss'

function PostItem({ post }) {
    const navigate = useNavigate()

    const viewPost = () => {
        navigate(`/posts/${post.id}`)
    }

    const ViewByCategory = () => {
        navigate(`/posts/category/${post.category}`)
    }

    const ViewByAuthor = () => {
        navigate(`/posts/author/${post.author}`)
    }

    return (
        <div className="col-lg-4">
            <div className="post-wrapper">
                <div className="img-wrapper">
                    <img onClick={viewPost} src={post.primaryImageUrl} alt='Entre mates y otras yerbas' />
                </div>
                <div className="info-wrapper">
                    <span className="category" onClick={ViewByCategory}>{post.category}</span>
                    <h3 onClick={viewPost}>{post.title}</h3>
                    <p>{post.content[0]}</p>
                    <div className="tags">
                        {post.tags.length > 0 && (
                            post.tags.map((tagElement, tagIndex) => {
                                return <TagButton tag={tagElement} key={tagIndex} />
                            })
                        )}
                    </div>
                    <button className="read-more" onClick={viewPost}>Leer más <ChevronRight /></button>
                    <span className="author" onClick={ViewByAuthor}><Person /> Autor: {post.author}</span>
                </div>
            </div>
        </div>
    )
}

export default PostItem