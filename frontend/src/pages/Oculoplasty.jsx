import PageBanner from "../components/PageBanner";
import ectropionImg from "../assets/img/oculoplasty-3.webp";
import healthyEyeImg from "../assets/img/oculoplasty-2.webp";
import entropionImg from "../assets/img/oculoplasty-1.webp";

const illustrations = [
  { img: ectropionImg, label: "Ectropion" },
  { img: healthyEyeImg, label: "Healthy eye" },
  { img: entropionImg, label: "Entropion" },
];

export default function Oculoplasty() {
  return (
    <main>
      <PageBanner title="Oculoplasty" crumb="Oculoplasty" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
          <div>
            <h4 className="text-primary mb-4">Common Disorders Of The Lids And Adnexa</h4>
            <p className="text-gray-600 !text-[18px] mb-4">
              The structures present around the eyeball like the eyelids, lacrimal apparatus,
              and orbital walls form an important support system for the eyes and are involved
              in various functions like tear production and drainage, maintenance of the ocular
              surface, protection from trauma, etc.
            </p>
            <p className="text-gray-600 !text-[18px] mb-4">
              Some of the commonly encountered disorders of these structures include:
            </p>

            <p className="text-primary font-semibold !text-[18px] mb-2">
              1. Acute and chronic dacryocystitis (inflammation and blockage of the tear drainage system)
            </p>
            <p className="text-gray-600 !text-[18px] mb-4">
              In the acute stage, symptoms like pain and swelling near the inner corner of the
              eye are seen along with watering and discharge.
              <br />
              It is treated with warm compresses, antibiotics, and anti-inflammatory medications.
              <br />
              In the chronic stage, the main symptoms will be watering and discharge. The
              definitive treatment is through surgery to create a new path for the tears to drain.
            </p>

            <p className="text-primary font-semibold !text-[18px] mb-2">
              1. Entropion and ectropion (malpositions of the eyelids)
            </p>
            <p className="text-gray-600 !text-[18px] mb-2">
              Entropion is the inward turning of the eyelid margin while Ectropion is the
              outward turning of the eyelid margin.
              <br />
              These conditions can occur due to various causes:
            </p>
            <ol className="list-decimal list-inside text-gray-600 !text-[18px] mb-4 space-y-1">
              <li>Old age – the looseness of the lower lid</li>
              <li>Eye injury</li>
              <li>Large swellings or infections of the eyelid</li>
              <li>Previous eye surgery</li>
              <li>Congenital</li>
            </ol>
            <p className="text-gray-600 !text-[18px] mb-4">
              If left untreated, these disorders can cause corneal damage and vision loss.
              <br /><br />
              Common symptoms include irritation in the eyes, redness, pain, and watering
              <br />
              It is treated with lid taping or suturing, BOTOX injections, or surgical repair.
            </p>

            <p className="text-primary font-semibold !text-[18px] mb-2">1. Ptosis (drooping of the eyelid)</p>
            <p className="text-gray-600 !text-[18px] mb-2">This can be caused by:</p>
            <ol className="list-decimal list-inside text-gray-600 !text-[18px] mb-4 space-y-1">
              <li>Congenital</li>
              <li>Eye injury</li>
              <li>Nerve paralysis</li>
              <li>Certain neuromuscular disorders like myasthenia gravis</li>
            </ol>
            <p className="text-gray-600 !text-[18px]">
              The symptoms can range from unacceptable cosmetic appearance, problems with
              vision, abnormal head posture, etc
              <br />
              The treatment depends on the cause of ptosis and sometimes, surgical repair may
              be necessary.
            </p>
          </div>

          <div className="space-y-6">
            {illustrations.map((i) => (
              <div key={i.label} className="rounded-md overflow-hidden shadow">
                <img src={i.img} alt={i.label} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
