import PageBanner from "../components/PageBanner";
import drMomathaImg from "../assets/img/dr.mamatha.jpg";
import drRekhaImg from "../assets/img/Dr.-Rekha-Gyanchand.jpg";
import drRamaDeviImg from "../assets/img/dr.Rama-Devi.jpg";
import drRachelImg from "../assets/img/dr.Rachel-Joseph.jpg";

const medicalDirector = [
  { name: "Dr. Mamatha B", role: "Medical Director", img: drMomathaImg },
];

const eyeBankTeam = [
  { name: "Dr. Rekha Gyanchand", role: "Medical Director - Eye Bank", img: drRekhaImg },
  { name: "Dr. Rama Devi K.S", role: "Medical Superintendent", img: drRamaDeviImg },
  { name: "Dr. Rachel Joseph", role: "Consultant", img: drRachelImg },
];

const consultants = [
  "Dr. Sahana S Karanth — Consultant, Consultant-Vitreo Retina",
  "Dr Varsha Tamrakar — Consultant, Pediatric Consultant",
  "Dr. Gururaj N Deshpande — Consultant, Consultant-Vitreo Retina",
  "Dr. Lalitha C S — Consultant",
];

function DoctorCard({ name, role, img }) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden text-left">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img src={img} alt={name} className="w-full h-auto object-cover" />
      </div>
      <div className="p-5">
        <h5 className="text-primary mb-1">{name}</h5>
        <p className="!text-[14px] text-secondary">{role}</p>
      </div>
    </div>
  );
}

export default function Doctors() {
  return (
    <main>
      <PageBanner title="Doctors" crumb="Doctors" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <h4 className="text-primary mb-6">Medical Director</h4>
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {medicalDirector.map((doc) => (
            <DoctorCard key={doc.name} {...doc} />
          ))}
        </div>

        <h4 className="text-primary mb-6">Medical Director - Eye Bank</h4>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="grid sm:grid-cols-3 md:col-span-3 gap-6">
            {eyeBankTeam.map((doc) => (
              <DoctorCard key={doc.name} {...doc} />
            ))}
          </div>
          <div className="space-y-4">
            {consultants.map((c) => {
              const [name, role] = c.split(" — ");
              return (
                <div key={name} className="border border-gray-200 rounded-md p-5 text-left">
                  <h5 className="text-primary mb-1">{name}</h5>
                  <p className="!text-[14px] text-secondary">{role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
