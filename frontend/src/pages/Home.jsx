import { useState } from "react";
import {
  Eye, ArrowRight, Heart, ChevronLeft, ChevronRight, Star, Quote,
} from "lucide-react";
import cataractImg from "../assets/img/cataract.png";
import glaucomaImg from "../assets/img/glaucoma.png";
import retinaImg from "../assets/img/retina-1.png";
import oculoplastyImg from "../assets/img/Oculoplasty.png";
import heroImg from "../assets/hero.png";

const heroFeatures = [
  { img: cataractImg, label: "Cataract Clinic" },
  { img: glaucomaImg, label: "Glaucoma" },
  { img: oculoplastyImg, label: "Oculoplasty" },
  { img: retinaImg, label: "Retina" },
];

const services = [
  {
    title: "Optical Store",
    desc: "The BW Lions Super Speciality Eye Hospital has an in-house Optical Store which stocks a wide range of frames, sunglasses, post-operation glasses, safety eyewear, contact lenses.",
  },
  {
    title: "Pharmacy",
    desc: "The pharmacy is located within the hospital premises and is well-stocked with the latest and best quality Ophthalmic drugs for a wide range of eye problems.",
  },
  {
    title: "Laboratory",
    desc: "The hospital has an in-house well-equipped Laboratory to conduct the necessary biochemical, hematological, and microbiological investigations needed for Eye Surgery.",
  },
];

const specialties = [
  "Cataract Clinic",
  "Contact Lens and Low Visual Aids",
  "Cornea and Refractive Surgery",
  "Glaucoma",
  "Oculoplasty",
  "Pediatric",
  "Uveitis",
  "Vitreo Retina",
  "Laboratory",
  "Opticals",
  "Pharmacy",
  "Eye Bank",
];

const doctors = [
  { name: "Dr. Momatha B", role: "Medical Director", qual: "MBBS, MS, Fellowship in GO, Fellow in Cornea" },
  { name: "Dr. Rekha Gyanchand", role: "Medical Director - Eye Bank", qual: "MBBS, MS, Fellowship in GO" },
  { name: "Dr. Rama Devi K.S", role: "Medical Superintendent", qual: "MBBS, DOMS, DNB" },
];

