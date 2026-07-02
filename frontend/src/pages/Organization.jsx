import { ArrowRight, Users } from "lucide-react";
import PageBanner from "../components/PageBanner";
import eyeBankPhoto from "../assets/img/Eye-Bank.jpg";
import imgorg from "../assets/img/org-about (1).jpg";
import imgorg1 from "../assets/img/org-about (1).jpg";

function PlaceholderPhoto({ className }) {
  return (
    <div className={`bg-gray-100 rounded-md flex items-center justify-center ${className}`}>
      <Users size={50} className="text-primary/20" />
    </div>
  );
}

export default function Organization() {
  return (
    <main>
      <PageBanner title="Organization" crumb="Organization" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <p className="text-gray-600">
            Lions Club of Bangalore West Trust established Bangalore West Lions Super Speciality
            Eye Hospital in the year 1984 and has rendered yeomen service to the community. This
            Trust is serving the visually challenged and the blind selflessly. Registered under
            section 12A of IT Act and enjoying recognition under /section 80(G) of IT Act.
            Bangalore West Lions Super Speciality Eye Hospital is accredited by NABH for
            excellence in Health care. We are assessed to Tax vide PAN NO AAATL0503F. Without
            compromising the quality of Eyecare, all the services of the hospital have been
            contrived to cater to all strata of society.
            <br /><br />
            The Hospital consists of a dedicated team of experienced doctors and well-trained
            support staff. Patients who seek consultation undergo registration at the front
            desk/reception and are guided to the doctors for evaluation.
          </p>
          {/* <PlaceholderPhoto className="aspect-[4/3]" /> */}
          <img src={imgorg} alt="Organization Image" className="w-full h-full object-cover" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          {/* <PlaceholderPhoto className="aspect-[4/3] order-2 md:order-1" /> */}
          <img src={imgorg1} alt="Organization Image" className="w-full h-full object-cover" />
          <p className="text-gray-600 order-1 md:order-2">
            Patients requiring correction of refractive error can opt from a selection of the
            latest spectacles at the in-house opticals and those requiring medications can obtain
            the same from the stocked in-house pharmacy.
            <br /><br />
            For those patients who need further evaluation, a variety of ocular investigations
            like IOL Master 700, Cirrus OCT, Pentacam, Humphrey Visual field analyzer, B-Scan,
            UBM, etc are provided at the Hospital.
            <br /><br />
            Further patients who have been advised surgery are counseled by a team of dedicated
            counselors and undergo necessary investigations at the in-house laboratory.
            <br /><br />
            The Hospital is equipped with the latest surgical machines and instruments for
            providing world-class surgical care.
          </p>
           
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h5 className="text-primary mb-4">Lions International Eye Bank</h5>
            <p className="text-gray-600 mb-4">
              Established as Netrajyoti Eye Bank on 30th June 1984, the Eye Bank was renamed to
              Lions International Eye bank in 1995 soon after receiving the affiliation from
              IFETB. Additionally, the eye bank was accredited with EBAI in 1990 and registered
              with the Govt. of Karnataka under the HOTA (Human Organ Transplantation Act) of
              1994.
            </p>
            <a href="https://lionsinternationaleyebankbangalore.in/" className="text-primary font-medium inline-flex items-center gap-2">
              Know More
              <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
          <img src={eyeBankPhoto} alt="Lions International Eye Bank" className="rounded-md w-full object-cover" />
        </div>

        <h3 className="text-primary">History and Milestones</h3>
      </section>
    </main>
  );
}
