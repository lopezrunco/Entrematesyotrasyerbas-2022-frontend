import { createContext, useEffect, useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'

import LoggedOut from './pages/loggedOut'
import Contact from './pages/contact'
import NewsByAuthor from './pages/newsByAuthor'
import NewsByTag from './pages/newsByTag'
import NewsByCategory from './pages/newsByCategory'
import News from './pages/news'
import ViewPost from './pages/viewPost'
import Magazine from './pages/magazine'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Login from './pages/login'

import Dashboard from './pages/administration/dashboard'
import ListNews from './pages/administration/listNews'
import ListUsers from './pages/administration/listUsers'

import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'
import Nav from './components/Nav'
import Bottom from './components/Bottom'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import RequireAuth from './components/RequireAuth'
import AdministrationButton from './components/AdministrationButton'

import { ENABLE_MFA, HIDE_LOADER, LOGIN, LOGOUT, REFRESH_TOKEN, SHOW_LOADER } from './utils/general-action-types'

import './App.scss'

export const AuthContext = createContext()

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken'),
  showingLoader: false
}

// Login actions reducer
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', action.payload.user.token)
      localStorage.setItem('refreshToken', action.payload.user.refreshToken)

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.user.token,
        refreshToken: action.payload.user.refreshToken
      }

    case REFRESH_TOKEN:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('refreshToken', action.payload.refreshToken)

      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken
      }

    case LOGOUT:
      localStorage.clear()

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        refreshToken: null
      }

    case ENABLE_MFA:
      const user = {
        ...state.user,
        mfaEnabled: true
      }

      localStorage.setItem('user', JSON.stringify(user))

      return {
        ...state,
        user
      }

    case SHOW_LOADER:
      return {
        ...state,
        showingLoader: true
      }

    case HIDE_LOADER:
      return {
        ...state,
        showingLoader: false
      }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    if (user && token) {
      dispatch({
        type: LOGIN,
        payload: {
          user,
          token
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch }} >
      <div className="App">
        <Routes>
          <Route path='/administration' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path='/administration/novedades' element={
            <RequireAuth>
              <ListNews />
            </RequireAuth>
          } />
          <Route path='/administration/usuarios' element={
            <RequireAuth>
              <ListUsers />
            </RequireAuth>
          } />
          <Route path='/sesion-finalizada' element={
            <>
              <Nav />
              <LoggedOut />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
            </>
          } />
          <Route path='/contacto' element={
            <>
              <Nav />
              <Contact />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/novedades' element={
            <>
              <Nav />
              <News />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/posts/:id' element={
            <>
              <Nav />
              <ViewPost />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/posts/category/:category' element={
            <>
              <Nav />
              <NewsByCategory />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/posts/tag/:tag' element={
            <>
              <Nav />
              <NewsByTag />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/posts/author/:author' element={
            <>
              <Nav />
              <NewsByAuthor />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/revista' element={
            <>
              <Nav />
              <Magazine />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/login' element={
            <>
              <Nav />
              <Login />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='/' element={
            <>
              <Nav />
              <Home />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
          <Route path='*' element={
            <>
              <Nav />
              <NotFound />
              <Bottom />
              <Footer />
              <GoToTop />
              <ScrollToTopOnNavigation />
              <AdministrationButton />
            </>
          } />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
