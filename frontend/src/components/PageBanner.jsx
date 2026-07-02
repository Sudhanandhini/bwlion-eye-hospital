import { Link } from "react-router-dom";
import lionseyeLogo from "../assets/img/download.png";

export default function PageBanner({ title, crumb }) {
  return (
    <section className="bg-[#FAF1DC]">
      <div className="max-w-[1320px] mx-auto px-4 py-10 flex items-center justify-between gap-6">
        <div>
          <h1 className="text-primary mb-3">{title}</h1>
          <div className="flex items-center gap-2 !text-[15px]">
            <Link to="/" className="text-gray-500 hover:text-secondary">Home</Link>
            <span className="text-secondary">›</span>
            <span className="text-secondary font-semibold">{crumb || title}</span>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center select-none">
          <img src={lionseyeLogo} alt="LionsEye Logo" className="w-[150px] h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
