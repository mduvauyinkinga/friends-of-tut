import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-bw text-white py-12">
    <div className="container grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-2xl mb-3">
          <span className="text-white">FRIENDS</span> <span className="text-[#FF6FA1]">OF TUT</span>
        </h3>
        <p className="text-sm leading-relaxed text-white/90">
          A student-led creative movement at TUT — uniting Fashion, Media, Music & Content Creation.
        </p>
      </div>
      <div>
        <h4 className="font-display text-xl text-white mb-3">QUICK LINKS</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/about" className="hover:text-[#FF6FA1] transition-colors text-white/90 hover:underline">About Us</Link>
          <Link to="/events" className="hover:text-[#FF6FA1] transition-colors text-white/90 hover:underline">Events</Link>
          <Link to="/gallery" className="hover:text-[#FF6FA1] transition-colors text-white/90 hover:underline">Gallery</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-xl text-white mb-3">CONNECT</h4>
        <div className="flex flex-col gap-2 text-sm">
          <a href="https://instagram.com/friends_of.tut/" className="flex items-center gap-2 hover:text-[#FF6FA1] transition-colors text-white/90 hover:underline" target="_blank" rel="noopener noreferrer">
            <Instagram size={16} /> @friends_of.tut
          </a>
          <a href="mailto:friendsoftut@gmail.com" className="flex items-center gap-2 hover:text-[#FF6FA1] transition-colors text-white/90 hover:underline">
            <Mail size={16} /> friendsoftut@gmail.com
          </a>
          <span className="flex items-center gap-2 text-white/90">
            <MapPin size={16} /> Tshwane University of Technology
          </span>
        </div>
      </div>
    </div>
    <div className="container mt-8 pt-6 border-t border-white/20 text-center text-xs text-white/70">
      © {new Date().getFullYear()} Friends of TUT & Mduvauyinkinga Studio. All rights reserved.
    </div>
  </footer>
);

export default Footer;

