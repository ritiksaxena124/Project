import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";
import Practice from "./pages/Practice";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/practice" element={<Practice />} />

        <Route path="/contact" element={<Contactus />} />

        <Route path="/login" element={< Login/>} />

        <Route path="/signup" element={<Signup />} />

      </Routes>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;

const Wrapper = styled.div``
