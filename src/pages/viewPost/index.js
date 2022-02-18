import { useEffect, useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"

import PageTitle from "../../components/PageTitle"
import { apiUrl } from "../../utils/api-url"
import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from './action-types'

const initialState = {
    post: undefined,
    isFetching: false,
    hasError: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                isFetching: true,
                hasError: false
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                post: action.payload.post
            }
        case FETCH_POST_FAILURE:
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        default:
            return state
    }
}

function ViewPost() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({
            type: FETCH_POST_REQUEST
        })

        fetch(apiUrl(`posts/${id}`), {
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
                type: FETCH_POST_SUCCESS,
                payload: data
            })
        }).catch(error => {
            console.error('Error fetching the post', error)

            dispatch({
                type: FETCH_POST_FAILURE
            })
        })
    }, [id, navigate])

    return (
        <>
            <PageTitle
                title='Novedades'
                text='Estas son las últimas novedades que compartimos tanto en nuestro programa radial como en la revista'
                imgClassName='news'
            />

            <main className="view-post-page">
                <section className="container">
                    <article className="row">
                        <div>
                            {state.post && (
                                <>
                                    <h2>{state.post.title}</h2>
                                </>
                            )}
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default ViewPost