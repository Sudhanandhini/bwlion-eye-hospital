import { User } from "lucide-react";
import PageBanner from "../components/PageBanner";
import murthyImg from "../assets/img/B.L.S.-Murthy.jpg";
import premnathImg from "../assets/img/premnath-1.jpg";
import prasadImg from "../assets/img/prasad.jpg";
import trustee1Img from "../assets/img/trustee1.jpg";
import trustee2Img from "../assets/img/trustee2.jpg";
import trustee3Img from "../assets/img/trustee3.jpg";
import trustee4Img from "../assets/img/trustee4.jpg";

const founder = { name: "Padmashree Lion Dr. B.L.S. Murthy", role: "Founder Trustee", img: murthyImg };

const topLeaders = [
  { name: "PDG Lion P.S. Premnath", role: "Managing Trustee & Chairperson", img: premnathImg },
  { name: "Lion CA Dr. I.S. Prasad", role: "Hon Secretary", img: prasadImg },
];

const officeBearers = [
  { name: "Lion B. Chinnaswamy Setty", role: "Sr. Vice Chairman", img: trustee1Img },
  { name: "Lion R. Kashinath", role: "Vice Chairman", img: trustee2Img },
  { name: "Lion K. Rajkumar", role: "Hon Treasurer", img: trustee3Img },
  { name: "Lion T.V. Nanjundaswamy", role: "Joint Secretary", img: trustee4Img },
];

const hereditaryTrustees = [
  "Lion P.S. Premnath", "Lion I.S. Prasad", "Lion Chinnaswamy Setty B.", "Lion Ashok Kumar B.R",
  "Lion Dattathreya S.Meda", "Lion Dr. C.V Somashekar", "Lion Dr. Mohan Manghnani",
  "Lion Dr. Rani Satish Babu", "Lion Dr.Ramamurthy B.S", "Lion L.K. Mani", "Lion L.N. Dinakar",
  "Lion Manjunatha Gupta K", "Lion N.Ashok Salecha", "Lion Nagaraj G.R", "Lion Pathi S. Suresh",
  "Lion Raj Kumar K", "Lion Rama Ramamurthy", "Lion Shobha Satish", "Lion Subbaraju K.G",
  "Shri L Suresh", "Shri M.A. Parthasarathy", "Shri Manandi Ramesh", "Shri S.V.S. Subramanya Gupta",
  "Shri Sanath V Babu", "Shri T. Srinivas", "Shri B A Srinivasa Gupta", "Shri Pradeep K.R",
  "Lion T Vasudev", "Shri Lingamurthy",
];

const lifeTrustees = [
  "Lion Manandi Nanjunda Setty", "Lion Dinesh H.L", "Lion A. Satish", "Lion Dwarakanath P.V",
  "Lion Kashinath R", "Lion N.A. Nagaraja Setty", "Lion Nagendra Setty", "Lion Rajesh Babu P.R",
  "Lion Sreedhara V Donti", "Lion Srinivasan M.R", "Lion Subramanya G.R", "Lion Sudarshan M.A",
  "Lion T.V Nanjundaswamy", "Lion V. R. Ramamurthy", "Shri Pradeep Devatha", "Lion R Srinivasan",
  "Ms. Akhila Bindumalyam Nandakumar", "Lion Radhakrishna",
];

function Avatar({ name, role, img, size = "md" }) {
  const dims = size === "lg" ? "w-32 h-32" : "w-32 h-auto";
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${dims} rounded-md bg-gray-100 overflow-hidden flex items-center justify-center mb-3`}>
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <User size={size === "lg" ? 48 : 40} className="text-primary/30" />
        )}
      </div>
      <p className="text-primary font-bold uppercase !text-[13px] tracking-wide leading-tight">{name}</p>
      <p className="text-gray-500 !text-[13px] uppercase tracking-wide">{role}</p>
    </div>
  );
}

function TrusteeTable({ title, names }) {
  return (
    <div>
      <h5 className="text-primary text-center italic underline mb-4">{title}</h5>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 !text-[14px]">
            <th className="pb-2 pr-4 font-medium w-16">SL.NO</th>
            <th className="pb-2 font-medium">Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((n, i) => (
            <tr key={n} className="border-t border-gray-100">
              <td className="py-2 pr-4 text-gray-500 !text-[14px]">{i + 1}</td>
              <td className="py-2 text-primary italic !text-[14px]">{n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Leadership() {
  return (
    <main>
      <PageBanner title="Leadership" crumb="Leadership" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <p className="text-gray-600 mb-14 ">
          Bangalore West Super Specialty Eye Hospital is a dream of many visionaries founded with
          the mission of conquering blindness that has been haunting the livelihoods of many,
          especially in Rural India. The reputation of the Hospital has been built with the
          utmost respect for charitable acts over the past 3 decades. The growth of this
          Organization is because of the honest and respected team in place to carry out the
          compliances and day-to-day activities. Here's a small introduction to our Leadership
          team.
        </p>

        <div className="flex justify-center mb-10">
          <Avatar name={founder.name} role={founder.role} img={founder.img} size="lg" />
        </div>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-10">
          {topLeaders.map((p) => (
            <Avatar key={p.name} name={p.name} role={p.role} img={p.img} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-16">
          {officeBearers.map((p) => (
            <Avatar key={p.name} name={p.name} role={p.role} img={p.img} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <TrusteeTable title="Hereditary Trustee" names={hereditaryTrustees} />
          <TrusteeTable title="Life Trustees" names={lifeTrustees} />
        </div>
      </section>
    </main>
  );
}
