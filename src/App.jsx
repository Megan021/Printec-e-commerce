import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Landing from './pages/Landing';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import MainBlog from './pages/MainBlog';
import ProductDetail from './pages/ProductDetail';
import { useEffect } from 'react';
import BlogDetail from './pages/BlogDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/product-detail' element={<ProductDetail />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog-detail' element={<BlogDetail />} />
          <Route path='/blog' element={<MainBlog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
