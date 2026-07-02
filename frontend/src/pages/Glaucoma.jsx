import PageBanner from "../components/PageBanner";
import glaucomaCompareImg from "../assets/img/Glaucoma-main-min.jpg";

const glaucomaTypes = [
  {
    title: "Open-Angle (Chronic) Glaucoma",
    desc: "Open-angle, or chronic, glaucoma has no signs or symptoms except gradual vision loss. This loss may be so slow that your vision can suffer irreparable damage before any other signs become apparent.",
  },
  {
    title: "Angle-Closure (Acute) Glaucoma",
    desc: "If the flow of your aqueous humor fluid is blocked, the rapid buildup of fluid may cause a severe, quick, and painful increase in the pressure. Angle-closure glaucoma is an emergency situation. You should call your doctor immediately if you begin experiencing symptoms, such as severe pain, nausea, and blurred vision.",
  },
  {
    title: "Congenital Glaucoma",
    desc: "Children born with congenital glaucoma have a defect in the angle of their eye, which slows or prevents normal fluid drainage. Congenital glaucoma usually presents with symptoms, such as cloudy eyes, excessive tearing, or sensitivity to light. Congenital glaucoma can run in families.",
  },
  {
    title: "Secondary Glaucoma",
    desc: "Secondary glaucoma is often a side effect of injury or another eye condition, such as cataracts or eye tumors. Medicines, such as corticosteroids, may also cause this type of glaucoma. Rarely, eye surgery can cause secondary glaucoma.",
  },
  {
    title: "Normal-Tension Glaucoma",
    desc: "In some cases, people without increased eye pressure develop damage to their optic nerve. The cause of this isn't known. However, extreme sensitivity or a lack of blood flow to your optic nerve may be a factor in this type of glaucoma.",
  },
];

const riskFactors = [
  {
    title: "Age",
    desc: "People over 60 are at increased risk of glaucoma, warns the NEI, and the risk of glaucoma increases slightly with each year of age. If you're African-American, your increase in risk begins at age 40.",
  },
  {
    title: "Ethnicity",
    desc: "African-Americans or people of African descent are significantly more likely to develop glaucoma than Caucasians. People of Asian descent are at a higher risk of angle-closure glaucoma, and people of Japanese descent have a higher risk of developing low-tension glaucoma.",
  },
  {
    title: "Eye Problems",
    desc: "Chronic eye inflammation and thin corneas can lead to increased pressure in your eyes. Physical injury or trauma to your eye can also cause your eye pressure to increase.",
  },
  {
    title: "Family History",
    desc: "Some types of glaucoma may run in families. If your parent or grandparent had open-angle glaucoma, you're at an increased risk of developing this condition.",
  },
  {
    title: "Medical History",
    desc: "People with diabetes and those with high blood pressure and heart disease have an increased risk of developing glaucoma.",
  },
  {
    title: "Use of Certain Medicines",
    desc: "Using corticosteroids for extended periods may increase your risk of developing secondary glaucoma.",
  },
];

const diagnosisTests = [
  { title: "Tonometry Test", desc: "This class of tests measures your eye's internal pressure." },
  { title: "Pachymetry Test", desc: "People with corneas have an increased risk of developing glaucoma. A pachymetry test can tell your doctor if your corneas are thinner than average." },
  { title: "Perimeter Test", desc: "This test, also known as a visual field test, can tell your doctor if glaucoma is affecting your vision by measuring your peripheral, and central vision." },
  { title: "Glaucoma OCT", desc: "It tells you the amount of damage that has happened to your optic nerve by glaucoma" },
  { title: "Monitoring Your Optic Nerve", desc: "If your doctor wants to monitor for gradual changes to your optic nerve, they may take photographs of your optic nerve to conduct a side-by-side comparison over time." },
];

function Section({ title, children }) {
  return (
    <div className="mb-12">
      <h4 className="text-secondary mb-3">{title}</h4>
      {children}
    </div>
  );
}

