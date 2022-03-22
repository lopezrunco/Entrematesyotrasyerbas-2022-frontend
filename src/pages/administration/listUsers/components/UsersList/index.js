import { useEffect, useReducer } from 'react'
import { PeopleFill } from 'react-bootstrap-icons'

import { apiUrl } from '../../../../../utils/api-url'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './action-types'
import Loader from '../../../../../components/Loader'
import UsersListItem from './components/UsersListItem'
import './style.scss'

const initialState = {
    users: [],
    count: 0,
    isFetching: false,
    hasError: false
}

// Users reducer
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
                users: action.payload.users,
                count: action.payload.meta.count
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

function UsersList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: FETCH_USERS_REQUEST
        })

        fetch(apiUrl('users'), {
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
        <div className='users-list'>
            <div className='header'>
                <h5>Usuarios</h5>
                <span className='users-count'><PeopleFill /> {state.count}</span>
            </div>
            <div className='list'>
                {state.isFetching ? (
                    <Loader />
                ) : state.hasError ? (
                    <p>Error al conectar al servidor</p>
                ) : (
                    <>
                        {state.users.length > 0 ? (
                            state.users.map((user, userIndex) => (
                                <UsersListItem user={user} key={userIndex} />
                            ))
                        ) : (
                            <p>No hay usuarios</p>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default UsersList