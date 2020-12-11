import './App.css';
import { FaRegUser } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
    <div className="nav">
    <ul>
    <li><FaRegUser size={25}/>Username</li>
    <li><img src="https://syllabus.codeyourfuture.io/img/logo.png" alt="cyf logo" width="200px" height="60px"/></li>
    <li><button className= "Star">Log out</button></li>
</ul>
    </div>
       
        <h2>Welcome to the class</h2>
        <p>You are now logged in </p>
        
      
      </div>
  )  
}

export default App;
