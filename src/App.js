import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import CVServiceLanding from "./Resume";
import Terms from "./Terms";
import Privacy from "./Privacy";
import ScrollToTop from "./ScrollToTop";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CVServiceLanding />} />
        <Route path="/payment-successful" element={<ThankYouPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
