import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, MapPin, Clock, ChevronDown, Menu, X, AlignJustify } from "lucide-react";
import { TwitterIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import bwLogo from "../assets/img/bw-logo.png";
import nabhLogo from "../assets/img/Nabh-Logo-1.jpg";

const aboutLinks = [
  { label: "Our Vision & Our Mission", path: "/vision-mission" },
  { label: "Organization", path: "/organization" },
  { label: "Leadership", path: "/leadership" },
  { label: "Doctors", path: "/doctors" },
];
const specialtyLinks = [
  { label: "Cataract", path: "/specialties" },
  { label: "Contact Lens Aids", path: "/specialties" },
  { label: "Glaucoma", path: "/specialties" },
  { label: "Oculoplasty", path: "/specialties" },
  { label: "Uveitis", path: "/specialties" },
  { label: "Vitreo Retina", path: "/specialties" },
  { label: "Cornea and Refractive Surgery", path: "/specialties" },
  { label: "Pediatric Eye Disorders", path: "/specialties" },
  { label: "Opticals", path: "/specialties" },
  { label: "Pharmacy", path: "/specialties" },
  { label: "Eye Bank", path: "/specialties" },
  { label: "Laboratory", path: "/specialties" },
  { label: "Community Ophthalmology (Social Outreach)", path: "/specialties" },
];
const knowledgeCenterLinks = [
  { label: "Cataract", path: "/cataract" },
  { label: "Glaucoma", path: "/glaucoma" },
  { label: "Uveitis", path: "/uveitis" },
  { label: "Retina", path: "/retina" },
  { label: "Oculoplasty", path: "/oculoplasty" },
  { label: "Pediatric Eye Disorders", path: "/pediatric-eye-disorders" },
];
const eventLinks = [{ label: "Gallery", path: "/gallery" }];

function Dropdown({ label, labelPath, items, isOpen, onToggle, wide }) {
  const labelClassName = "px-3 py-2 text-[18px] font-bold text-primary hover:text-secondary transition-colors flex items-center gap-1";
  return (
    <div className="relative" onMouseEnter={() => onToggle(label)} onMouseLeave={() => onToggle(null)}>
      {labelPath ? (
        <Link to={labelPath} className={labelClassName}>
          {label} <ChevronDown size={13} />
        </Link>
      ) : (
        <button className={labelClassName}>
          {label} <ChevronDown size={13} />
        </button>
      )}
      {isOpen && (
        <div
          className={
            wide
              ? "absolute left-0 top-full w-[820px] max-w-[90vw] bg-gray-100 shadow-lg p-6 columns-4 gap-x-10 z-50"
              : "absolute left-0 top-full min-w-[240px] bg-gray-100 shadow-lg py-2 z-50"
          }
        >
          {items.map((item) => {
            const label = typeof item === "string" ? item : item.label;
            const path = typeof item === "string" ? null : item.path;
            const className = wide
              ? "block py-2 text-[18px] font-bold text-primary hover:text-secondary break-inside-avoid"
              : "block px-5 py-2 text-[18px] font-bold text-primary hover:bg-secondary/10 hover:text-secondary";
            return path ? (
              <Link key={label} to={path} className={className}>{label}</Link>
            ) : (
              <a key={label} href="#" className={className}>{label}</a>
            );
          })}
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
        className={`px-3 py-2 text-[18px] font-bold text-primary hover:text-secondary transition-colors ${active ? "text-secondary" : ""}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="max-w-[1500px] mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-2 text-sm">
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
        <div className="max-w-[1500px] mx-auto px-4 py-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={bwLogo} alt="BW Lions Logo" className="w-[170px] sm:w-[220px] lg:w-[290px] h-auto object-contain rounded-full" />
            {/* <div className="leading-tight">
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Bangalore West Lions</p>
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Super Speciality</p>
              <p className="!text-[13px] font-bold text-primary uppercase m-0 tracking-wide">Eye Hospital</p>
            </div> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-shrink-0 ">
            {navLink("/", "Home")}
            <Dropdown label="About Us" items={aboutLinks} isOpen={openMenu === "About Us"} onToggle={setOpenMenu} />
            <Dropdown label="Specialties" labelPath="/specialties" items={specialtyLinks} isOpen={openMenu === "Specialties"} onToggle={setOpenMenu} />
            {navLink("/academics", "Academics")}
            <Dropdown label="Knowledge Center" items={knowledgeCenterLinks} isOpen={openMenu === "Knowledge Center"} onToggle={setOpenMenu} />
            <Dropdown label="Events" labelPath="/gallery" items={eventLinks} isOpen={openMenu === "Events"} onToggle={setOpenMenu} />
            {navLink("/career", "Careers")}
            {navLink("/contacts", "Contacts")}
          </nav>

          {/* Right: Eye Bank + NABH */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a href="https://lionsinternationaleyebankbangalore.in/" className="flex items-center gap-1.5 text-secondary font-semibold text-[18px]">
              <AlignJustify size={17} className="text-secondary" />
              <span>Eye Bank</span>
            </a>
            <div className="w-20 h-auto rounded-xl overflow-hidden ">
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
          <div className="lg:hidden  px-4 py-3 flex flex-col">
            <Link to="/" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Home</Link>
            <span className="py-2  text-[15px] font-semibold">About Us</span>
            {aboutLinks.map(({ label, path }) => (
              <Link key={label} to={path} className="py-2 pl-4 text-white/80 text-[14px]" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link to="/specialties" className="py-2 text-white text-[15px] font-semibold" onClick={() => setMobileOpen(false)}>Specialties</Link>
            {specialtyLinks.map(({ label, path }) => (
              <Link key={label} to={path} className="py-2 pl-4 text-white/80 text-[14px]" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link to="/academics" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Academics</Link>
            <span className="py-2  text-[15px] font-semibold">Knowledge Center</span>
            {knowledgeCenterLinks.map(({ label, path }) => (
              <Link key={label} to={path} className="py-2 pl-4 text-white/80 text-[14px]" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
            <Link to="/gallery" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Events</Link>
            <Link to="/career" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link to="/contacts" className="py-2 text-white text-[15px]" onClick={() => setMobileOpen(false)}>Contacts</Link>
            <a href="https://lionsinternationaleyebankbangalore.in/" className="py-2 text-secondary font-semibold text-[15px]">Eye Bank</a>
          </div>
        )}
      </div>
    </header>
  );
}
