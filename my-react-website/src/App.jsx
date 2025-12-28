import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/index.jsx";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact.jsx";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/Blogs/BlogDetails";
// import Contact from "./pages/Contact";
import Contact from "./pages/Contact";

import FloatingContact from "./components/FloatingContact/FloatingContact";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
         {/* <Route path="/contact" element={<Contact />} /> */}
         <Route path="/portfolio" element={<Portfolio />} />
        
        
      </Routes>

       {/* Footer yahan */}
      <Footer />

      <FloatingContact />
      
    </BrowserRouter>
  );
}

export default App;
