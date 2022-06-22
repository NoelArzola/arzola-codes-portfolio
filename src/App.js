import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Tools from "./Tools";
import Bio from "./Bio";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Tools />
        <Bio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
