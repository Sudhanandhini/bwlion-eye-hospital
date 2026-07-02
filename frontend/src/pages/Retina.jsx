import { Eye } from "lucide-react";
import PageBanner from "../components/PageBanner";
import retinaCompareImg from "../assets/img/retina (1).webp";

const points = [
  "A complication of diabetes that affects the eyes.",
  "Diabetic retinopathy is caused by damage to the blood vessels in the tissue at the back of the eye (retina). Poorly controlled blood sugar is a risk factor.",
  "Early symptoms include floaters, blurriness, dark areas of vision, and difficulty perceiving colors. Blindness can occur.",
  "Mild cases may be treated with careful diabetes management. Advanced cases may require laser treatment or surgery.",
];

export default function Retina() {
  return (
    <main>
      <PageBanner title="Retina" crumb="Retina" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            {points.map((p) => (
              <div key={p} className="flex gap-3">
                <Eye size={20} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-600 !text-[18px]">{p}</p>
              </div>
            ))}
          </div>
          <img src={retinaCompareImg} alt="Normal Retina vs Diabetic Retina" className="w-full rounded-md" />
        </div>
      </section>
    </main>
  );
}
