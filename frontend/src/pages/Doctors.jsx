import { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";

const GROUP_LABELS = {
  medical_director: "Medical Director",
  eye_bank_team: "Medical Director - Eye Bank",
  consultants: "Consultants",
};

function DoctorCard({ name, role, image_path }) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden text-left">
      <div className=" overflow-hidden bg-gray-100 h-[300px] flex items-center justify-center">
        <img src={image_path} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h5 className="text-primary mb-1">{name}</h5>
        <p className="!text-[14px] text-secondary">{role}</p>
      </div>
    </div>
  );
}

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/doctors")
      .then((res) => res.json())
      .then(setDoctors)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <PageBanner title="Doctors" crumb="Doctors" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          Object.entries(GROUP_LABELS).map(([groupKey, label]) => {
            const groupDoctors = doctors.filter((d) => d.group_name === groupKey);
            if (groupDoctors.length === 0) return null;
            return (
              <div key={groupKey} className="mb-14">
                <h4 className="text-primary mb-6">{label}</h4>
                <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {groupDoctors.map((doc) => (
                    <DoctorCard key={doc.id} {...doc} />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}
