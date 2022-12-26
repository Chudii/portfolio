import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Experience from './pages/Experience.js'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/exp' element={<Experience />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
