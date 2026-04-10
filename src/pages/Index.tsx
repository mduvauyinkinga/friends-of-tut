import { Link } from "react-router-dom";
import { ArrowRight, Users, Camera, Music, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const departments = [
  { icon: <Users size={32} className="text-primary-foreground" />, name: "Fashion", desc: "Setting trends and redefining campus style." },
  { icon: <Camera size={32} className="text-primary-foreground" />, name: "Media & Content", desc: "Capturing moments and telling our story." },
  { icon: <Music size={32} className="text-primary-foreground" />, name: "Music", desc: "Curating the sound of the movement." },
  { icon: <Calendar size={32} className="text-primary-foreground" />, name: "Events", desc: "Activations, workshops & unforgettable experiences." },
];

import SEO from "@/components/SEO";

const Index = () => (
  <>
    <SEO title="Friends of TUT" description="Student-led creative movement at Tshwane University of Technology — Fashion, Media, Music & Culture" />
    {/* Hero */}
    <section className="bg-white relative overflow-hidden">
      <div className="container py-20 md:py-32 flex flex-col items-center text-center relative z-10">
        <img src={logo} alt="Friends of TUT" className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-2xl shadow-2xl mb-8 animate-fade-in" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-none mb-4">
FRIENDS OF TUT
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-8 font-body">
          A student-led creative movement — Fashion, Media, Music & Culture at Tshwane University of Technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#F8BBD9] to-white text-black hover:from-[#F48FB1] hover:to-gray-100 font-display text-lg tracking-wide shadow-lg rounded-full px-8">
            <Link to="/events">Upcoming Events <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-black to-white text-black hover:from-gray-800 hover:to-gray-100 font-display text-lg tracking-wide shadow-lg rounded-full px-8">
            <Link to="/gallery">View Gallery <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
    </section>

    {/* Departments */}
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center mb-12">OUR DEPARTMENTS</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((d) => (
            <div key={d.name} className="group p-6 rounded-xl border border-border bg-card hover:border-primary transition-colors">
              <div className="w-14 h-14 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:gradient-lime transition-all">
                {d.icon}
              </div>
              <h3 className="text-2xl mb-2">{d.name}</h3>
              <p className="text-muted-foreground text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-white py-16">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl text-primary-foreground mb-4">EVENTS CHECKLIST</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Stay updated with our upcoming events, workshops, and campus activations. Check dates, locations, and RSVP.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-black to-white text-black hover:from-gray-800 hover:to-gray-100 font-display text-lg tracking-wide shadow-lg rounded-full px-8">
          <Link to="/events">Latest Events <ArrowRight className="ml-2" size={18} /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Index;

