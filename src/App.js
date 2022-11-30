import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Home from "./pages/home";
import Error from "./pages/Error";
import Announcement from "./components/anouncement";
import Moviedetails from "./movieDetail/Moviedetails";
import Login from "./Login";
import Watch from "./components/Watch";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="*" element={<Error />} />
          <Route path="moviedetails" element={<Moviedetails />} />
          <Route path="login" element={<Login />} />
          <Route path="watch" element={<Watch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
