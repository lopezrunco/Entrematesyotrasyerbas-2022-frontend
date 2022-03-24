import { useContext, useState } from "react"
import { BoxArrowRight, ExclamationCircleFill, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../App"
import PageTitle from "../../components/PageTitle"
import { apiUrl } from "../../utils/api-url"
import { LOGIN, LOGOUT } from "../../utils/general-action-types"

function Login() {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(AuthContext)

    const initialState = {
        email: '',
        password: '',
        token: '',
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        navigate('/sesion-finalizada')
    }

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = () => {
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        fetch(apiUrl('login'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                token: data.token
            })
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw response
            }
        }).then(data => {
            dispatch({
                type: LOGIN,
                payload: data
            })
            navigate('/administration')
        }).catch(error => {
            console.error(error)
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: 'Invalid credentials'
            })
        })
    }

    return (
        <>
            <PageTitle
                title='Iniciar sesión'
                text='Si usted es un administrador de esta web, ingrese sus credenciales para iniciar sesión'
                imgClassName='general'
            />
            <main className="login-page">
                <section className="container">
                    <article className="row">

                        {!state.user ? (
                            <div className="form-container">
                                <label htmlFor="email">
                                    Email *
                                    <input
                                        type='text'
                                        value={data.email}
                                        onChange={handleInputChange}
                                        name='email'
                                        id='email'
                                    />
                                </label>
                                <label htmlFor="password">
                                    Contraseña *
                                    <input
                                        type='password'
                                        value={data.password}
                                        onChange={handleInputChange}
                                        name='password'
                                        id='password'
                                    />
                                </label>
                                <label htmlFor="token">
                                    Token (Sólo si habilitó MFA)
                                    <input
                                        type='password'
                                        value={data.token}
                                        onChange={handleInputChange}
                                        name='token'
                                        id='token'
                                    />
                                </label>

                                <button
                                    onClick={handleFormSubmit}
                                    disabled={data.isSubmitting}
                                    className='button md-button primary-button'
                                >
                                    <Person />
                                    {data.isSubmitting ? ('Espere...') : 'Iniciar sesión'}
                                </button>

                                {data.errorMessage && (
                                    <span className="error-message">
                                        <ExclamationCircleFill />
                                        {data.errorMessage}
                                    </span>
                                )}

                            </div>
                        ) : (
                            <div className="message">
                                <h6>Usted ya se a logueado como {state.user.name}</h6>
                                <p>Necesita desloguearse para iniciar sesión con un usuario diferente</p>
                                <button className="button md-button primary-button" onClick={logout}>
                                    <BoxArrowRight />
                                    Terminar sesión
                                </button>
                            </div>
                        )}

                    </article>
                </section>
            </main>
        </>
    )
}

export default Login