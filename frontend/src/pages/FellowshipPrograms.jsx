import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import { apiUrl } from "../lib/apiBase";

const programs = [
  {
    id: "general-ophthalmology",
    title: "General Ophthalmology Fellowship",
    bg: "bg-blue-50",
    intro: "The Hospital offers 12 months of General Ophthalmology Fellowship for Graduate Students throughout the year.",
    objective: "General Ophthalmology fellowship is a 12 months course during which the postgraduate will get comprehensive knowledge from the basics like Retinoscopy, and subjective refraction, to advanced technology in the field. The postgraduate will attend Cornea, Squint, neuro-ophthalmology, Glaucoma, Retina and Uvea, and oculoplastic clinics. Depending on the skills of the students, training for SICS, Phaco, and other surgeries, during these 12 months of fellowship",
  },
  {
    id: "phaco-refractive",
    title: "Phaco and Refractive Course",
    bg: "bg-amber-50",
    objective: "Goal of the Phaco and Refractive Surgery fellowship is to provide comprehensive 18 months of training in phacoemulsification and refractive surgery. Yearly 2 seats are offered through the RGUHS fellowship program (June session) for those students who have completed their basic training in Ophthalmology.",
    extra: "The fellowship offers comprehensive training in the medical assessment and surgical management of cataracts and refractive errors.",
  },
  {
    id: "cornea",
    title: "Cornea Course",
    bg: "bg-blue-50",
    intro: "The Hospital offers 18 months Cornea Fellowship for 2 postgraduate Students every year (June session).",
    objective: "The objective of this program is to train ophthalmologists in the diagnosis and management of corneal diseases and refractive errors through clinical evaluation and research, the use of various investigative procedures, medical treatment, and surgical intervention.",
    extra: "The program is designed to train the next generation of leaders in the fields of the cornea and refractive surgery by providing a rich academic environment with multiple research opportunities and career mentorship support.",
  },
  {
    id: "glaucoma",
    title: "Glaucoma Course",
    bg: "bg-amber-50",
    intro: "The Hospital offers an 18-month Glaucoma Fellowship for 2 postgraduate Students every year (June session).",
    objective: "The objective of this program is to intensively train ophthalmologists to impart skills in recent advances in the diagnosis and treatment of glaucoma through clinical evaluation and research, the use of various investigative procedures, medical treatment, and surgical intervention.",
  },
  {
    id: "short-term-phaco",
    title: "Short Term Phacoemulsification Fellowship",
    bg: "bg-blue-50",
    intro: "The institute offers a short-term fellowship in phacoemulsification throughout the year on a rotation basis.",
  },
];

export default function FellowshipPrograms() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: programs[0].title });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const setField = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(apiUrl("/api/fellowship-applications"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", program: programs[0].title });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <main>
      <PageBanner title="Fellowship Programs" crumb="Fellowship Programs" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <p className="text-gray-500 mb-4">
          The following fellowship courses are offered to postgraduate students
        </p>
        <ol className="list-decimal list-inside space-y-1 mb-12">
          {programs.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="text-primary font-semibold hover:text-secondary">
                {p.title}
              </a>
            </li>
          ))}
        </ol>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {programs.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className={`${p.bg} rounded-md p-7 scroll-mt-24 ${p.id === "short-term-phaco" ? "md:col-span-1" : ""}`}
            >
              <h4 className="text-primary mb-4">{p.title}</h4>
              {p.intro && <p className="text-gray-600 !text-[18px] mb-4">{p.intro}</p>}
              {p.objective && (
                <>
                  <p className="font-semibold text-primary mb-2">Objective</p>
                  <p className="text-gray-600 !text-[18px] mb-4">{p.objective}</p>
                </>
              )}
              {p.extra && <p className="text-gray-600 !text-[18px] mb-4">{p.extra}</p>}
              <a href="#apply" className="text-primary font-medium inline-flex items-center gap-2 !text-[14px]">
                Apply Now
                <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          ))}
        </div>

        <h2 id="apply" className="text-secondary text-center mb-8 scroll-mt-24">
          Apply Online for Fellowship Programs
        </h2>

        <form onSubmit={submit} className="max-w-2xl mx-auto border border-gray-200 rounded-md p-8 space-y-5">
          {status === "success" && (
            <p className="text-green-600 !text-[14px]">Thank you! Your application has been sent.</p>
          )}
          {status === "error" && <p className="text-red-600 !text-[14px]">{error}</p>}

          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={setField}
              required
              className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">E-Mail ID</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={setField}
              className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={setField}
              className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-secondary font-medium !text-[14px] mb-2">Select Fellowship Program</label>
            <select
              name="program"
              value={form.program}
              onChange={setField}
              className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary"
            >
              {programs.map((p) => (
                <option key={p.id} value={p.title}>{p.title}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-primary text-white px-7 py-3 rounded-full font-medium !text-[16px] hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Apply"}
          </button>
        </form>

        <p className="text-center text-gray-500 !text-[14px] mt-8">
          The hospital is affiliated with RGUHS for running the fellowship programs in various specialties
        </p>
      </section>
    </main>
  );
}
