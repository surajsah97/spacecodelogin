
import Loginx from './pages/Login/Login'
import React from 'react'
// import Login from './components/Login'
import { Route,Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Private from './Private';
import Public from './Public';
// import socketClient from 'socket.io-client';

const App = () => {
  // const socket = socketClient();
  return (
    <div>
      <ToastContainer/>
      <Switch>
  <Private exact path="/home" component={Home}/>

  <Public exact path="/login" component={Loginx}/>
    
  

</Switch>

       </div>
  )
}
export default App;