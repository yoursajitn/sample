//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
