import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import PageBanner from "../components/PageBanner";
import hospitalImg from "../assets/img/Hospital-1111 (1).jpg";

const chintamaniJobs = [
  {
    title: "Consultant",
    lines: ["Experience - 1 to 3 years", "No of Positions : 1 No", "Contact person- HR", "Mail- hr@bwlionseyehospital.org"],
  },
  {
    title: "Optometrist",
    lines: [
      "Experienced candidates are preferred",
      "No of Positions : 1 No Salary according to industrial standards",
      "Please contact:\n- HR- Contact No:9113607492\nMail- hr@bwlionseyehospital.org",
    ],
  },
];

const jcRoadJobs = [
  {
    title: "Patient Counsellor ( Only females )",
    lines: [
      "Age : 25 – 35",
      "Qualification : Any Degree",
      "Experience : 2 to 3 years",
      "Notice Period : Less than 1 month",
      "Language Known : Kannada, English, Hindi.",
      "Please contact:\nContact No: 9113607492\nMail Id: hr@bwlionseyehospital.org",
    ],
  },
  {
    title: "OT Assistant",
    lines: [
      "Qualification : Any Degree",
      "Salary : As per industry standards.",
      "Please contact:",
      "Contact No: 9113607492",
      "Mail Id: hr@bwlionseyehospital.org",
    ],
  },
];

function JobItem({ title, lines, defaultOpen = false }) {
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
        <div className="mt-3 pl-9 space-y-3">
          {lines.map((line, i) => (
            <p key={i} className="text-gray-600 !text-[15px] whitespace-pre-line">{line}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Career() {
  return (
    <main>
      <PageBanner title="Career" crumb="Career" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h4 className="text-primary mb-4">Why B W Lions Super Speciality Eye Hospital?</h4>
            <p className="text-gray-600 !text-[15px] mb-4">
              We believe in providing world-class eye care services to all segments of society.
            </p>
            <p className="text-gray-600 !text-[15px] mb-6">
              We always look out for passionate and dynamic skilled individuals to join our team
              and take the next step in their careers with teamwork. We have achieved creating a
              conducive working environment that helps each employee grow professionally which
              leads to institutional growth.
            </p>
            <img src={hospitalImg} alt="BW Lions Super Speciality Eye Hospital" className="w-full rounded-md" />
          </div>

          <div>
            <h3 className="text-secondary mb-6">Apply Now</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
             
                <div>
                  <label className="block text-secondary font-medium !text-[14px] mb-2">Position</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-secondary font-medium !text-[14px] mb-2">Apply Now</label>
                  <input type="text" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
                </div>
          
              <div>
                <label className="block text-secondary font-medium !text-[14px] mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
              </div>
            
                <div>
                  <label className="block text-secondary font-medium !text-[14px] mb-2">Mail Id</label>
                  <input type="email" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-secondary font-medium !text-[14px] mb-2">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
                </div>

                 <div>
                  <label className="block text-secondary font-medium !text-[14px] mb-2">Location</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-full px-4 py-3 !text-[15px] focus:outline-none focus:border-primary" />
                </div>
            
              <button
                type="submit"
                className="bg-primary text-white px-7 py-3 rounded-md font-medium !text-[16px] hover:bg-primary/90"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-secondary mb-6">Current Openings in Chintamani</h3>
            <div>
              {chintamaniJobs.map((job) => (
                <JobItem key={job.title} title={job.title} lines={job.lines} defaultOpen={job.title === "Consultant"} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-secondary mb-6">Current Openings on JC Road</h3>
            <div>
              {jcRoadJobs.map((job) => (
                <JobItem key={job.title} title={job.title} lines={job.lines} defaultClose />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
