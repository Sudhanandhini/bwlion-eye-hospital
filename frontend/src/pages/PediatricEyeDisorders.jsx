import PageBanner from "../components/PageBanner";
import boyTrialFrameImg from "../assets/img/oculoplasty-2.jpg";
import motherChildImg from "../assets/img/retina-2.jpg";

const conditions = [
  {
    title: "Refractive errors",
    desc: "Most common eye problem in children. it causes blurred vision. the child can have impaired vision for distance and near. this could affect the daily activities of the child at home and school. This can be easily diagnosed and treated by your ophthalmologist after prescribing spectacles to the child.",
  },
  {
    title: "Amblyopia- 'LAZY EYE'",
    desc: "This happens when subnormal vision in a child is not corrected at an early age. various eye problems like refractive errors, cataracts, and squints can cause amblyopia. Corrected by Patching exercises, binocular vision therapy, and correction of the underlying cause of subnormal vision.",
  },
  {
    title: "Squint- 'CROSSED EYES'",
    desc: "considered lucky in various parts of India is one of the frequent problems in children. One eye is straight whereas the other eye may be turned in, out, up, or down causing poor vision in the crossed eye. This also reduces the stereopsis or 3D vision in children. This is treated by spectacles and squint surgery to make the eyes straight.",
  },
  {
    title: "Cataracts",
    desc: "Cataracts in children are not uncommon, they can be unilateral or bilateral. Cataracts can be due to hereditary causes, nutritional, infections, trauma, or metabolic diseases. It causes a white dot at the center of the pupil. This needs to be treated at the earliest by your ophthalmologist. Cataract surgery followed by glasses is the treatment for pediatric cataracts",
  },
  {
    title: "Conjunctivitis",
    desc: "Commonly known as pink eye is an infection caused by bacteria or virus allergy. The former two are highly contagious though self-resolving. it causes redness, discharge from the eyes, and tearing. Symptoms are often controlled at home with antibiotics and lubricating eye drops. Though allergic symptoms like itching and burning sensation in allergic conjunctivitis are treated by anti-allergic eye drops.",
  },
  {
    title: "Style or chalazion",
    desc: "a red sore lump at the eyelid margin causing pain and swelling of the eyelid. rarely it can spread to the orbit causing orbital cellulitis. Treated with a warm compress and antibiotics. A chalazion is a swelling over the eyelid margin caused by a blocked oil gland. Most of the time it resolves with a warm compress",
  },
];

const more = [
  {
    title: "Blocked tear duct",
    desc: "causes continuous watering from the eyes in an infant. This is treated with massage to the nasolacrimal duct or probing after the child is 1 year old",
  },
  {
    title: "Retinopathy of prematurity",
    desc: "occurs in premature babies. There is incomplete vascularization of the retina in such babies leading to retinal detachment and loss of vision. This can be easily prevented by a timely screening of the eye by an ophthalmologist and treated by lasers or injections.",
  },
  {
    title: "Retinoblastoma",
    desc: "This is a cancer of the eye in children. This can be treated by timely screening and intervention at early stages which can prevent blindness and morbidity in children.",
  },
];

export default function PediatricEyeDisorders() {
  return (
    <main>
      <PageBanner title="Pediatric Eye Disorders" crumb="Pediatric Eye Disorders" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <p className="text-gray-600 mb-8">
          Childs vision is vulnerable to various eye problems, since children may not give
          specific eye complaints most go unnoticed by parents or teachers in school. Some of
          the common eye problems in children include the following
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
          <ol className="space-y-4 text-gray-600 !text-[18px] list-decimal list-inside">
            {conditions.map((c) => (
              <li key={c.title}>
                <span className="font-semibold text-primary">{c.title}-</span> {c.desc}
              </li>
            ))}
          </ol>
          <img src={boyTrialFrameImg} alt="Child eye examination" className="w-full rounded-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <img src={motherChildImg} alt="Doctor examining child's eyes" className="w-full rounded-md" />
          <ol start={7} className="space-y-4 text-gray-600 !text-[18px] list-decimal list-inside">
            {more.map((c) => (
              <li key={c.title}>
                <span className="font-semibold text-primary">{c.title}-</span> {c.desc}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
