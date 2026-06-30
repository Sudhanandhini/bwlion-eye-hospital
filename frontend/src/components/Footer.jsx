import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SocialIcons";
import bwLogo from "../assets/img/bw-logo-320-grey-300x75.png";

const otherLinks = ["Insurance Claim", "Career", "Gallery"];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1320px] mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={bwLogo} alt="BW Lions Logo" className="w-[250px] h-auto object-contain rounded-full flex-shrink-0" />
              {/* <div className="leading-tight">
                <p className="!text-[13px] font-bold uppercase m-0 tracking-wide">Bangalore West Lions</p>
                <p className="!text-[13px] font-bold uppercase m-0 tracking-wide">Super Speciality</p>
                <p className="!text-[13px] font-bold uppercase m-0 tracking-wide">Eye Hospital</p>
              </div> */}
            </div>
            <p className="text-gray-300 !text-[16px] mb-5">
              Our goal is to deliver quality of care in a courteous, respectful, and
              compassionate manner. We hope you will allow us to care for you and
              strive to be the first and best choice for your family Eyecare.
            </p>
            <a href="/contacts" className="inline-flex items-center gap-2 text-secondary font-semibold my-5 "
            style={{color: '#FE9601'}}>
              <ArrowRight size={16} /> Make Appointment
            </a>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-white mb-5">Other Links</h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-secondary text-[16px]">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-5">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary text-[16px]">Eye Bank</a>
              </li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div className="bg-white text-primary rounded-md p-6">
            <h4 className="mb-3">Quick Contacts</h4>
            <p className="!text-[15px] text-gray-600 mb-5">
              If you have any questions or need help, feel free to contact us for medical assistance.
            </p>
            <div className="space-y-3 mb-5">
              <a href="tel:08022237628" className="flex items-center gap-3 font-semibold">
                <Phone size={18} className="text-primary" /> 080-22237628
              </a>
              <a href="tel:+918618292449" className="flex items-center gap-3 font-semibold">
                <MessageCircle size={18} className="text-primary" /> +91-86182-92449
              </a>
              <a href="tel:+917019942982" className="flex items-center gap-3 font-semibold">
                <MessageCircle size={18} className="text-primary" /> +91-70199-42982
              </a>
            </div>
            <p className="!text-[15px] text-gray-600 mb-4">
              #5, Lions Eye Hospital Road, Off. JC Road, Bangalore – 560002
            </p>
            <div className="flex items-center justify-between">
              <a href="#" className="inline-flex items-center gap-2 text-secondary font-semibold">
                <ArrowRight size={16} /> Get Directions
              </a>
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                  <FacebookIcon size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                  <InstagramIcon size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                  <TwitterIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-primary">
        <div className="max-w-[1320px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="!text-[14px] text-gray-500 m-0">© Copyright 2021 BWLSSEH, All Rights Reserved.</p>
          <p className="!text-[14px] text-gray-500 m-0">
            Crafted By <a href="https://sunsys.in" className="text-secondary font-medium">Sunsys Technologies India Pvt. Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
