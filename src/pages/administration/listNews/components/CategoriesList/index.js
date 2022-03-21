import { useEffect, useReducer } from "react";
import Loader from "../../../../../components/Loader";
import { apiUrl } from "../../../../../utils/api-url";
import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "./action-types";
import CategoryListItem from "./components/CategorytListItem";

import './style.scss'

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

function CategoriesList() {
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
            console.error('Error fetching the posts', error)
            dispatch({
                type: FETCH_CATEGORIES_FAILURE
            })
        })
    }, [])

    return (
        <div className="categories-list-admin">
            <div className="header">
                <h5>Categorías</h5>
                
            </div>
            <div className="list">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        {state.categories.length > 0 ? (
                            state.categories.map((category, categoryIndex) => (
                                <CategoryListItem key={categoryIndex} category={category} />
                            ))
                        ) : (
                            <p>No hay categorías</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default CategoriesList