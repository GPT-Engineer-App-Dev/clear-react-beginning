import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx"; // Import the Login page
import Censorship from "./pages/Censorship.jsx"; // Import the Censorship page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/login" element={<Login />} /> {/* Add the login route */}
      <Route path="/censorship" element={<Censorship />} /> {/* Add the censorship route */}
      </Routes>
    </Router>
  );
}

export default App;
