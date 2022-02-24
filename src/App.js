import { Routes, Route } from 'react-router-dom'

import Contact from './pages/contact'
import NewsByTag from './pages/newsByTag'
import NewsByCategory from './pages/newsByCategory'
import News from './pages/news'
import ViewPost from './pages/viewPost'
import Magazine from './pages/magazine'
import Home from './pages/home'
import NotFound from './pages/notFound'

import ScrollToTopOnNavigation from './components/ScrollToTopOnNavigation'
import Nav from './components/Nav'
import Bottom from './components/Bottom'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'

import './App.scss'

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/contacto' element={<Contact />} />
        <Route path='/novedades' element={<News />} />
        <Route path='/posts/:id' element={<ViewPost />} />
        <Route path='/posts/category/:category' element={<NewsByCategory />} />
        <Route path='/posts/tag/:tag' element={<NewsByTag />} />
        <Route path='/revista' element={<Magazine />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Bottom />
      <Footer />
      <GoToTop />
      <ScrollToTopOnNavigation />

    </div>
  )
}

export default App
