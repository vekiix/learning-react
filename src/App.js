import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.scss'
import Home from './pages/Home.js';
import Course from './pages/Course.js'
import Courses from './pages/Courses'
import Register from './pages/Register.js'
import SignIn from './pages/SignIn.js';
import ScrollToTop from './ScrollToTop.js'
import Profile from './pages/Profile.js';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course/:id' element={<Course />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Home/>} />
      </Routes> 
    </Router>
    </>
  );
}

export default App;
