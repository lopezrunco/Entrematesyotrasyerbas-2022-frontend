import { Routes, Route } from 'react-router-dom'

import Contact from './pages/contact'
import News from './pages/news'
import ViewPost from './pages/viewPost'
import Magazine from './pages/magazine'
import Home from './pages/home'
import NotFound from './pages/notFound'

import Nav from './components/Nav'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

import './App.scss'

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/contacto' element={<Contact />} />
        <Route path='/novedades' element={<News />} />
        <Route path='/posts/:id' element={<ViewPost />} />
        <Route path='/revista' element={<Magazine />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Bottom />
      <Footer />

    </div>
  )
}

export default App
