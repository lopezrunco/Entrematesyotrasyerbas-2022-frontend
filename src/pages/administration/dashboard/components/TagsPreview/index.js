import { useEffect, useReducer } from 'react'
import { Hash } from 'react-bootstrap-icons'

import { FETCH_TAGS_FAILURE, FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS } from './action-types'
import { apiUrl } from '../../../../../utils/api-url'
import Loader from '../../../../../components/Loader'

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

function TagsPreview() {
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
            console.error('Error fetching the categories', error)
            dispatch({
                type: FETCH_TAGS_FAILURE
            })
        })
    }, [])

    return (
        <div className="dashboard-element">
            <div className="dashboard-header">
                <h6>Etiquetas</h6>
                <Hash />
            </div>
            <div className="dashboard-body">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        <p className="count">{state.tags.length}</p>
                        <a href="/administration/novedades" className="dashboard-link">Ver todas las etiquetas</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default TagsPreview