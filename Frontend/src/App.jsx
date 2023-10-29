import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { BASE_URL } from './config.js';
import Courses from './components/Courses.jsx'
import AddCourse from './components/AddCourse.jsx';
import Course from './components/Course.jsx';
import { useState, useEffect } from 'react';
import { Landing } from './components/Landing.jsx';
import axios from 'axios';



function App() {
 const [userEmail, setUserEmail] = useState(null)

 const init = async() =>{
  const response = await axios.get(`${BASE_URL}/admin/me`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })

  if(response.data.username) {
    setUserEmail(response.data.username)
  }
 }

 useEffect(() => {
  init();
 }, [])

  return (
    <div
      style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}
    >
      
      <Router>
        <Header userEmail={userEmail} setUserEmail={setUserEmail}/>
        <Routes>
          <Route path={"/addcourse"} element= {<AddCourse />} />
          <Route path={"/course/:courseId"} element={<Course />} />
          <Route path={'/courses'} element={<Courses />} />
          <Route path={'/login'} element={<Login setUserEmail={setUserEmail}/>} />
          <Route path={'/signup'} element={<Signup setUserEmail={setUserEmail}/>} />
          <Route path={'/'} element={<Landing userEmail={userEmail} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
