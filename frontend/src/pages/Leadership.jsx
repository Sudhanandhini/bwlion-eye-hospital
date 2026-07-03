import { useEffect, useState } from "react";
import { User } from "lucide-react";
import PageBanner from "../components/PageBanner";

const GROUP_LABELS = {
  founder: "Founder Trustee",
  top_leader: "Top Leadership",
  office_bearer: "Office Bearers",
};

function Avatar({ name, role, image_path, size = "md" }) {
  const dims = size === "lg" ? "w-32 h-32" : "w-28 h-28";
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${dims} rounded-md bg-gray-100 overflow-hidden flex items-center justify-center mb-3`}>
        {image_path ? (
          <img src={image_path} alt={name} className="w-full h-full object-cover" />
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
  const [leaders, setLeaders] = useState([]);
  const [trustees, setTrustees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/leadership").then((res) => res.json()),
      fetch("/api/trustees").then((res) => res.json()),
    ])
      .then(([leadershipData, trusteesData]) => {
        setLeaders(leadershipData);
        setTrustees(trusteesData);
      })
      .finally(() => setLoading(false));
  }, []);

  const founder = leaders.find((l) => l.group_name === "founder");
  const topLeaders = leaders.filter((l) => l.group_name === "top_leader");
  const officeBearers = leaders.filter((l) => l.group_name === "office_bearer");
  const hereditaryTrustees = trustees.filter((t) => t.type === "hereditary").map((t) => t.name);
  const lifeTrustees = trustees.filter((t) => t.type === "life").map((t) => t.name);

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

        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : (
          <>
            {founder && (
              <div className="flex justify-center mb-10">
                <Avatar {...founder} size="lg" />
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-10">
              {topLeaders.map((p) => <Avatar key={p.id} {...p} />)}
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-16">
              {officeBearers.map((p) => <Avatar key={p.id} {...p} />)}
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <TrusteeTable title="Hereditary Trustee" names={hereditaryTrustees} />
              <TrusteeTable title="Life Trustees" names={lifeTrustees} />
            </div>
          </>
        )}
      </section>
    </main>
  );
}
