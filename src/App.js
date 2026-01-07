import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import CVServiceLanding from "./Resume";
import Terms from "./Terms";
import Privacy from "./Privacy";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CVServiceLanding />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
