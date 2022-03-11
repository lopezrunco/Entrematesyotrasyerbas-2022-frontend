import { useEffect, useReducer, useState } from "react"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../../../../../utils/posts-action-types"
import { apiUrl } from "../../../../../utils/api-url"
import Loader from "../../../../../components/Loader"
import PostListItem from "./components/PostListItem"

import './style.scss'

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
                isFetching: false,
                hasError: true
            }

        default:
            return state
    }
}

function PostsList() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [page, setPage] = useState(1)
    const [itemsPerPage] = useState(10)

    const prevPage = () => {
        setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        dispatch({
            type: FETCH_POSTS_REQUEST
        })

        fetch(apiUrl(`posts?page=${page}&itemsPerPage=${itemsPerPage}`), {
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
    }, [page, itemsPerPage])

    return (
        <div className="post-list">
            <div className="header">
                <h5>Artículos</h5>
                <div className="dashboard-pagination">
                    {page > 1 && (
                        <div onClick={prevPage}><ChevronLeft /></div>
                    )}
                    <div onClick={nextPage}><ChevronRight /></div>
                </div>
            </div>
            <div className="list">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        {state.posts.length > 0 ? (
                            state.posts.map((post, postIndex) => (
                                <PostListItem key={postIndex} post={post} />
                            ))
                        ) : (
                            <p>No hay artículos</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default PostsList