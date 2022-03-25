import { useEffect, useReducer } from "react"
import { FileEarmark } from "react-bootstrap-icons"

import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "../../../../../utils/posts-action-types"
import { apiUrl } from "../../../../../utils/api-url"
import Loader from "../../../../../components/Loader"

const initialState = {
    postsCount: 0,
    isFetching: false,
    hasError: false
}

// Posts count reducer
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
                postsCount: action.payload.meta.count
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

function PostsPreview() {
    const [state, dispatch] = useReducer(reducer, initialState)

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
    }, [])

    return (
        <div className="dashboard-element">
            <div className="dashboard-header">
                <h6>Artículos</h6>
                <FileEarmark />
            </div>
            <div className="dashboard-body">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        <p className="count">{state.postsCount}</p>
                        <a href="/administration/novedades" className="dashboard-link">Ver todos los artículos</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default PostsPreview