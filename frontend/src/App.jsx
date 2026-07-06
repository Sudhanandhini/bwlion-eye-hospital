import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SitePopup from "./components/SitePopup";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import VisionMission from "./pages/VisionMission";
import Organization from "./pages/Organization";
import Leadership from "./pages/Leadership";
import Doctors from "./pages/Doctors";
import Specialties from "./pages/Specialties";
import Academics from "./pages/Academics";
import Retina from "./pages/Retina";
import Cataract from "./pages/Cataract";
import PediatricEyeDisorders from "./pages/PediatricEyeDisorders";
import Oculoplasty from "./pages/Oculoplasty";
import Uveitis from "./pages/Uveitis";
import Glaucoma from "./pages/Glaucoma";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import InsuranceClaim from "./pages/InsuranceClaim";
import DnbProgram from "./pages/DnbProgram";
import FellowshipPrograms from "./pages/FellowshipPrograms";
import BScOptometry from "./pages/BScOptometry";
import DiplomaOphthalmicTechnology from "./pages/DiplomaOphthalmicTechnology";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import RequireAdminAuth from "./admin/RequireAdminAuth";
import DoctorsManager from "./admin/DoctorsManager";
import GalleryManager from "./admin/GalleryManager";
import LeadershipManager from "./admin/LeadershipManager";
import CareerManager from "./admin/CareerManager";
import PopupManager from "./admin/PopupManager";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      <SitePopup />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <RequireAdminAuth>
              <AdminLayout />
            </RequireAdminAuth>
          }
        >
          <Route index element={<Navigate to="doctors" replace />} />
          <Route path="doctors" element={<DoctorsManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route
            path="leadership"
            element={
              <RequireAdminAuth roles={["admin"]}>
                <LeadershipManager />
              </RequireAdminAuth>
            }
          />
          <Route path="career" element={<CareerManager />} />
          <Route
            path="popup"
            element={
              <RequireAdminAuth roles={["admin"]}>
                <PopupManager />
              </RequireAdminAuth>
            }
          />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/retina" element={<Retina />} />
          <Route path="/cataract" element={<Cataract />} />
          <Route path="/pediatric-eye-disorders" element={<PediatricEyeDisorders />} />
          <Route path="/oculoplasty" element={<Oculoplasty />} />
          <Route path="/uveitis" element={<Uveitis />} />
          <Route path="/glaucoma" element={<Glaucoma />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/insurance-claim" element={<InsuranceClaim />} />
          <Route path="/dnb-program" element={<DnbProgram />} />
          <Route path="/fellowship-programs" element={<FellowshipPrograms />} />
          <Route path="/bsc-optometry" element={<BScOptometry />} />
          <Route path="/diploma-ophthalmic-technology" element={<DiplomaOphthalmicTechnology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
