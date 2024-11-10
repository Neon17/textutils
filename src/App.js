import './App.css';
import Accordian from './components/Accordian';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light')
  const showAlert = function (msg,type){
    <Alert msg = {msg} type = {type}/>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm toggleMode = {mode} setMode = {setMode} showAlert = {showAlert}/>
    },
    {
      path: "/about",
      element: <Accordian toggleMode = {mode} setMode = {setMode} showAlert = {showAlert}/>
    }
  ])


  setInterval(() => {
    document.title = "Hello there";
  }, 1000);

  setInterval(()=>{
    document.title = "You are mad";
  },2000)

  return (
    <>
    <div className = {`pb-2 bg-${(mode==='light')?'white':'#000090'} text-${(mode==='light')?'dark':'light'}`} style={{backgroundColor: (mode==='dark')?'#042743':'light',height: '100vh'}}>
      <Navbar title='Matrix' toggleMode = {mode} setMode = {setMode} showAlert = {showAlert}/>
      <RouterProvider router = {router}/>
    </div>
    </>
  );
}

export default App;
