import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Course from './pages/Course.js'
import Courses from './pages/Courses'
import ScrollToTop from './ScrollToTop.js'

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Course />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/signin' element={<Course />} />
          <Route path='/register' element={<Course />} />
          <Route path='*' element={<Home/>} />
      </Routes> 
    </Router>
    </>
  );
}

export default App;
