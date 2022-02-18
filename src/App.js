
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from "./components/Blog"
import Contacto from "./components/Contacto"
import Home from "./components/Home"


const App = () => {
  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="contacto" element={<Contacto/>}/>
      </Routes>

      <h1>App con routeo</h1>
     
     </BrowserRouter>
     </div>
  );
}

export default App;
