import PageBanner from "../components/PageBanner";
import cataractImg from "../assets/img/Cataract-new-min.jpg";

const symptoms = [
  "Blurred vision", "Trouble seeing at night", "Fading of colors", "Increased sensitivity to light",
  "Halos surrounding lights", "Double vision in the affected eye", "Need for frequent changes in prescription glasses",
];

const causes = [
  "Excess of oxidants,", "smoking", "ultraviolet radiation",
  "the long-term use of steroids and other medications", "certain diseases, such as diabetes", "trauma", "radiation therapy",
];

const riskFactors = [
  "Older age", "Heavy alcohol use", "Smoking", "Obesity", "High blood pressure", "Previous eye injuries",
  "A family history of cataracts", "Too much sun exposure", "Diabetes", "Exposure to radiation from x-rays and cancer treatments",
];

const prevention = [
  "Protect your eyes from UV rays by wearing sunglasses outside", "Have regular eye exams", "Stop smoking",
  "Eat fruits and vegetables that contain antioxidants", "Maintain a healthy weight", "Keep diabetes and other medical conditions in check",
];

function List({ items }) {
  return (
    <ul className="list-disc list-inside text-gray-600 !text-[18px] space-y-1">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

export default function Cataract() {
  return (
    <main>
      <PageBanner title="Cataract" crumb="Cataract" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <img src={cataractImg} alt="Cataract affected eye" className="w-full rounded-md" />
          <p className="text-gray-600">
            A cataract is a dense, cloudy area that forms in the lens of the eye. A cataract
            begins when proteins in the eye form clumps that prevent the lens from sending
            clear images to the retina. The retina works by converting the light that comes
            through the lens into signals. It sends signals to the optic nerve, which carries
            them to the brain.
            <br /><br />
            It develops slowly and eventually interferes with your vision. Cataracts are
            common in older people usually over 60 years of age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h4 className="text-secondary mb-3">Symptoms</h4>
            <p className="text-gray-600 !text-[18px] mb-3">Common symptoms of cataracts include:</p>
            <List items={symptoms} />
          </div>
          <div>
            <h4 className="text-secondary mb-3">Causes</h4>
            <p className="text-gray-600 !text-[18px] mb-3">There are several underlying causes of cataracts. These include:</p>
            <List items={causes} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h4 className="text-secondary mb-3">Risk Factors</h4>
            <p className="text-gray-600 !text-[18px] mb-3">Risk factors associated with cataracts include:</p>
            <List items={riskFactors} />
          </div>
          <div>
            <h4 className="text-secondary mb-3">Prevention</h4>
            <p className="text-gray-600 !text-[18px] mb-3">To reduce your risk of developing cataracts</p>
            <List items={prevention} />
          </div>
        </div>

        <div className="mb-10">
          <h4 className="text-secondary mb-3">Diagnosis</h4>
          <p className="text-gray-600 !text-[18px]">
            Your doctor will perform a comprehensive eye exam to check for cataracts and to
            assess your vision. This will include vision testing and tonometry to measure your
            eye pressure.
            <br />
            Your doctor will also put drops in your eyes to make your pupils dilate. This makes
            it easier to check the optic nerve and retina behind the eye for damage.
            <br />
            Other tests your doctor might perform include checking your sensitivity to glare
            and your perception of colors.
          </p>
        </div>

        <div>
          <h4 className="text-secondary mb-3">Treatment:</h4>
          <p className="text-primary font-semibold !text-[18px] mb-2">Surgery</p>
          <p className="text-gray-600 !text-[18px]">
            Surgery is recommended when cataracts prevent you from going about your daily
            activities, such as reading or driving. It's also performed when cataracts
            interfere with the treatment of other eye problems.
            <br />
            One surgical method, known as phacoemulsification, involves the use of ultrasound
            waves to break the cataract and remove the pieces
            <br />
            Small incision cataract Extracapsular surgery involves removing the cloudy part of
            the lens through an incision in the corneoscleral junction. After surgery, an
            artificial intraocular lens is introduced into the eye.
            <br />
            Surgery to remove a cataract is generally very safe and has a high success rate.
            Most people can go home the same day as their surgery.
          </p>
        </div>
      </section>
    </main>
  );
}
