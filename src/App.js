import "./App.css";
import Nav from "./Nav";
import Services from "./Services";
import Home from "./Home";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
