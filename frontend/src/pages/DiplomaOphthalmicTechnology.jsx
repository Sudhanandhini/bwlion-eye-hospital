import { useState } from "react";
import PageBanner from "../components/PageBanner";

export default function DiplomaOphthalmicTechnology() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const setField = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/course-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, course: "Diploma in Opthalmic Technology Course" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <main>
      <PageBanner title="Diploma in Opthalmic Technology Course" crumb="Diploma in Opthalmic Technology" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-600 mb-6">
              A diploma in Ophthalmic Techniques is offered by the Paramedical Board, Karnataka.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Duration:</span> 3 years (post-SSLC),
              2 years (post-PUC) along with 3 months internship program
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Intake capacity:</span> 3 seats are
              allotted through the Para-medical board and 12 seats are allotted through the
              institute.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Eligibility:</span> 10+2 with 50%
              aggregate in Physics, Chemistry, and Biology
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Admission:</span> (for institute seats)
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Invitation of application:</span> June
              every year
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">The entrance exam for institute seats:</span>{" "}
              August 1st week
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Interview for selected candidates:</span>{" "}
              August 2nd week
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Admission for selected candidates:</span>{" "}
              August 4th week
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Course commencement:</span> September
              1st week
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Board:</span> Paramedical Board,
              Karnataka
            </p>
            <p className="text-gray-600">
              Kindly visit the Paramedical Board website for the Admissions.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-5">
            <p className="text-gray-500 !text-[16px] mb-2">
              Please provide your Contact Details for more information
            </p>

            {status === "success" && (
              <p className="text-green-600 !text-[14px]">Thank you! We'll get back to you soon.</p>
            )}
            {status === "error" && <p className="text-red-600 !text-[14px]">{error}</p>}

            <input
              name="name"
              value={form.name}
              onChange={setField}
              placeholder="Name"
              required
              className="w-full border border-gray-300 rounded-full px-5 py-3 !text-[15px] text-primary focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={setField}
              placeholder="E-Mail ID"
              className="w-full border border-gray-300 rounded-full px-5 py-3 !text-[15px] text-primary focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={setField}
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-full px-5 py-3 !text-[15px] text-primary focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={setField}
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-2xl px-5 py-3 !text-[15px] text-primary focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-white px-7 py-3 rounded-full font-medium !text-[16px] hover:bg-primary/90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
