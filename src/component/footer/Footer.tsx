import { FC } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="w-8 h-8 bg-black rounded-sm"></div>
              <span className="font-semibold text-lg">Little Learners</span>
            </div>
            <p className="text-sm text-gray-600">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
            <div className="space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <Mail size={18} /> hello@littlelearners.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} /> +91 91813 23 2309
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Somewhere in the World
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-3">Home</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Our Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Awards and Recognitions</li>
              <li>History</li>
              <li>Teachers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Academics</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Special Features</li>
              <li>Gallery</li>
            </ul>
            <h4 className="font-semibold mt-6 mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Information</li>
              <li>Map & Direction</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex flex-wrap gap-4">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 border border-gray-400 rounded bg-[#fdece4] hover:bg-[#fcd2c7]"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-400 rounded bg-[#fdece4] hover:bg-[#fcd2c7]"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 border border-gray-400 rounded bg-[#fdece4] hover:bg-[#fcd2c7]"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
