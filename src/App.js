import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
