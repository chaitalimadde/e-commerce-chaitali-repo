import './App.css';
import Navbar from './Components/Navbar';
import Routing from './routing';
import Register from './Components/Register';
import Login from './Components/Login';

const  App =()=> {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routing />
      {/* <Login /> */}
    </div>
  );
}

export default App;
