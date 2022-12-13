import TopBar from "./components/topbar/TopBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AnimatedRoute from "./Route/AnimatedRoute";

function App() {
  return (
    <Router>
      
      <TopBar />
      <AnimatedRoute />
      <Footer />
    </Router>
  );
}

export default App;
