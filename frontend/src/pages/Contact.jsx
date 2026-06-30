import { useState } from "react";
import {
  MapPin, Phone, MessageCircle, Mail, ArrowRight,
  User, ChevronDown, Calendar, Clock,
} from "lucide-react";
import logo from "../assets/img/download.png";

const locations = [
  {
    name: "Bangalore West Lions Super Speciality Eye Hospital",
    address: "Off JC Road, Bangalore - 560002",
    contact: "080-22237628/080-22121255/080-22121253",
    mobile: "+91-70199-42982 ,+91-86182-92449",
  },
  {
    name: "Bangalore West Lions Sri Vidyasagar Oswal Institute of Ophthalmology",
    address: "JP Nagar, Bangalore - 560078",
    contact: "080-26852434/080-43714301",
  },
  {
    name: "Lions Eye Hospital, Kollegala",
    desc: "The - satellite hospital in Kollegala Taluk in Chamarjanagar District caters to local villages and neighboring taluks and is fully equipped with OPD, Pharmacy, and Optical Store.",
  },
  {
    name: "B W Lions Super Speciality Eye Hospital, Chintamani",
    desc: "A unit of the lions club of Bangalore West trust In collaboration with Chintamani lions service trust. Booragamakalahalli, Chintamani. Chikkaballapur- 563125.",
  },
];

const peripheralCentres = ["Devanahalli", "Doddalballapur", "Dommasandra", "Gauribidanur."];

const quickContacts = [
  { icon: Phone, text: "080-22121253", href: "tel:08022121253" },
  { icon: Phone, text: "080-22121255", href: "tel:08022121255" },
  { icon: Phone, text: "080-22237628", href: "tel:08022237628" },
  { icon: MessageCircle, text: "+91-70199-42982", href: "tel:+917019942982" },
  { icon: MessageCircle, text: "+91-86182-92449", href: "tel:+918618292449" },
];

function PinIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-1">
      <MapPin size={18} className="text-white" />
    </div>
  );
}