export default function Glaucoma() {
  return (
    <main>
      <PageBanner title="Glaucoma" crumb="Glaucoma" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <img src={glaucomaCompareImg} alt="Normal optic nerve vs Optic nerve with glaucoma" className="w-full rounded-md" />
          <p className="text-gray-600">
            Glaucoma is an eye disorder that leads to progressive damage to the optic nerve.
            People with glaucoma can lose nerve tissue, resulting in gradual vision loss. The
            optic nerve is a bundle of about a million individual nerve fibers that transmits
            the visual signals from the eye to the brain.
            <br /><br />
            Primary open-angle glaucoma causes an increase in pressure of the eye which causes
            progressive damage to the optic nerve and loss of nerve fibers. This can also
            happen in patients with normal eye pressures and often goes undetected. Advanced
            glaucoma and end-stage glaucoma leads to irreversible blindness.
          </p>
        </div>

        <Section title="Symptoms">
          <p className="text-gray-600 !text-[18px] mb-3">
            The most common type of glaucoma is primary open-angle glaucoma. It has no signs or
            symptoms except gradual vision loss which can go undetected most of the time. For
            that reason, it's important that you get a yearly comprehensive eye exam by your
            ophthalmologist.
            <br />
            Acute angle-closure glaucoma, also known as narrow-angle glaucoma, is a medical
            emergency. See your doctor immediately if you experience any of the following
            symptoms:
          </p>
          <ul className="list-disc list-inside text-gray-600 !text-[18px] space-y-1">
            <li>Severe eye pain</li>
            <li>Nausea</li>
            <li>Vomiting</li>
            <li>Redness in your eye</li>
            <li>Sudden vision disturbances</li>
            <li>Seeing colored rings around lights</li>
            <li>Sudden blurred vision</li>
          </ul>
        </Section>

        <Section title="Causes">
          <p className="text-gray-600 !text-[18px] mb-3">
            Aqueous humor is a clear fluid produced from the eye which leaves the eye through
            the trabecular meshwork. If these channels are blocked or partially obstructed, the
            natural pressure in your eye, which is called intraocular pressure (IOP), may
            increase. As your IOP increases, your optic nerve may become damaged. As damage to
            your nerve progresses, you may begin to lose sight of your eye.
          </p>
          <p className="text-gray-600 !text-[18px] mb-2">risk factors for glaucoma</p>
          <ol className="list-decimal list-inside text-gray-600 !text-[18px] space-y-1">
            <li>Glaucoma is more common in hypermetropes.</li>
            <li>Blocked or restricted drainage in your eye</li>
            <li>Medications, such as corticosteroids</li>
            <li>Poor or reduced blood flow to your optic nerve</li>
            <li>Genetics</li>
          </ol>
        </Section>

        <Section title="Types">
          <p className="text-gray-600 !text-[18px] mb-5">Five major types of glaucoma exist. These are:</p>
          <div className="space-y-5">
            {glaucomaTypes.map((t) => (
              <div key={t.title}>
                <p className="text-primary font-semibold !text-[18px] mb-1">{t.title}</p>
                <p className="text-gray-600 !text-[18px]">{t.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Risk Factor">
          <p className="text-gray-600 !text-[18px] mb-5">
            According to the World Health Organization (WHO), glaucoma is the second leading
            cause of blindness around the world. The risk factors for glaucoma include:
          </p>
          <div className="space-y-5">
            {riskFactors.map((r) => (
              <div key={r.title}>
                <p className="text-primary font-semibold !text-[18px] mb-1">{r.title}</p>
                <p className="text-gray-600 !text-[18px]">{r.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Prevention">
          <p className="text-gray-600 !text-[18px]">
            Glaucoma can't be prevented, but it's still important to detect it early so you can
            begin treatment that will help prevent it from progressing. The best way to detect
            any type of glaucoma is to have an annual preventive eye care appointment. Make an
            appointment with an ophthalmologist. Simple tests performed during these routine eye
            checks may be able to detect damage from glaucoma before it advances and begins
            causing vision loss.
          </p>
        </Section>

        <Section title="Diagnosis">
          <p className="text-gray-600 !text-[18px] mb-5">
            Your doctor will want to know what symptoms you've been experiencing and if you have
            any personal or family history of glaucoma. They'll also ask for a general health
            assessment to determine if any other health conditions may be impacting your eye
            health, such as diabetes or high blood pressure.
          </p>
          <div className="space-y-5">
            {diagnosisTests.map((d) => (
              <div key={d.title}>
                <p className="text-primary font-semibold !text-[18px] mb-1">{d.title}</p>
                <p className="text-gray-600 !text-[18px]">{d.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Treatment">
          <p className="text-gray-600 !text-[18px] mb-5">
            The goal of glaucoma treatment is to reduce IOP to stop any additional vision loss.,
            your doctor may suggest one of the following treatments:
          </p>
          <p className="text-primary font-semibold !text-[18px] mb-1">Medications</p>
          <p className="text-gray-600 !text-[18px] mb-5">
            Several medicines designed to reduce IOP are available. These medicines are
            available in the form of eye drops or pills, but the drops are more common. Your
            doctor may prescribe one or a combination of these.
          </p>
          <p className="text-primary font-semibold !text-[18px] mb-1">Surgery</p>
          <p className="text-gray-600 !text-[18px]">
            If a blocked or slow channel is causing increased IOP, your doctor may suggest
            surgery to make a drainage path for fluid or destroy tissues that are responsible
            for the increased fluid.
            <br />
            Treatment for angle-closure glaucoma is different. This type of glaucoma is a
            medical emergency and requires immediate treatment to reduce eye pressure as
            quickly as possible. Medicines are usually attempted first, to reverse the angle
            closure, but this may be unsuccessful. A laser procedure called laser peripheral
            iridotomy may also be performed. This procedure creates small holes in your iris to
            allow for increased fluid movement.
            <br />
            If intraocular pressure is reduced, vision loss can be slowed or even stopped.
          </p>
        </Section>
      </section>
    </main>
  );
}
