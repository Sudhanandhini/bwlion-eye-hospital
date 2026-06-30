import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, ChevronDown, Menu, X, AlignJustify } from "lucide-react";
import { TwitterIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import bwLogo from "../assets/img/bw-logo-320-grey.png";
import nabhLogo from "../assets/img/Nabh-Logo-1.jpg";

const aboutLinks = ["Our Vision & Our Mission", "Organization", "Leadership", "Doctors"];
const specialtyLinks = [
  "Cataract Clinic", "Contact Lens and Low Visual Aids", "Cornea and Refractive Surgery",
  "Glaucoma", "Oculoplasty", "Pediatric", "Uveitis", "Vitreo Retina",
];
const knowledgeCenterLinks = ["Patient Education", "Blogs", "FAQs"];
const eventLinks = ["Upcoming Events", "Past Events", "Camps"];

function Dropdown({ label, items, isOpen, onToggle }) {
  return (
    <div className="relative" onMouseEnter={() => onToggle(label)} onMouseLeave={() => onToggle(null)}>
      <button className="px-3 py-2 text-[15px] font-medium text-white hover:text-secondary transition-colors flex items-center gap-1">
        {label} <ChevronDown size={13} />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full min-w-[240px] bg-gray-100 shadow-lg py-2 z-50">
          {items.map((item) => (
            <a key={item} href="#" className="block px-5 py-2 text-[15px] text-primary hover:bg-secondary/10 hover:text-secondary">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLink = (path, label) => {
    const active = location.pathname === path;
    return (
      <Link
        to={path}
        className={`px-3 py-2 text-[15px] font-medium text-white hover:text-secondary transition-colors ${active ? "bg-white/10" : ""}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="max-w-[1320px] mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="flex items-center gap-2">
              <Phone size={13} className="text-secondary" />
              Emergency Line: 080-22237628 / 080-22121255 / 080-22121253 / +91 86182 92449
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={13} className="text-secondary" />
              Location: JC Road, Bangalore
            </span>
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-secondary" />
              Mon - Sat: 8:30 am - 7:00 pm
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="hover:text-secondary"><TwitterIcon size={15} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-secondary"><FacebookIcon size={15} /></a>
            <a href="#" aria-label="Youtube" className="hover:text-secondary"><YoutubeIcon size={15} /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="max-w-[1320px] mx-auto px-4 py-2 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={bwLogo} alt="BW Lions Logo" className="w-14 h-14 object-contain rounded-full" />
            <div className="leading-tight">
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Bangalore West Lions</p>
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Super Speciality</p>
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Eye Hospital</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-primary rounded-sm flex-shrink-0">
            {navLink("/", "Home")}
            <Dropdown label="About Us" items={aboutLinks} isOpen={openMenu === "About Us"} onToggle={setOpenMenu} />
            <Dropdown label="Specialties" items={specialtyLinks} isOpen={openMenu === "Specialties"} onToggle={setOpenMenu} />
            <a href="#" className="px-3 py-2 text-[15px] font-medium text-white hover:text-secondary transition-colors">Academics</a>
            <Dropdown label="Knowledge Center" items={knowledgeCenterLinks} isOpen={openMenu === "Knowledge Center"} onToggle={setOpenMenu} />
            <Dropdown label="Events" items={eventLinks} isOpen={openMenu === "Events"} onToggle={setOpenMenu} />
            <a href="#" className="px-3 py-2 text-[15px] font-medium text-white hover:text-secondary transition-colors">Careers</a>
            {navLink("/contacts", "Contacts")}
          </nav>

          {/* Right: Eye Bank + NABH */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a href="#" className="flex items-center gap-1.5 text-secondary font-semibold text-[15px]">
              <AlignJustify size={17} className="text-secondary" />
              <span>Eye Bank</span>
            </a>
            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#1a4fa3] bg-[#1a4fa3]">
              <img src={nabhLogo} alt="NABH Accredited" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary px-4 py-3 flex flex-col">
            <Link to="/" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Home</Link>
            <a href="#" className="py-2 text-white text-[15px]">About Us</a>
            <a href="#" className="py-2 text-white text-[15px]">Specialties</a>
            <a href="#" className="py-2 text-white text-[15px]">Academics</a>
            <a href="#" className="py-2 text-white text-[15px]">Knowledge Center</a>
            <a href="#" className="py-2 text-white text-[15px]">Events</a>
            <a href="#" className="py-2 text-white text-[15px]">Careers</a>
            <Link to="/contacts" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Contacts</Link>
            <a href="#" className="py-2 text-secondary font-semibold text-[15px]">Eye Bank</a>
          </div>
        )}
      </div>
    </header>
  );
}
