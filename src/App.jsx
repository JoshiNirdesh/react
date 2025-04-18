import './App.css'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Important for styling
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Login from './components/Login'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from './components/Home'
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import Signup from './components/Signup';


function App() {      

  return (
    <>
    <Router>

    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Contact' element={<ContactUs/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>

    </Routes>
    <Footer/>
      </Router>

    </>
    
  )
}

export default App
