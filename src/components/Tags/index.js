import { useEffect, useReducer } from "react"

import { apiUrl } from "../../utils/api-url"
import Loader from "../Loader"
import ServerError from "../ServerError"
import { FETCH_TAGS_FAILURE, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS } from './action-types'
import Tag from "./components/Tag"

const initialState = {
    tags: [],
    isFetching: false,
    hasError: false
}

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

function Tags() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: FETCH_TAGS_REQUEST
        })

        fetch(apiUrl('tags'), {
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
                type: FETCH_TAGS_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the tags', error)

            dispatch({
                type: FETCH_TAGS_FAILURE
            })
        })
    }, [])

    return (
        <div className="tags-list">
            {state.isFetching ? (
                <Loader />
            ) : state.hasError ? (
                <ServerError />
            ) : (
                <>
                    <h4>Nube de etiquetas</h4>
                    <div className="tags">
                        {state.tags.length > 0 ? (
                            state.tags.map((tag, tagIndex) => (
                                <Tag key={tagIndex} tag={tag} />
                            ))
                        ) : (
                            <p>Aún no hay etiquetas creadas</p>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default Tags