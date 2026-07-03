import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Eye, ArrowRight, Heart, ChevronLeft, ChevronRight, Star, Quote,
} from "lucide-react";
import cataractImg from "../assets/img/cataract.png";
import glaucomaImg from "../assets/img/glaucoma.png";
import retinaImg from "../assets/img/retina-1.png";
import oculoplastyImg from "../assets/img/Oculoplasty.png";
import heroImg from "../assets/img/banner-1.jpg";
import opticalStoreImg from "../assets/img/1.png";
import pharmacyImg from "../assets/img/2.png";
import laboratoryImg from "../assets/img/3.png";
import lionseyeLogo from "../assets/img/download.png";
import expertImg from "../assets/img/person.png";
import cataractPhoto from "../assets/img/Cataract.jpg";
import contactLensPhoto from "../assets/img/Contact-Lens-and-Visual-Aids.jpg";
import corneaPhoto from "../assets/img/Cornea.jpg";
import glaucomaPhoto from "../assets/img/Glaucoma-1.jpg";
import oculoplastyPhoto from "../assets/img/Oculoplasty.jpg";
import pediatricPhoto from "../assets/img/Paediatric-and-Squint.jpg";
import uveitisPhoto from "../assets/img/uveitis.jpg";
import retinaPhoto from "../assets/img/retina.webp";
import laboratoryPhoto from "../assets/img/Laboratory.jpg";
import opticalsPhoto from "../assets/img/Opticals.jpg";
import pharmacyPhoto from "../assets/img/West-Lions-Pharma.jpg";
import eyeBankPhoto from "../assets/img/Eye-Bank.jpg";
import boyReadingBookVideo from "../assets/img/boy-reading-book.mov";
import drMomathaImg from "../assets/img/dr.mamatha.jpg";
import drRekhaImg from "../assets/img/Dr.-Rekha-Gyanchand.jpg";
import drRamaDeviImg from "../assets/img/dr.Rama-Devi.jpg";

import heroImg1 from "../assets/img/ptt_default.jpg"
 
const heroFeatures = [
  { img: cataractImg, label: "Cataract Clinic" },
  { img: glaucomaImg, label: "Glaucoma" },
  { img: oculoplastyImg, label: "Cornea" },
  { img: retinaImg, label: "Retina" },
];

const services = [
  {
    title: "Optical Store",
    desc: "The BW Lions Super Speciality Eye Hospital has an in-house Optical Store which stocks a wide range of frames, sunglasses, post-operation glasses, safety eyewear, contact lenses.",
    img: opticalStoreImg,
  },
  {
    title: "Pharmacy",
    desc: "The pharmacy is located within the hospital premises and is well-stocked with the latest and best quality Ophthalmic drugs for a wide range of eye problems.",
    img: pharmacyImg,
  },
  {
    title: "Laboratory",
    desc: "The hospital has an in-house well-equipped Laboratory to conduct the necessary biochemical, hematological, and microbiological investigations needed for Eye Surgery.",
    img: laboratoryImg,
  },
];

const specialties = [
  { label: "Cataract Clinic", img: cataractPhoto },
  { label: "Contact Lens and Low Visual Aids", img: contactLensPhoto },
  { label: "Cornea and Refractive Surgery", img: corneaPhoto },
  { label: "Glaucoma", img: glaucomaPhoto },
  { label: "Oculoplasty", img: oculoplastyPhoto },
  { label: "Pediatric", img: pediatricPhoto },
  { label: "Uveitis", img: uveitisPhoto },
  { label: "Vitreo Retina", img: retinaPhoto },
  { label: "Laboratory", img: laboratoryPhoto },
  { label: "Opticals", img: opticalsPhoto },
  { label: "Pharmacy", img: pharmacyPhoto },
  { label: "Eye Bank", img: eyeBankPhoto },
];

const doctors = [
  { name: "Dr. Momatha B", role: "Medical Director", qual: "MBBS, MS, Fellowship in GO, Fellow in Cornea", img: drMomathaImg },
  { name: "Dr. Rekha Gyanchand", role: "Medical Director - Eye Bank", qual: "MBBS, MS, Fellowship in GO", img: drRekhaImg },
  { name: "Dr. Rama Devi K.S", role: "Medical Superintendent", qual: "MBBS, DOMS, DNB", img: drRamaDeviImg },
];

