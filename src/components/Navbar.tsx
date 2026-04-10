import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/info", label: "Info" },
  { to: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const location = useLocation();

  return (
<nav role="navigation" aria-label="Main navigation" className="sticky top-0 z-50 bg-gradient-bw backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Friends of TUT logo" className="h-12 w-12 rounded-lg object-cover" />
          <span className="font-display text-2xl tracking-wider text-white">
            FRIENDS <span className="text-[#FF6FA1]">OF TUT</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
  {[...links, { to: "/crew", label: "Crew" }].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="glass-card px-4 py-2 font-display text-lg tracking-wide hover-glow rounded-full text-white hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white p-2 hover-glow">
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0 bg-gradient-bw w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Friends of TUT logo" className="h-10 w-10 rounded-lg object-cover" />
                <span className="font-display text-xl tracking-wider text-white">
                  FRIENDS OF TUT
                </span>
              </Link>
              <button className="text-white hover-glow">
                <X size={28} />
              </button>
            </div>
            <div className="p-4 flex flex-col space-y-4">
            {[...links, { to: "/crew", label: "Crew" }].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="glass-card py-3 px-4 font-display text-xl tracking-wide text-white hover-glow hover:bg-white/20 rounded-full transition-all block"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

