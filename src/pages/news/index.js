import { createContext, useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom"

import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './action-types'
import { apiUrl } from '../../utils/api-url'
import PageTitle from "../../components/PageTitle"
import PostItem from "./components/PostItem"

const initialState = {
    posts: [],
    isFetching: false,
    hasError: false
}

// Posts reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload.posts
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                hasError: true,
                isFetching: false
            }
        default:
            return state
    }
}

function News() {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)

    // On component mount, fetch and render the posts
    useEffect(() => {
        dispatch({
            type: FETCH_POSTS_REQUEST
        })

        fetch(apiUrl('posts'), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw response
            }
        }).then(data => {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the posts', error)

            dispatch({
                type: FETCH_POSTS_FAILURE
            })
        })
    }, [navigate])

    return (
        <>
            <PageTitle
                title='Novedades'
                text='Estas son las últimas novedades que compartimos tanto en nuestro programa radial como en la revista'
                imgClassName='news'
            />

                <main className="news-page">
                    <div className="container">
                        <div className="row posts-container">
                            {state.isFetching ? (
                                <p>Loading posts...</p>
                            ) : state.hasError ? (
                                <p>An error ocurred!</p>
                            ) : (
                                <>
                                    {state.posts.length > 0 ? (
                                        state.posts.map(post => (
                                            // <PostItem key={post.id} post={post} />
                                            <>
                                            <p>{post.title}</p>
                                            <img src={post.primaryImageUrl} />
                                            </>
                                        ))
                                    ) : (
                                        <p>No posts yet!</p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </main>
        </>
    )
}

export default News