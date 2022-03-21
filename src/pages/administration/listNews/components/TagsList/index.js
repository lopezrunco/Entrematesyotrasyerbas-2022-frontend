import { useEffect, useReducer } from "react"

import { apiUrl } from "../../../../../utils/api-url"
import { FETCH_TAGS_FAILURE, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS } from "./action-types"
import Loader from "../../../../../components/Loader"
import './style.scss'

const initialState = {
    tags: [],
    isFetching: false,
    hasError: false
}

// Tags reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_TAGS_REQUEST:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case FETCH_TAGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                tags: action.payload.uniqueTags
            }
        case FETCH_TAGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        default:
            return state
    }
}

function TagsList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: FETCH_TAGS_REQUEST
        })

        fetch(apiUrl('/tags'), {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw response
            }
        }).then(data => {
            dispatch({
                type: FETCH_TAGS_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the posts', error)
            dispatch({
                type: FETCH_TAGS_FAILURE
            })
        })
    }, [])

    return (
        <div className="tags-list-admin">
            <div className="header">
                <h5>Etiquetas</h5>
            </div>
            <div className="list">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        {state.tags.length > 0 ? (
                            state.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="tag-item">{tag}</span>
                            ))
                        ) : (
                            <p>No hay etiquetas</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default TagsList