import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";

export default function InsuranceClaim() {
  return (
    <main>
      <PageBanner title="Insurance Claim" crumb="Insurance Claim" />

      <section className="max-w-[1320px] mx-auto px-4 py-16">
        <p className="text-gray-600 mb-6">
          Given the fact that eye surgery may turn out to be a costly affair, it is best to know
          if your health insurance covers the expenses or not.
        </p>
        <ol className="list-decimal list-inside text-gray-600 mb-8">
          <li>
            To assist our patients with the insurance coverage, we have partnered with a number
            of Insurance Companies, State and central government undertakings to provide
            benefits to our patients. Kindly contact the hospital for more details.
          </li>
        </ol>
        <Link to="/contacts" className="inline-flex items-center gap-3 text-primary font-semibold !text-[16px]">
          Contact Us
          <span className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center">
            <ArrowRight size={16} />
          </span>
        </Link>
      </section>
    </main>
  );
}
