import { ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";

export default function DnbProgram() {
  return (
    <main>
      <PageBanner title="Diplomate of National Board - DNB" crumb="DNB" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h5 className="text-gray-500 font-semibold mb-5">Overview</h5>

            <p className="text-gray-600 mb-4">1. The DNB program is affiliated with the NBE.</p>
            <p className="text-gray-600 pl-5 mb-2">
              Primary DNB- The institute provides 3 seats/per year. The course is 3 years
              in duration for post-MBBS doctors.
            </p>
            <p className="text-gray-600 pl-5 mb-4">
              Secondary DNB- The institute provides 3 seats/year for a duration of 2 years
              for post-DO doctors.
            </p>

            <p className="text-gray-600 mb-4">
              2. Medical Entrance exam NEET for Primary Candidates and PDCET for Secondary
              Candidates are conducted as per the dates given by the NBE.
            </p>

            <p className="text-gray-600">
              Kindly visit the National Board of Examinations website for the DNB application.
            </p>
          </div>

          <div className="flex md:justify-center md:pt-10">
            <a
              href="https://natboard.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 rounded-full font-medium !text-[16px] hover:bg-primary/90 transition-colors"
            >
              <ArrowRight size={18} /> Click Here For National Board Of Examinations Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
