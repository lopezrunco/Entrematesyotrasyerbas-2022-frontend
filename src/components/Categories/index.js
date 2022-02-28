import { useEffect, useReducer } from 'react'

import { apiUrl } from '../../utils/api-url'
import Loader from '../Loader'
import ServerError from '../ServerError'
import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from './action-types'
import CategoryItem from './components/CategoryItem'

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

function Categories() {
    const [state, dispatch] = useReducer(reducer, initialState)

    // On component mount, fetch and render the categories
    useEffect(() => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST
        })

        fetch(apiUrl('categories'), {
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
        <div className='categories-list'>
            {state.isFetching ? (
                <Loader />
            ) : state.hasError ? (
                <ServerError />
            ) : (
                <>
                    <h4>Categorías</h4>
                    <ul>
                        {state.categories.length > 0 ? (
                            state.categories.map((category, categoryIndex) => (
                                <CategoryItem key={categoryIndex} category={category} />
                            ))
                        ) : (
                            <p>Aún no hay categorías creadas</p>
                        )}
                    </ul>
                </>
            )}
        </div>
    )
}

export default Categories