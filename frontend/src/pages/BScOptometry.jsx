import { useState } from "react";
import PageBanner from "../components/PageBanner";

export default function BScOptometry() {
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
        body: JSON.stringify({ ...form, course: "B. Sc Optometry" }),
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
      <PageBanner title="B. Sc Optometry" crumb="B. Sc Optometry" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-600 mb-6">
              B.Sc. Optometry is a full-time 3 years course +1-year internship post-PUC (PCMB
              subjects) and 2 years course + 1-year internship post-DOT (June session). It
              essentially involves an advanced study of the clinical skills involved in
              professionally measuring eyesight, prescribing corrective lenses, and detecting
              eye diseases.
            </p>
            <p className="text-gray-600 mb-6">
              B.Sc. The optometry program aims to educate students about the various
              professional methods of visual screening, diagnosis of visual problems,
              orthoptics, vision training, counseling, and management of patients with low
              vision, color blindness, and hereditary vision defects. They are also trained in
              designing and fitting spectacles, contact lenses, low-vision aids, and ocular
              prostheses.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Duration:</span> 3 years
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Intake Capacity:</span> 4 seats
              allotted through RGUHS, 16 seats allotted through the institute per year.
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold text-primary">Eligibility:</span> PUC (PCMB) from
              a recognized Education Board/ Diploma in Optometry
            </p>
            <p className="text-gray-600">
              <span className="font-semibold text-primary">University:</span> Rajiv Gandhi
              University of Health Sciences
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
