import { Flower2, Send, Building2 } from "lucide-react";
import PageBanner from "../components/PageBanner";
import imghos from "../assets/img/Hospital-1111 (1).jpg";


export default function VisionMission() {
  return (
    <main>
      <PageBanner title="Our Vision & Our Mission" crumb="Our Vision & Our Mission" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <h2 className="text-primary mb-4">About the Hospital</h2>
            <p className="text-gray-600">
              Bangalore West Lions Super Speciality Eye Hospital is the most trusted Non-Profit
              Eye Hospital running in Bangalore which is a unit of the Lions club of Bangalore
              West Trust. The Bangalore West Lions Super Speciality Eye Hospital was established
              on 30th June 1984 as part of the Lions Club of Bangalore West Trust. The hospital
              has been serving the community for over four decades with world-class, affordable
              eye care.
            </p>
          </div>
          <div className="bg-gray-100 rounded-md aspect-video flex items-center justify-center">
            <img src={imghos} alt="Hospital Image" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          <div className="flex gap-4">
            <Flower2 size={40} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="text-primary mb-2">Vision</h3>
              <p className="text-gray-600">
                Fight blindness, gift sight to visually deprived people, and provide world-class
                eye care services at affordable rates.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Send size={40} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="text-primary mb-2">Mission</h3>
              <p className="text-gray-600">
                Affordable quality eye care for all by providing cost-effective, equitable,
                ethical, cutting-edge technology compassionately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
