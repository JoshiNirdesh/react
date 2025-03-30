import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import { EmblaCarousel } from './components/EmblaCarousel'
import 'react-toastify/dist/ReactToastify.css'; // Important for styling
import Slider from './components/Slider'






function App() {
  const [count, setCount] = useState(0);
  const [mode,setMode] =  useState("Light Mode");
  const [color, setColor] = useState('dark');
  const [alert, setAlert]=useState('null');



  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const [name, setName]=useState("Guest");

  const changeName =()=>{
    setName(name === "Guest" ? "Nirdesh" : "Guest");
  }
  const title = "Hamro Nepal"

    const  showAlert = (message,type)=>{
      setAlert({
      message:message,
      type: type
      })
      setTimeout(()=>{
        setAlert('null');
      },2000)
    }

    const modeChange =()=>{
      if(mode === 'Dark Mode'){
        setMode('Light Mode');
        setColor('dark');
          toast.success('Dark Mode is On', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
      }
      else{
        setMode('Dark Mode')
        setColor('light');
        showAlert('Dark mode', "success");
        toast.success('Light is On', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });
      }
    }
    const notify = () => toast("Wow so easy!");   

    
      

  return (
    <>

    
    <Navbar notify={notify}title={title} mode={mode} modeChange={modeChange} color={color}/>
    

    <EmblaCarousel/>

    <ToastContainer
   position="center"
   autoClose={1000}
   hideProgressBar
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="dark"
   transition={Zoom}
    />

    <Slider/>

    <button onClick={notify}>Notify</button>
    <Alert alert={alert}/>

      <div className="card">
        <button onClick={increment}>
          Increment
        </button>

        <button onClick={decrement}>
          Decrement
        </button>

        <p>The count is {count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>Welcome {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </>

  )
}

export default App
