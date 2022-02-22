import { useEffect, useReducer } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { FETCH_POST_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from './action-types'
import PageTitle from "../../components/PageTitle"
import { apiUrl } from "../../utils/api-url"
import AuthorInfo from "./components/AuthorInfo"
import BlogAds from "./components/BlogAds"
import FollowUs from "./components/FollowUs"

import './style.scss'

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

            <div className="container">
                <div className="row">

                    <div className="col-lg-9">
                        <main className="view-post-page">
                            <section className="container">
                                <article className="row">
                                    <div>
                                        {state.post && (
                                            <>
                                                <div className="img-wrapper">
                                                    <img src={state.post.primaryImageUrl} alt='Entre mates y otras yerbas' />
                                                </div>
                                                <h2>{state.post.title}</h2>
                                                <div className="post-info">
                                                    <span className="author">Autor: {state.post.author}</span>
                                                    <span>/</span>
                                                    <span className="category">Categoria: {state.post.category}</span>
                                                </div>
                                                <div className="content">
                                                    {state.post.content.map(contentP => {
                                                        return <p>{contentP}</p>
                                                    })}
                                                </div>
                                                <div className="subcontent">
                                                    {state.post.subcontent.map(subcontentP => {
                                                        return (
                                                            subcontentP.map((subContentPChildren, index) => {
                                                                if (index === 0) {
                                                                    return (
                                                                        <h4>{subContentPChildren}</h4>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p>{subContentPChildren}</p>
                                                                    )
                                                                }
                                                            })
                                                        )
                                                    })}
                                                </div>
                                                <div className="secondary-images">
                                                    {state.post.secondaryImagesUrls.map((imgUrl, imgUrlIndex) => {
                                                        return <img key={imgUrlIndex} src={imgUrl} alt='Entre mates y otras yerbas' />
                                                    })}
                                                </div>
                                                <p className="tags">
                                                    {state.post.tags.map((tag, tagIndex) => {
                                                        return <button className="tag" key={tagIndex}>{tag}</button>
                                                    })}
                                                </p>
                                                <div className="links">
                                                    {state.post.links.map((link, linkIndex) => {
                                                        return <p key={linkIndex}>{link}</p>
                                                    })}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </article>
                            </section>
                        </main>
                    </div>

                    <div className="col-lg-3">
                        <aside>
                            <section className="news-aside">
                                <AuthorInfo />
                                <FollowUs />
                                <BlogAds />
                            </section>
                        </aside>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ViewPost