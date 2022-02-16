import { Routes, Route } from 'react-router-dom'

import Contact from './pages/contact'
import News from './pages/news'
import Magazine from './pages/magazine'
import Home from './pages/home'
import NotFound from './pages/notFound'

import Nav from './components/Nav'

import './App.scss'

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path='/contacto' element={<Contact />} />
        <Route path='/novedades' element={<News />} />
        <Route path='/revista' element={<Magazine />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