const courses = [
  { num: "01", icon: "🏅", title: "Diplomate of National Board DNB", desc: "The DNB program is affiliated with the NBE." },
  { num: "02", icon: "🧬", title: "Fellowship Programs", desc: "The fellowship courses are offered to PG aspirants." },
  { num: "03", icon: "🩺", title: "B. Sc Optometry", desc: "B.Sc Degree in Optometry recognized by RGUHS." },
  { num: "04", icon: "🧠", title: "Diploma in Opthalmic Technology Course", desc: "A diploma in Opthalmic Technology is offered by the Paramedical Board." },
];

const currentOpenings = ["Current Openings in JC Road", "Current Openings in Chintamani"];

const testimonials = [
  {
    text: "Their doctors include highly qualified practitioners who come from a range of backgrounds and bring with them a diversity of skills and special interests. They also have registered nurses on staff who are available to triage any urgent matters, and the administration and support staff all have exceptional people skills.",
  },
  {
    text: "The Hospital has highly qualified and experienced Doctors who understand the needs of the patient and provide quality eye care compassionately through their healing hand. They are ably assisted by the qualified support staff who ensure the delivery of quality services.",
  },
];

function SectionEyebrow({ children }) {
  return (
    <p className="!text-[20px] font-semibold text-secondary uppercase tracking-wide mb-2">{children}</p>
  );
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [galleryThumbs, setGalleryThumbs] = useState([]);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const visibleThumbs = galleryThumbs.length
    ? [0, 1, 2, 3].map((offset) => galleryThumbs[(galleryIdx + offset) % galleryThumbs.length])
    : [];

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((images) => setGalleryThumbs(images.map((img) => img.image_path)));
  }, []);

  useEffect(() => {
    if (galleryThumbs.length === 0) return;
    const timer = setInterval(() => {
      setGalleryIdx((i) => (i + 1) % galleryThumbs.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [galleryThumbs.length]);

  const [courseIdx, setCourseIdx] = useState(0);
  const visibleCourses = [0, 1, 2].map((offset) => courses[(courseIdx + offset) % courses.length]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCourseIdx((i) => (i + 1) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const [appointmentForm, setAppointmentForm] = useState({
    hospital: "", date: "", time: "", name: "", age: "", phone: "", email: "", comments: "",
  });
  const [appointmentStatus, setAppointmentStatus] = useState("idle");
  const [appointmentError, setAppointmentError] = useState("");

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((f) => ({ ...f, [name]: value }));
  };

  const submitAppointment = async (e) => {
    e.preventDefault();
    setAppointmentStatus("sending");
    setAppointmentError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setAppointmentStatus("success");
      setAppointmentForm({ hospital: "", date: "", time: "", name: "", age: "", phone: "", email: "", comments: "" });
    } catch (err) {
      setAppointmentStatus("error");
      setAppointmentError(err.message);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="bg-[#FAF1DC] bg-no-repeat bg-cover bg-center md:bg-right min-h-[560px] md:h-[700px] flex items-center py-12 md:py-0"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="max-w-[1320px] mx-auto px-4 w-full">
          <div className="max-w-lg bg-[#FAF1DC]/90 md:bg-transparent rounded-lg p-5 sm:p-6 md:p-0">
            <h1 className="text-primary !mb-8 leading-tight font-semibold text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Experience World Class Eye Care
            </h1>
            <p className="text-gray-600 mb-7 max-w-md font-semibold">
              Bangalore West Lions Super Speciality Eye Hospital which is a unit of
              Lions Club of Bangalore West Trust is the most trusted Non-Profit Eye
              Hospital running in Bangalore.
            </p>
            <div className="flex gap-6 flex-wrap">
              {heroFeatures.map(({ img, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center bg-white p-1">
                    <img src={img} alt={label} className="w-[60px] h-full object-contain" />
                  </div>
                  <span className="!text-[13px] text-primary font-medium text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment bar */}
      <section className="max-w-[1320px] mx-auto px-4">
        <div className="bg-white shadow-lg rounded-md -mt-7 relative z-10 py-5 overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee hover:[animation-play-state:paused]">
            {[...currentOpenings, ...currentOpenings].map((text, i) => (
              <Link
                key={i}
                to="/career"
                className="text-secondary font-semibold !text-[28px] whitespace-nowrap px-8 hover:underline"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services cards */}
      <section className="max-w-[1320px] mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-md p-12 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-4 p-4">
                <img src={s.img} alt={s.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="text-primary mb-3">{s.title}</h4>
              <p className="text-gray-500 !text-[18px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Improving quality of life */}
      <section className="max-w-[1320px] mx-auto px-4 pb-20">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            {/* <SectionEyebrow>Lionseye</SectionEyebrow> */}
            <h2 className="text-secondary !mb-0">
              Improving The Quality Of Your Life Through Better Eye Care.
            </h2>
          </div>
          <img src={lionseyeLogo} alt="Lionseye" className="h-20 object-contain flex-shrink-0" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex gap-4">
            <img src={expertImg} alt="Expert Professionals" className="w-16 h-16 object-contain flex-shrink-0" />
            <p className="text-primary font-semibold !text-[18px]">
              Expert Professionals! World Class Services at a competitive price! With more than
              4 decades of professional expertise in Eye Care, We serve thousands of people and
              have restored sight in them…
            </p>
          </div>
          <p className="text-gray-500">
            Bangalore West Lions Super Speciality Eye Hospital is the most trusted Non-Profit Eye
            Hospital running in Bangalore which is a unit of the Lions club of Bangalore West Trust.
            The Bangalore West Lions Super Speciality Eye Hospital was established on 30th June 1984
            as part of the Lions Club of Bangalore West Trust.
          </p>
        </div>
        <button className="bg-primary text-white px-7 py-3 rounded-full font-medium !text-[20px] hover:bg-primary/90 mt-8 inline-flex items-center gap-2">
          Book An Appointment <ArrowRight size={18} />
        </button>
      </section>

      {/* Vision Mission Specialties */}
      <section className="bg-primary text-white">
        <div className="max-w-[1320px] mx-auto px-4 py-20">
          <span className="block w-10 h-1 bg-secondary mb-4" />
          <h2 className="mb-10 max-w-2xl">
            BW Lions Eye Hospital Has Touched The Lives Of Patients by Providing World Class Eye Care
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h4 className="text-secondary mb-3">Vision</h4>
              <p className="text-gray-200 !text-[20px]">
                Fight blindness, gift sight to visually deprived people, and provide world-class
                eye care services at affordable rates.
              </p>
            </div>
            <div>
              <h4 className="text-secondary mb-3">Mission</h4>
              <p className="text-gray-200 !text-[20px]">
                Affordable quality eye care for all by providing cost-effective, equitable,
                ethical, cutting-edge technology consultations.
              </p>
            </div>
            <div>
              <h4 className="text-secondary mb-3">Specialties</h4>
              <p className="text-gray-200 !text-[20px] mb-2">
                We have been advancing with the latest technological trends to impart the
                best service at an affordable cost. We serve all kinds of Eye Disorders
                with the correction of refractive errors to complex eye surgeries.
              </p>
              <a href="#" className="text-secondary font-medium inline-flex items-center gap-1">
                View More <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((sp) => (
              <div
                key={sp.label}
                className="group relative h-52 rounded-md overflow-hidden bg-white"
              >
                <img
                  src={sp.img}
                  alt={sp.label}
                  className="absolute inset-0 w-full h-full object-cover scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative h-full flex items-center justify-center group-hover:items-end group-hover:justify-start px-5 py-6 text-center group-hover:text-left transition-all duration-300">
                  <span className="text-primary group-hover:text-white font-medium !text-[20px] pr-2 group-hover:pb-2">
                    {sp.label}
                  </span>
                </div>
                <span className="absolute right-5 bottom-5 w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 !text-[20px] mt-8">
            We hope you will allow us to care for you and strive to be the first and best choice for eyecare.
          </p>
        </div>
      </section>

      {/* Eye Donation */}
      <section className="max-w-[1320px] mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <video
            src={boyReadingBookVideo}
            className="w-full rounded-md aspect-video object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div>
            <h3 className="text-secondary mb-4">Pass on your gift of Sight!</h3>
            <p className="text-gray-500 mb-6">
              The joy of sight is the gift to mankind. Not everyone has the privilege to see
              the world. You can make a difference by pledging to donate your eyes!
            </p>
            <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium !text-[20px] flex items-center gap-2">
              <Heart size={20} /> Pledge Now
            </button>
          </div>
        </div>
      </section>

      {/* Meet our doctors */}
      <section className="max-w-[1320px] mx-auto px-4 py-10 text-center">
        <h2 className="text-primary mb-3">Meet Our Doctors</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Our administration and support staff all have exceptional people skills and trained
          to assist you with all medical enquiries.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {doctors.map((doc) => (
            <div key={doc.name} className="border border-gray-200 rounded-md overflow-hidden text-left">
              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
                <img src={doc.img} alt={doc.name} className="w-full h-[400px] object-cover" />
              </div>
              <div className="p-5">
                <h5 className="text-primary mb-1">{doc.name}</h5>
                <p className="!text-[14px] text-secondary mb-1">{doc.role}</p>
                <p className="!text-[13px] text-gray-500">{doc.qual}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white px-7 py-3 rounded-md font-medium !text-[20px]">
         <a href="/doctors" className="text-white hover:text-primary">
            View More
          </a>
        </button>
      </section>

      {/* Research & Education */}
      <section
        className="relative bg-primary text-white"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-[1320px] mx-auto px-4 pt-14 pb-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <SectionEyebrow>Caring For The Health Of You And Your Family</SectionEyebrow>
            <h2 className="mb-0">We Provide Research & Education</h2>
          </div>
          <p className="text-gray-300 !text-[20px]">
            The hospital offers various specialty and super specialty courses for students
            in the field of ophthalmology. There are hundreds of students who have
            completed their post-graduation and other specialty courses from this
            prestigious institution and are currently the leading practitioners settled in
            various parts of the state, country, and abroad. The following courses are
            offered by the institution.
          </p>
        </div>

        <div className="bg-primary relative" >
          <div className="max-w-[1320px] mx-auto px-4 py-10 relative">
            <button
              onClick={() => setCourseIdx((i) => (i === 0 ? courses.length - 1 : i - 1))}
              aria-label="Previous course"
              className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full text-secondary hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => setCourseIdx((i) => (i + 1) % courses.length)}
              aria-label="Next course"
              className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full text-secondary hover:text-white"
            >
              <ChevronRight size={22} />
            </button>

            <div className="grid sm:grid-cols-3 gap-6">
              {visibleCourses.map((c) => (
                <div key={c.num} className="bg-white text-primary rounded-md p-6 relative ">
                  <span className="text-5xl">{c.icon}</span>
                  <span className="absolute top-5 right-5 text-3xl font-bold text-gray-200 text-[60px]">{c.num}</span>
                  <h5 className="mt-4 mb-2 !text-[24px]">{c.title}</h5>
                  <p className="!text-[16px] text-gray-500 mb-4">{c.desc}</p>
                  <a href="#" className="text-secondary font-medium inline-flex items-center gap-1 !text-[14px]">
                    View More <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              {courses.map((c, i) => (
                <button
                  key={c.num}
                  onClick={() => setCourseIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === courseIdx ? "bg-secondary" : "bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspiring Stories */}
      <section className="max-w-[1320px] mx-auto px-4 py-20">
        <h2 className="text-secondary text-center mb-10">Inspiring Stories!</h2>

        <div className="max-w-3xl mx-auto text-center mb-10 relative">
          <div className="flex justify-center gap-1 text-secondary mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <Quote className="text-gray-200 mx-auto mb-3" size={32} />
          <p className="text-gray-500 italic">
            {testimonials[testimonialIdx].text}
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6 px-2">
          <button
            onClick={() => setTestimonialIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white flex-shrink-0"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2 sm:gap-3 min-w-0">
            {visibleThumbs.map((src, i) => (
              <div
                key={`${galleryIdx}-${i}`}
                className={`${i === 0 ? "" : "hidden sm:block"} w-[250px] h-auto sm:w-[70px] sm:h-auto md:w-[250px] md:h-auto rounded-md overflow-hidden flex-shrink-0`}
              >
                <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button
            onClick={() => setTestimonialIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white flex-shrink-0"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-white px-7 py-3 rounded-full font-medium !text-[20px] inline-flex items-center gap-2">
          <a href="/gallery" className="text-white hover:text-primary">
            View More
          </a>
          </button>
        </div>
      </section>

      {/* Book Appointment + Donations */}
      <section className="relative bg-primary text-white" style={{ backgroundImage: `url(${heroImg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-[1320px] mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white text-primary rounded-md p-7 min-w-0">
            <h4 className="text-secondary mb-2">Book An Appointment</h4>
            <p className="!text-[14px] text-gray-500 mb-5">
              Health is too precious to not pay attention to. Book your appointment for the
              best treatment! BW shall send you confirmation of the hospital. Kindly book an
              appointment by filling the form.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={submitAppointment}>
              {appointmentStatus === "success" && (
                <p className="sm:col-span-2 text-green-600 !text-[14px]">
                  Thank you! Your appointment request has been sent.
                </p>
              )}
              {appointmentStatus === "error" && (
                <p className="sm:col-span-2 text-red-600 !text-[14px]">{appointmentError}</p>
              )}
              <select
                name="hospital"
                value={appointmentForm.hospital}
                onChange={handleAppointmentChange}
                className="border border-gray-300 rounded-md px-4 py-3 !text-[15px] sm:col-span-2"
              >
                <option value="">Select Hospital</option>
                <option>Bangalore </option>
                <option>Kollegala</option>
                
              </select>
              <input type="date" name="date" value={appointmentForm.date} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Select Date" />
              <input type="time" name="time" value={appointmentForm.time} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Select Time" />
              <input type="text" name="name" value={appointmentForm.name} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Name" required />
              <input type="number" name="age" value={appointmentForm.age} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Age" />
              <input type="tel" name="phone" value={appointmentForm.phone} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Phone" required />
              <input type="email" name="email" value={appointmentForm.email} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Email" />
              <textarea name="comments" value={appointmentForm.comments} onChange={handleAppointmentChange} className="border border-gray-300 rounded-md px-4 py-3 !text-[15px] sm:col-span-2" rows={3} placeholder="Comments" />
              <button
                type="submit"
                disabled={appointmentStatus === "sending"}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium !text-[20px] sm:col-span-2 disabled:opacity-60"
              >
                {appointmentStatus === "sending" ? "Sending..." : "Make Appointment"}
              </button>
            </form>
          </div>

          {/* Donations */}
          <div className="min-w-0">
            <h3 className="mb-6">Helping Patients From Around the Globe!!</h3>
            <p className="text-gray-200 !text-[20px] mb-6">
              We accept payments by card, cheque, and direct bank transfer.
            </p>
            <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium !text-[20px] flex items-center gap-2 mb-8">
              <Heart size={20} /> Make Donation
            </button>

            <p className="!text-[15px] text-gray-300 mb-2 break-words">
              All Donations are exempt under Section 80G of IT Act. 081T(D)BLR/80G/(R)670/AAATL0593F/lto(D)-1VOL2007-2008
            </p>
            <p className="!text-[15px] text-gray-300 mb-4 break-words">
              Permitted to receive INTERNATIONAL DONATIONS under FCRA. Approval number 8/20122/69(652)/85-FORAGI (26-10-1984).
            </p>
            <p className="!text-[15px] font-semibold text-secondary mb-2">DIRECT BANK TRANSFER</p>
            <p className="!text-[15px] text-gray-300 break-words">
              ACCOUNT NUMBER: 1420/1031120<br />
              BANK NAME: Korus Mahindra Bank<br />
              IFSC CODE: KKBK0000958<br />
              SWIFT CODE: KKBKINBBCYC<br />
              OR<br />
              ACCOUNT NUMBER: 12510400000009<br />
              BANK NAME: Bank of Baroda<br />
              IFSC CODE: BARB0DBGUUX
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
