import { useEffect, useReducer } from 'react'
import { People } from 'react-bootstrap-icons'

import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './action-types'
import { apiUrl } from '../../../../../utils/api-url'
import Loader from '../../../../../components/Loader'

const initialState = {
    usersCount: 0,
    isFetching: false,
    hasError: false
}

// Users count reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                usersCount: action.payload.meta.count
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        default:
            return state
    }
}

function UsersPreview() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        dispatch({
            type: FETCH_USERS_REQUEST
        })
        fetch(apiUrl('/users'), {
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
                type: FETCH_USERS_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the users', error)
            dispatch({
                type: FETCH_USERS_FAILURE
            })
        })
    }, [])

    return (
        <div className="dashboard-element">
            <div className="dashboard-header">
                <h6>Usuarios</h6>
                <People />
            </div>
            <div className="dashboard-body">
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        <p className="count">{state.usersCount}</p>
                        <a href="/administration/usuarios" className="dashboard-link">Ver todos los usuarios</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default UsersPreview