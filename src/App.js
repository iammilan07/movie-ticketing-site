import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Home from "./pages/home";
import Error from "./pages/Error";
import Announcement from "./components/anouncement";
import Leftpart from "./components/movieDetail/Leftpart";
import Login from "./pages/Login";
import Watch from "./pages/Watch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="*" element={<Error />} />
          <Route path="moviedetails" element={<Leftpart />} />
          <Route path="login" element={<Login />} />
          <Route path="watch" element={<Watch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
