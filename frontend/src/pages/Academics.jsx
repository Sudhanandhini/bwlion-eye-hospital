import { useState, useEffect } from "react";
import { CheckCircle2, ClipboardList, Dna, Stethoscope, Brain, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import heroImg1 from "../assets/img/ptt_default.jpg";

const highlights = [
  "A Legacy of Excellence.",
  "Everyday extraordinary",
  "We practice what we teach.",
  "High Quality Care",
  "Better Care and Better Understanding",
];

const courses = [
  { num: "01", icon: ClipboardList, title: "Diplomate of National Board - DNB", desc: "The DNB program is affiliated with the NBE." },
  { num: "02", icon: Dna, title: "Fellowship Programs", desc: "The fellowship courses are offered to PG students." },
  { num: "03", icon: Stethoscope, title: "B. Sc Optometry", desc: "Our administration and support staff have exceptional skills to assist you." },
  { num: "04", icon: Brain, title: "Diploma in Opthalmic Technology Course", desc: "A diploma in Opthalmic Technology is offered by the Paramedical Board." },
];

export default function Academics() {
  const [courseIdx, setCourseIdx] = useState(0);
  const visibleCourses = [0, 1, 2].map((offset) => courses[(courseIdx + offset) % courses.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCourseIdx((i) => (i + 1) % courses.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <PageBanner title="Academics" crumb="Academics" />

      <section
        className="relative bg-primary text-white"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-[1320px] mx-auto px-4 pt-16 pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
            <div>
              <p className="!text-[16px] font-semibold text-secondary uppercase tracking-wide mb-2">
                A commitment to community.
              </p>
              <h2 className="mb-0">Academics</h2>
            </div>
            <div>
              <p className="text-gray-300 !text-[16px] mb-8">
                The hospital offers various specialty and super specialty courses for students
                in the field of ophthalmology. There are hundreds of students who have
                completed their post-graduation and other specialty courses from this
                prestigious institution and are currently the leading practitioners settled in
                various parts of the state, country, and abroad.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-secondary flex-shrink-0" />
                    <span className="font-semibold !text-[16px]">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center font-semibold !text-[16px] mb-10">
            The following courses are offered by the institution
          </p>

          <div className="relative">
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
              {visibleCourses.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.num} className="bg-white text-primary rounded-md p-6 relative">
                    <Icon size={32} className="text-red-500" />
                    <span className="absolute top-5 right-5 text-3xl font-bold text-gray-200">{c.num}</span>
                    <h5 className="mt-4 mb-2">{c.title}</h5>
                    <p className="!text-[14px] text-gray-500 mb-4">{c.desc}</p>
                    <a href="#" className="text-secondary font-medium inline-flex items-center gap-1 !text-[14px]">
                      View More <ArrowRight size={14} />
                    </a>
                  </div>
                );
              })}
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
    </main>
  );
}
