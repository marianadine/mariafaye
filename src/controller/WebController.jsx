import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Works from "../components/Works";

const WebController = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
      </Routes>
  )
}

export default WebController
