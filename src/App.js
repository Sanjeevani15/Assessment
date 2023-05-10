import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AadharPage from "./components/AadharPage";

function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AadharPage" element={<AadharPage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
