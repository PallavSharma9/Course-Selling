import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Header from './components/Header.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { ThemeProvider } from '@emotion/react';
import Courses from './components/Courses.jsx'



function App() {
 

  return (
    <>
      
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
