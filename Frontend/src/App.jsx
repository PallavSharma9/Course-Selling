import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { BASE_URL } from './config.js';
import Courses from './components/Courses.jsx'
import AddCourse from './components/AddCourse.jsx';
import Course from './components/Course.jsx';
import { useEffect } from 'react';
import { Landing } from './components/Landing.jsx';
import axios from 'axios';
import { userState } from './store/atoms/user.js';
import { RecoilRoot, useSetRecoilState } from 'recoil';



function App() {


  return (
    <RecoilRoot>
    <div
      style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee"}}
    >
      
        <Router>
          <Header />
          <InitUser />
          <Routes>
            <Route path={"/addcourse"} element= {<AddCourse />} />
            <Route path={"/course/:courseId"} element={<Course />} />
            <Route path={'/courses'} element={<Courses />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/'} element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  )
}

function InitUser() {
  const setUser = useSetRecoilState(userState)

  const init = async() => {
    try{
      const response = await axios.get("http://localhost:3001/admin/me", {
        headers: {
          "Authorization" : "Bearer " + localStorage.getItem('token')
        }
      })

      if(response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username
        })
      } else {
          setUser({
            isLoading: false,
            userEmail: null
          })
      }
    }
    catch (e) {
      setUser({
        isLoading: false,
        userEmail: null
      })
    }
  }

  useEffect(() => {
    init();
}, []);

  return <></>
}

export default App
