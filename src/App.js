import Intro from './components/intro/Intro'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Router>
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
