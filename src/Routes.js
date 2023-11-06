import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Services } from "./pages/Services";
import { Spill } from "./pages/Spill";

export const SiteRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/spill" element={<Spill />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};
