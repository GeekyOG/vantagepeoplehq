import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import CVServiceLanding from "./pages/Resume";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ScrollToTop from "./utils/ScrollToTop";
import ThankYouPage from "./components/ThankYouPage";
import PartnershipPage from "./pages/PartnerShip";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CVServiceLanding />} />
        <Route path="/partnership/nysc-corpers" element={<PartnershipPage />} />
        <Route path="/payment-successful" element={<ThankYouPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
