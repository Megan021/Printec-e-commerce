import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import MainBlog from './pages/MainBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<MainBlog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