const courses = [
  { num: "02", icon: "🧬", title: "Fellowship Programs", desc: "The fellowship courses are offered to PG aspirants." },
  { num: "03", icon: "🩺", title: "B. Sc Optometry", desc: "B.Sc Degree in Optometry recognized by RGUHS." },
  { num: "04", icon: "🧠", title: "Diploma in Opthalmic Technology Course", desc: "A diploma in Opthalmic Technology is offered by the Paramedical Board." },
];

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
    <p className="!text-[16px] font-semibold text-secondary uppercase tracking-wide mb-2">{children}</p>
  );
}

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#FAF1DC]">
        <div className="max-w-[1320px] mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-primary mb-5">
              Experience World Class Eye Care
            </h1>
            <p className="text-gray-600 mb-7 max-w-md">
              Bangalore West Lions Super Speciality Eye Hospital which is a unit of
              Lions Club of Bangalore West Trust is the most trusted Non-Profit Eye
              Hospital running in Bangalore.
            </p>
            <div className="flex gap-6 flex-wrap">
              {heroFeatures.map(({ img, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center bg-white p-1">
                    <img src={img} alt={label} className="w-full h-full object-contain" />
                  </div>
                  <span className="!text-[13px] text-primary font-medium text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="Eye Care"
              className="w-full max-w-sm object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Appointment bar */}
      <section className="max-w-[1320px] mx-auto px-4">
        <div className="bg-white shadow-lg rounded-md -mt-7 relative z-10 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 !text-[16px] m-0">Book An Appointment</p>
          <p className="text-secondary font-semibold !text-[16px] m-0">Current Open</p>
        </div>
      </section>

      {/* Services cards */}
      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-md p-7 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                <Eye size={22} />
              </div>
              <h4 className="text-primary mb-3">{s.title}</h4>
              <p className="text-gray-500 !text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Improving quality of life */}
      <section className="max-w-[1320px] mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <SectionEyebrow>Lionseye</SectionEyebrow>
            <h2 className="text-primary mb-5">
              Improving The Quality Of Your Life Through Better Eye Care.
            </h2>
            <p className="text-gray-500 mb-6">
              Expert Professionals! World Class Services at a competitive price! Be assured
              of professional expertise in Eye Care, We serve thousands of people and have
              restored sight in their...
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium !text-[16px] hover:bg-primary/90">
              Book An Appointment
            </button>
          </div>
          <div className="flex justify-center">
            <Eye size={100} className="text-primary/20" />
          </div>
        </div>
      </section>

      {/* Vision Mission Specialties */}
      <section className="bg-primary text-white">
        <div className="max-w-[1320px] mx-auto px-4 py-16">
          <span className="block w-10 h-1 bg-secondary mb-4" />
          <h2 className="mb-10 max-w-2xl">
            BW Lions Eye Hospital Has Touched The Lives Of Patients by Providing World Class Eye Care
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h4 className="text-secondary mb-3">Vision</h4>
              <p className="text-gray-200 !text-[16px]">
                Fight blindness, gift sight to visually deprived people, and provide world-class
                eye care services at affordable rates.
              </p>
            </div>
            <div>
              <h4 className="text-secondary mb-3">Mission</h4>
              <p className="text-gray-200 !text-[16px]">
                Affordable quality eye care for all by providing cost-effective, equitable,
                ethical, cutting-edge technology consultations.
              </p>
            </div>
            <div>
              <h4 className="text-secondary mb-3">Specialties</h4>
              <p className="text-gray-200 !text-[16px] mb-2">
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
                key={sp}
                className="bg-white text-primary rounded-md px-5 py-6 font-medium !text-[16px] hover:bg-secondary hover:text-white transition-colors text-center"
              >
                {sp}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 !text-[16px] mt-8">
            We hope you will allow us to care for you and strive to be the first and best choice for eyecare.
          </p>
        </div>
      </section>

      {/* Eye Donation */}
      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center">
            <Eye size={70} className="text-primary/30" />
          </div>
          <div>
            <h3 className="text-secondary mb-4">Pass on your gift of Sight!</h3>
            <p className="text-gray-500 mb-6">
              The joy of sight is the gift to mankind. Not everyone has the privilege to see
              the world. You can make a difference by pledging to donate your eyes!
            </p>
            <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium !text-[16px] flex items-center gap-2">
              <Heart size={16} /> Pledge Now
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
                <Eye size={60} className="text-primary/20" />
              </div>
              <div className="p-5">
                <h5 className="text-primary mb-1">{doc.name}</h5>
                <p className="!text-[14px] text-secondary mb-1">{doc.role}</p>
                <p className="!text-[13px] text-gray-500">{doc.qual}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white px-7 py-3 rounded-md font-medium !text-[16px]">
          View More
        </button>
      </section>

      {/* Research & Education */}
      <section className="bg-primary text-white">
        <div className="max-w-[1320px] mx-auto px-4 pt-14 pb-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <SectionEyebrow>Caring For The Health Of You And Your Family</SectionEyebrow>
            <h2 className="mb-0">We Provide Research & Education</h2>
          </div>
          <p className="text-gray-300 !text-[16px]">
            The hospital offers various specialty and super specialty courses for students
            in the field of ophthalmology. There are hundreds of students who have
            completed their post-graduation and other specialty courses from this
            prestigious institution and are currently the leading practitioners settled in
            various parts of the state, country, and abroad. The following courses are
            offered by the institution.
          </p>
        </div>

        <div className="bg-[#22326A]">
          <div className="max-w-[1320px] mx-auto px-4 py-10 grid sm:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div key={c.num} className="bg-white text-primary rounded-md p-6 relative">
                <span className="text-3xl">{c.icon}</span>
                <span className="absolute top-5 right-5 text-3xl font-bold text-gray-200">{c.num}</span>
                <h5 className="mt-4 mb-2">{c.title}</h5>
                <p className="!text-[14px] text-gray-500 mb-4">{c.desc}</p>
                <a href="#" className="text-secondary font-medium inline-flex items-center gap-1 !text-[14px]">
                  View More <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiring Stories */}
      <section className="max-w-[1320px] mx-auto px-4 py-16">
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

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setTestimonialIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-28 h-20 bg-gray-100 rounded-md flex items-center justify-center">
                <Eye size={26} className="text-primary/20" />
              </div>
            ))}
          </div>
          <button
            onClick={() => setTestimonialIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-center mt-10">
          <button className="bg-primary text-white px-7 py-3 rounded-full font-medium !text-[16px] inline-flex items-center gap-2">
            View More <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Book Appointment + Donations */}
      <section className="bg-primary text-white">
        <div className="max-w-[1320px] mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white text-primary rounded-md p-7">
            <h4 className="text-secondary mb-2">Book An Appointment</h4>
            <p className="!text-[14px] text-gray-500 mb-5">
              Health is too precious to not pay attention to. Book your appointment for the
              best treatment! BW shall send you confirmation of the hospital. Kindly book an
              appointment by filling the form.
            </p>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <select className="border border-gray-300 rounded-md px-4 py-3 !text-[15px] sm:col-span-2">
                <option>Select Hospital</option>
              </select>
              <input type="date" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Select Date" />
              <input type="time" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Select Time" />
              <input type="text" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Name" />
              <input type="number" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Age" />
              <input type="tel" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Phone" />
              <input type="email" className="border border-gray-300 rounded-md px-4 py-3 !text-[15px]" placeholder="Email" />
              <textarea className="border border-gray-300 rounded-md px-4 py-3 !text-[15px] sm:col-span-2" rows={3} placeholder="Comments" />
              <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-medium !text-[16px] sm:col-span-2">
                Make Appointment
              </button>
            </form>
          </div>

          {/* Donations */}
          <div>
            <h3 className="mb-6">Helping Patients From Around the Globe!!</h3>
            <p className="text-gray-200 !text-[16px] mb-6">
              We accept payments by card, cheque, and direct bank transfer.
            </p>
            <button className="bg-secondary text-white px-6 py-3 rounded-md font-medium !text-[16px] flex items-center gap-2 mb-8">
              <Heart size={16} /> Make Donation
            </button>

            <p className="!text-[15px] text-gray-300 mb-2">
              All Donations are exempt under Section 80G of IT Act. 081T(D)BLR/80G/(R)670/AAATL0593F/lto(D)-1VOL2007-2008
            </p>
            <p className="!text-[15px] text-gray-300 mb-4">
              Permitted to receive INTERNATIONAL DONATIONS under FCRA. Approval number 8/20122/69(652)/85-FORAGI (26-10-1984).
            </p>
            <p className="!text-[15px] font-semibold text-secondary mb-2">DIRECT BANK TRANSFER</p>
            <p className="!text-[15px] text-gray-300">
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
