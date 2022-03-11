import { Folder, Person, CheckCircleFill, XCircleFill,  } from 'react-bootstrap-icons'
import './style.scss'

function PostListItem(props) {
    return (
        <div className='row post-list-item'>
            <div className='col-3 col-sm-2 col-md-1 post-image'>
                <img src={props.post.primaryImageUrl} />
            </div>
            <div className='col-9 col-sm-10 col-md-5 post-tile'>
                <h6>{props.post.title}</h6>
            </div>
            <div className='col-3 post-category'>
                <Folder />
                <p>{props.post.category}</p>
            </div>
            <div className='col-2 post-author'>
                <Person />
                <p>{props.post.author}</p>
            </div>
            <div className='col-1 post-published'>
                {props.post.published ? <CheckCircleFill className='published' /> : <XCircleFill className='unpublished' />}
            </div>
        </div>
    )
}

export default PostListItem