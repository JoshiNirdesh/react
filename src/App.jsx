import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText]=useState("Dark Mode");
  const [mode, setMode]=useState ("dark");
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

  const title = "Hamro Nepal";
  const submit = "Submit";

  const buttonToggle=()=>{
    if(text == "Dark Mode"){
      setText("Light Mode");
      setMode("dark");
      showAlert("Dark mode is on ", "sucess");
    }
    else{
      setText("Dark Mode");
      setMode("light");
      showAlert("Light mode is on ", "sucess");
    }
  }

  const showAlert = (message,type) =>{
    setAlert( {
      message: message,
      type: type
    });
  };
  

  return (
    <>
    <Navbar  title={title} text = {text} submit={submit} buttonToggle={buttonToggle} mode={mode}/>
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
