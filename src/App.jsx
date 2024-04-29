import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Welcome from './pages/Welcome'
import Categories from './pages/Categories'
import Random from './pages/RandomRecipe'

function App() {

  return (
    <div>
    <Nav />
    <Routes>
    <Route path='/' element={<Welcome />} />
    <Route path='/categories' element={<Categories />} />
    <Route path='/random' element={<Random />} />
    </Routes>
    </div>
  )
}

export default App
