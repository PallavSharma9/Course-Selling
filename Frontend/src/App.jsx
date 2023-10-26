import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import Courses from './components/Courses.jsx'
import AddCourse from './components/AddCourse.jsx';
import Course from './components/Course.jsx';



function App() {
 

  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route path={"/addcourse"} element= {<AddCourse />} />
          <Route path={"/course/:courseId"} element={<Course />} />
          <Route path={'/courses'} element={<Courses />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
