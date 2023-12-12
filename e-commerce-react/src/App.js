import './App.css';
import Navbar from './Components/Navbar';
import Routing from './routing';
import Register from './Components/Register';
import Login from './Components/Login';

const  App =()=> {
  return (
    <div className="App">
      {/* <Navbar /> */}
      
      {/* <Login /> */}

      <div>
      <Navbar />
      </div>
      <div>
      <Routing />
      </div>
    </div>
  );
}

export default App;
