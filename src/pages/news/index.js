import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from '../../utils/posts-action-types'
import { apiUrl } from '../../utils/api-url'

import PageTitle from "../../components/PageTitle"
import PostItem from "../../components/PostItem"
import Loader from "../../components/Loader"
import ServerError from "../../components/ServerError"
import NoPosts from "../../components/NoPosts"

const initialState = {
    posts: [],
    isFetching: false,
    hasError: false
}

// Posts reducer
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
                posts: action.payload.posts
            }
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                hasError: true,
                isFetching: false
            }
        default:
            return state
    }
}

function News() {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reducer, initialState)
    const [page, setPage] = useState(1)
    const [itemsPerPage] = useState(12)

    const prevPage = () => {
        setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }

    // On component mount, fetch and render the posts
    useEffect(() => {
        dispatch({
            type: FETCH_POSTS_REQUEST
        })

        fetch(apiUrl(`posts?page=${page}&itemsPerPage=${itemsPerPage}`), {
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
    }, [navigate, page, itemsPerPage])

    return (
        <>
            <PageTitle
                title='Novedades'
                text='Estas son las ??ltimas novedades que compartimos tanto en nuestro programa radial como en la revista'
                imgClassName='news'
            />

            <main className="news-page">
                <section className="container">
                    <article className="row posts-container">
                        {state.isFetching ? (
                            <Loader />
                        ) : state.hasError ? (
                            <ServerError />
                        ) : (
                            <>
                                {state.posts.length > 0 ? (
                                    state.posts.map(post => (
                                        <PostItem key={post.id} post={post} />
                                    ))
                                ) : (
                                    <NoPosts />
                                )}
                            </>
                        )}
                    </article>
                    <div className="posts-pagination">
                        {page > 1 && (
                            <div onClick={prevPage}><ChevronLeft /> Anterior</div>
                        )}
                        <div onClick={nextPage}>Siguiente <ChevronRight /></div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default News