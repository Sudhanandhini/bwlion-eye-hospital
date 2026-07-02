import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VisionMission";
import Organization from "./pages/Organization";
import Leadership from "./pages/Leadership";
import Doctors from "./pages/Doctors";
import Specialties from "./pages/Specialties";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/specialties" element={<Specialties />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
