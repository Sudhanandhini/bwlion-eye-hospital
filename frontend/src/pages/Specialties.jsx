import { Eye, ArrowRight, ShieldPlus } from "lucide-react";
import PageBanner from "../components/PageBanner";
import heroImg1 from "../assets/img/ptt_default.jpg";


const specialties = [
  {
    title: "Cataract Clinic",
    desc: "A cataract is a common eye disorder predominantly seen in the elderly age group. Cataract surgery is a procedure to remove the opaque lens of the eye and replace it with an artificial lens. Normally, the lens of your eye is clear. A cataract causes the lens to become cloudy, which eventually affects your vision. BW Lions Super Speciality Eye Hospital offers Cataract Surgery with the latest technology and implantation of a wide range of IOLs including Aspheric, Multifocal, trifocal and toric.",
  },
  {
    title: "Contact Lens and Low Visual Aids",
    desc: "BW Lions Super Speciality Eye Hospital is equipped with Contact Lens Clinic to examine, prescribe, and fit patients with contact lenses. Our Contact Lens Clinic is equipped with all necessary devices to provide the ideal fit. Click here to know more about Contact lenses and Low Visual Aids.",
  },
  {
    title: "Cornea and Refractive Surgery",
    desc: "Cornea and Refractive Surgery Bangalore West Super Specialty Eye Hospital houses a specialized Cornea Clinic with associated Eye Bank facilities. Our Eye Hospital provides quality medical and surgical care to a wide range of corneal issues with utmost care with the state of the art equipment, latest technology, by maintaining International standards. You can directly visit our cornea clinic for treatment or a second opinion and we assure you of the best service.",
  },
  {
    title: "Glaucoma",
    desc: "BW Lions Eye Hospital offers state-of-the-art medical, surgical, and laser treatment for Glaucoma. Glaucoma is a progressive disease of the optic nerve due to high or normal intraocular pressure. There are various treatment procedures available and the hospital is equipped to provide treatment for all types of glaucoma by Medical, Surgical, or Laser therapy.",
  },
  {
    title: "Oculoplasty",
    desc: "Oculoplasty services aim to correct eyelids and structures around the eye that are critical for vision. BW Lions Super Speciality Eye Hospital offers treatment for disorders of Eyelids, Eyebrows, Eye sockets, and lacrimal systems.",
  },
  {
    title: "Pediatric Eye Disorders",
    desc: "The Pediatric department is completely equipped for a comprehensive examination of pediatric eyes with experienced doctors to deal with a wide variety of pediatric eye conditions. The facilities available in the Hospital for Pediatric Ophthalmology include Comprehensive eye examination for early detection of various conditions like refractive errors, congenital cataracts, squint, etc, and its management. We also have school screening programs for the early detection of eye problems.",
  },
  {
    title: "Uveitis",
    desc: "BW Lions Super Speciality Eye Hospital houses expert doctors to treat Uveitis. The Uvea Clinic works in tandem with the vireo-retina department in the diagnosis, categorization, and management.",
  },
  {
    title: "Vitreo Retina",
    desc: "The Vitreo-retina unit deals with the diagnosis, evaluation, and management of diseases related to the vitreous and retina including diabetic retinopathy, age-related macular degeneration, vascular occlusions, and retinal detachment.",
  },
  {
    title: "Laboratory",
    desc: "The hospital provides laboratory investigations required for patient care to ensure readiness for eye surgery. This includes tests related to hematology, biochemistry, and microbiology. The qualitative and quantitative analyses of biological fluids such as blood, serum or plasma, urine, etc. are performed. The lab places a special emphasis on accuracy, precision, reproducibility, and quick results. We are certified by the CMC quality assurance scheme.",
  },
  {
    title: "Opticals",
    desc: "The BW Lions Super Speciality Eye Hospital has an in-house Optical Store which stocks a wide range of frames, sunglasses, post-operative glasses, lenses, safety eyewear, contact lenses, and other eye care accessories. World-class quality lenses are available for dispensing at competitive rates.",
  },
  {
    title: "Pharmacy",
    desc: "The pharmacy is located within the hospital premises and is well-stocked with the latest and best quality Ophthalmic drugs for a wide range of eye problems. All the drugs sold here are sourced only from approved suppliers and manufacturers. All approved manufacturers possess a WHO-GMP certification.",
  },
  {
    title: "Eye Bank",
    desc: "Established as Netrajyoti Eye Bank on 30th June 1984, the Eye Bank was renamed to Lions International Eye bank in 1995 soon after receiving the affiliation from IFETB. Additionally, the eye bank was accredited with EBAI in 1990 and registered with the Govt. of Karnataka under the HOTA (Human Organ Transplantation Act) of 1994.",
  },
];

export default function Specialties() {
  return (
    <main>
      <PageBanner title="Specialties" crumb="Specialties" />

      <section
        className="relative bg-primary text-white"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-[1320px] mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-14">
            <div>
              <span className="block w-10 h-1 bg-secondary mb-4" />
              <h2 className="max-w-xl">
                BW Lions Hospital Has Touched The Lives Of Patients by Providing World Class Eye Care
              </h2>
            </div>
            <div className="flex gap-4">
              <ShieldPlus size={36} className="text-secondary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Specialties</h4>
                <p className="text-gray-300 !text-[16px]">
                  We have been advancing with the latest technological trends to impart the best
                  service at an affordable cost. We serve all kinds of eye Disorders from the
                  correction of refractive errors to complex eye surgeries. Here is a list of our
                  services.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {specialties.map((sp) => (
              <div key={sp.title} className="relative bg-white rounded-md p-7 pb-16 min-h-[220px]">
                <div className="w-14 h-14 rounded-full border-2 border-secondary/40 flex items-center justify-center mb-4">
                  <Eye size={22} className="text-primary" />
                </div>
                <h4 className="text-secondary mb-2">{sp.title}</h4>
                <p className="text-primary/70 !text-[15px]">{sp.desc}</p>
                <a
                  href="#"
                  aria-label={`Know more about ${sp.title}`}
                  className="absolute left-7 bottom-6 w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
