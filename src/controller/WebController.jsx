import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Works from "../components/Works";
import Navbar from "../components/NavBar";

const WebController = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </>
  )
}

export default WebController
