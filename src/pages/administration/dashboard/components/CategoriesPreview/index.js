import { useEffect, useReducer } from 'react'
import { Folder } from 'react-bootstrap-icons'

import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './action-types'
import { apiUrl } from '../../../../../utils/api-url'
import Loader from '../../../../../components/Loader'

const initialState = {
    categories: [],
    isFetching: false,
    hasError: false
}

// Categories reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: action.payload.categories
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        default:
            return state
    }
}

function CategoriesPreview() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST
        })
        fetch(apiUrl('/categories'), {
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
                type: FETCH_CATEGORIES_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the categories', error)
            dispatch({
                type: FETCH_CATEGORIES_FAILURE
            })
        })
    }, [])

    return (
        <div className="dashboard-element">
            <div className="dashboard-header">
                <h6>Categorías</h6>
                <Folder />
            </div>
            <div className="dashboard-body">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        <p className="count">{state.categories.length}</p>
                        <a href="/administration/novedades" className="dashboard-link">Ver todas las categorías</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default CategoriesPreview