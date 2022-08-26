import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      <h1>Navbar</h1>
    
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/" element={<Home/>}/>
         <Route path = "/post"element={<Post/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