function InputWithIcon({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      )}
      <input
        {...props}
        className={`w-full border border-gray-300 rounded-md py-3 !text-[15px] text-gray-700 focus:outline-none focus:border-primary ${Icon ? "pl-9 pr-4" : "px-4"}`}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    hospital: "", date: "", time: "", name: "", age: "", phone: "", email: "", comments: "",
  });

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <main>
      {/* Page Banner */}
      <section className="bg-[#FAF1DC]">
        <div className="max-w-[1320px] mx-auto px-4 py-10 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-primary mb-3">Contact us</h1>
            <div className="flex items-center gap-2 !text-[15px]">
              <a href="/" className="text-gray-500 hover:text-secondary">Home</a>
              <span className="text-secondary">›</span>
              <span className="text-secondary font-semibold">Contact Us</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center select-none">
            {/* <div className="w-24 h-12 border-[5px] border-primary/40 rounded-full mb-1" /> */}
            <img src={logo} alt="LionsEye Logo" className="w-[150px] h-auto object-contain" />
            {/* <p className="text-primary font-extrabold text-3xl uppercase tracking-[6px] m-0">LionsEye</p> */}
          </div>
        </div>
      </section>

      {/* Hospital Locations */}
      <section className="py-14">
        <div className="max-w-[1320px] mx-auto px-4">
          <h2 className="text-secondary text-center mb-12">Our Hospital Locations</h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {locations.map((loc) => (
              <div key={loc.name} className="flex gap-4">
                <PinIcon />
                <div>
                  <h4 className="text-primary mb-2">{loc.name}</h4>
                  {loc.address && (
                    <p className="!text-[15px] text-gray-600 mb-1">{loc.address}</p>
                  )}
                  {loc.contact && (
                    <p className="!text-[15px] text-gray-600 mb-1">Contact: {loc.contact}</p>
                  )}
                  {loc.mobile && (
                    <p className="!text-[15px] text-gray-600">Mobile: {loc.mobile}</p>
                  )}
                  {loc.desc && (
                    <p className="!text-[15px] text-gray-600">{loc.desc}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Peripheral Vision Centres */}
            <div className="flex gap-4">
              <PinIcon />
              <div>
                <h4 className="text-primary mb-3">Peripheral Vision Centres</h4>
                <ol className="space-y-1">
                  {peripheralCentres.map((c, i) => (
                    <li key={c} className="!text-[15px] text-gray-600">
                      {i + 1}. {c}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <div className="w-full h-[420px]">
        <iframe
          title="Hospital Location Map"
          className="w-full h-full border-0"
          src="https://maps.google.com/maps?q=Bangalore+West+Lions+Super+Speciality+Eye+Hospital+JC+Road+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Appointment Form + Quick Contacts */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_340px] gap-8 items-start">

            {/* Book Appointment Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-secondary mb-2">Book An Appointment</h3>
              <p className="text-gray-500 !text-[15px] mb-7">
                Here's your turn to not wait in any Queue for treatment. Book your appointment
                as per your free schedule. We await your presence at our hospital. Kindly Book
                an appointment by filling the form below.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Select Hospital */}
                <div className="relative">
                  <select
                    name="hospital"
                    value={form.hospital}
                    onChange={set}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 !text-[15px] text-gray-500 appearance-none focus:outline-none focus:border-primary"
                  >
                    <option value="">Select Hospital</option>
                    <option>Bangalore West Lions Super Speciality Eye Hospital</option>
                    <option>Bangalore West Lions Sri Vidyasagar Oswal Institute</option>
                    <option>Lions Eye Hospital, Kollegala</option>
                    <option>B W Lions Super Speciality Eye Hospital, Chintamani</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary flex items-center justify-center pointer-events-none">
                    <ChevronDown size={14} className="text-white" />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={set}
                      className="w-full border border-gray-300 rounded-md pl-9 pr-4 py-3 !text-[15px] text-gray-500 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="relative">
                    <Clock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={set}
                      className="w-full border border-gray-300 rounded-md pl-9 pr-4 py-3 !text-[15px] text-gray-500 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                {/* Name + Age */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputWithIcon icon={User} type="text" name="name" value={form.name} onChange={set} placeholder="Name" />
                  <InputWithIcon icon={User} type="number" name="age" value={form.age} onChange={set} placeholder="Age" />
                </div>

                {/* Phone + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputWithIcon icon={Phone} type="tel" name="phone" value={form.phone} onChange={set} placeholder="Phone" />
                  <InputWithIcon icon={Mail} type="email" name="email" value={form.email} onChange={set} placeholder="Email" />
                </div>

                {/* Comments */}
                <textarea
                  name="comments"
                  value={form.comments}
                  onChange={set}
                  placeholder="Comments"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 !text-[15px] text-gray-700 resize-none focus:outline-none focus:border-primary"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-full font-semibold !text-[16px] flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  Make Appointment <ArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Quick Contacts Panel */}
            <div className="bg-primary text-white rounded-xl p-7 sticky top-24">
              <h3 className="text-white mb-2">Quick Contacts</h3>
              <p className="text-gray-300 !text-[15px] mb-7">
                Please feel free to contact our friendly staff with any medical enquiry.
              </p>

              <div className="space-y-4 mb-8">
                {quickContacts.map(({ icon: Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-gray-200 hover:text-secondary !text-[15px] transition-colors"
                  >
                    <Icon size={16} className="text-gray-400 flex-shrink-0" />
                    {text}
                  </a>
                ))}
                <div className="flex items-start gap-3 text-gray-200 !text-[15px]">
                  <MapPin size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                  <span>#5, Lions Eye Hospital Road, Off. JC Road, Bangalore - 560002</span>
                </div>
                <a
                  href="mailto:info@bwlionseyehospital.org"
                  className="flex items-center gap-3 text-gray-200 hover:text-secondary !text-[15px] transition-colors"
                >
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  info@bwlionseyehospital.org
                </a>
              </div>

              <button className="w-full border-2 border-white text-white py-2.5 rounded-full font-medium !text-[15px] hover:bg-white hover:text-primary transition-colors">
                About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
