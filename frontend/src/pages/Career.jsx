import { useEffect, useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import PageBanner from "../components/PageBanner";
import hospitalImg from "../assets/img/Hospital-1111 (1).jpg";

function JobItem({ title, details, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-3 text-left w-full"
      >
        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
        <span className="text-secondary font-semibold !text-[18px]">{title}</span>
      </button>
      {open && (
        <div className="mt-3 pl-9">
          <p className="text-gray-600 !text-[18px] whitespace-pre-line">{details}</p>
        </div>
      )}
    </div>
  );
}

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/career")
      .then((res) => res.json())
      .then(setJobs)
      .finally(() => setLoading(false));
  }, []);

  const locations = [...new Set(jobs.map((j) => j.location))];

  const [applyForm, setApplyForm] = useState({
    position: "", applyNow: "", name: "", email: "", phone: "", location: "",
  });
  const [applyStatus, setApplyStatus] = useState("idle");
  const [applyError, setApplyError] = useState("");

  const setApplyField = (e) => setApplyForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitApplication = async (e) => {
    e.preventDefault();
    setApplyStatus("sending");
    setApplyError("");
    try {
      const res = await fetch("/api/job-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applyForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setApplyStatus("success");
      setApplyForm({ position: "", applyNow: "", name: "", email: "", phone: "", location: "" });
    } catch (err) {
      setApplyStatus("error");
      setApplyError(err.message);
    }
  };

  return (
    <main>
      <PageBanner title="Career" crumb="Career" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h4 className="text-primary mb-4">Why B W Lions Super Speciality Eye Hospital?</h4>
            <p className="text-gray-600 !text-[18px] mb-4">
              We believe in providing world-class eye care services to all segments of society.
            </p>
            <p className="text-gray-600 !text-[18px] mb-6">
              We always look out for passionate and dynamic skilled individuals to join our team
              and take the next step in their careers with teamwork. We have achieved creating a
              conducive working environment that helps each employee grow professionally which
              leads to institutional growth.
            </p>
            <img src={hospitalImg} alt="BW Lions Super Speciality Eye Hospital" className="w-full rounded-md" />
          </div>

          <div>
            <h3 className="text-secondary mb-6">Apply Now</h3>
            <form className="space-y-5" onSubmit={submitApplication}>
              {applyStatus === "success" && (
                <p className="text-green-600 !text-[14px]">Thank you! Your application has been sent.</p>
              )}
              {applyStatus === "error" && (
                <p className="text-red-600 !text-[14px]">{applyError}</p>
              )}
              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Position</label>
                <input type="text" name="position" value={applyForm.position} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" />
              </div>
              {/* <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Apply Now</label>
                <input type="text" name="applyNow" value={applyForm.applyNow} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" />
              </div> */}

              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Name</label>
                <input type="text" name="name" value={applyForm.name} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" required />
              </div>

              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Mail Id</label>
                <input type="email" name="email" value={applyForm.email} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Phone Number</label>
                <input type="tel" name="phone" value={applyForm.phone} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" />
              </div>

              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Location</label>
                <input type="text" name="location" value={applyForm.location} onChange={setApplyField} className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[18px] focus:outline-none focus:border-primary" />
              </div>

              <button
                type="submit"
                disabled={applyStatus === "sending"}
                className="bg-primary text-white px-7 py-3 rounded-md font-medium !text-[16px] hover:bg-primary/90 disabled:opacity-60"
              >
                {applyStatus === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : locations.length === 0 ? (
          <p className="text-gray-400 text-center">No current openings.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-16">
            {locations.map((loc) => (
              <div key={loc}>
                <h3 className="text-secondary mb-6">Current Openings in {loc}</h3>
                <div>
                  {jobs
                    .filter((j) => j.location === loc)
                    .map((job) => (
                      <JobItem key={job.id} title={job.title} details={job.details} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
