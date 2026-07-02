import { useState } from "react";
import PageBanner from "../components/PageBanner";
import anteriorUveitisImg from "../assets/img/uveitis-min.jpg";

const causeTabs = [
  {
    label: "An autoimmune disease occurs when your immune system attacks part of your body. Autoimmune conditions that may be associated with uveitis include:",
    items: ["Rheumatoid arthritis", "Ankylosing spondylitis", "Psoriasis", "Arthritis", "Ulcerative colitis", "Kawasaki disease", "Crohn's disease", "Sarcoidosis"],
  },
  {
    label: "Infections are another cause of uveitis, including:",
    items: ["Aids", "Herpes", "Cmv retinitis", "Syphilis", "Tuberculosis", "Histoplasmosis"],
  },
  {
    label: "Other potential causes of uveitis include:",
    items: ["Exposure to a toxin that penetrates the eye", "Bruising", "Injury", "Trauma"],
  },
];

export default function Uveitis() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <PageBanner title="Uveitis" crumb="Uveitis" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <img src={anteriorUveitisImg} alt="Anterior Uveitis" className="w-full" />
          <p className="text-gray-600">
            Uveitis is swelling of the middle layer of the eye, which is called the uvea. It
            may occur from both infectious and non-infectious causes. The uvea supplies blood
            to the retina. The retina is the light-sensitive part of the eye that focuses the
            images you see and sends them to the brain. It's normally red due to its blood
            supply from the uvea.. severe cases can cause vision loss if not treated early.
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-secondary mb-3">Symptoms</h4>
          <p className="text-gray-600 !text-[18px] mb-3">The following symptoms may occur in one or both eyes:</p>
          <ul className="list-disc list-inside text-gray-600 !text-[18px] space-y-1">
            <li>severe redness in the eye</li>
            <li>pain</li>
            <li>dark floating spots in your vision, called floaters</li>
            <li>light sensitivity</li>
            <li>blurred vision</li>
          </ul>
        </div>

        <div className="mb-10">
          <h4 className="text-secondary mb-3">Causes</h4>
          <p className="text-gray-600 !text-[18px] mb-5">
            The cause of uveitis is often unknown and frequently occurs in otherwise healthy
            people. It can sometimes be associated with another illness such as an autoimmune
            disorder or an infection from a virus or bacteria.
          </p>

          <div className="border border-gray-200 rounded-md overflow-hidden grid sm:grid-cols-[1fr_1fr]">
            <div>
              {causeTabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`relative w-full text-left p-4 !text-[14px] font-medium border-t border-gray-200 first:border-t-0 transition-colors ${
                    activeTab === i ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                  {activeTab === i && (
                    <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-primary" />
                  )}
                </button>
              ))}
            </div>
            <ul className="p-4 !text-[14px] text-gray-600 space-y-1 self-start">
              {causeTabs[activeTab].items.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h4 className="text-secondary mb-3">Prevention</h4>
          <p className="text-gray-600 !text-[18px]">
            Seeking proper treatment for an autoimmune disease or infection can help to prevent
            uveitis. Uveitis in otherwise healthy people is difficult to prevent since the
            cause isn't known.
            <br />
            Early detection and treatment are important to reduce the risk of vision loss,
            which can be permanent.
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-secondary mb-3">Diagnosis</h4>
          <p className="text-gray-600 !text-[18px]">
            Your eye surgeon, also called an ophthalmologist, will examine your eye and take a
            complete health history.
            <br />
            They may also order certain laboratory tests to rule out an infection or
            autoimmune disorder. Your ophthalmologist may refer you to another specialist if
            they suspect an underlying condition is causing your uveitis.
          </p>
        </div>

        <div>
          <h4 className="text-secondary mb-3">Treatment</h4>
          <p className="text-gray-600 !text-[18px]">
            Treatment for uveitis depends on the cause and the type of uveitis. Usually, it's
            treated with eye drops. If uveitis is caused by another condition, treating that
            underlying condition may eliminate the uveitis. The goal of treatment is to reduce
            inflammation in the eye.
            <br />
            Here are the common treatment options for each type of uveitis:
            <br /><br />
            Treatment for anterior uveitis, or iritis, includes dark glasses, eye drops to
            dilate the pupil and reduce pain, and steroid eye drops to reduce inflammation or
            irritation.
            <br />
            Treatment for posterior uveitis may include steroids taken by mouth, injections
            around the eye, and visits to additional specialists to treat the infection or
            autoimmune disease. A body-wide bacterial infection is usually treated with
            antibiotics.
            <br />
            Treatment for intermediate uveitis includes steroid eye drops and steroids taken by
            mouth and injections in the eye
          </p>
        </div>
      </section>
    </main>
  );
}
