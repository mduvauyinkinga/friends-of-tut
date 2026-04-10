import { Users, Camera, Music, Calendar } from "lucide-react";

import SEO from "@/components/SEO";

const About = () => (
  <>
    <SEO title="About Us" description="Discover Friends of TUT — student-led creative movement based at Tshwane University of Technology" />
    <section className="gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">ABOUT US</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Discover what Friends of TUT is all about and why we do what we do.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl space-y-10">
<div aria-labelledby="who-we-are">
          <h2 id="who-we-are" className="text-2xl md:text-3xl mb-4 font-bold text-foreground drop-shadow-md">WHO WE ARE</h2>
          <p className="text-muted-foreground leading-relaxed">
            Friends of TUT is a student-led creative movement based at Tshwane University of Technology. We are a collective of passionate individuals who believe in the power of creativity, culture, and community. Our movement brings together students from all walks of life who share a common love for fashion, media, music, and content creation.
          </p>
        </div>

<div aria-labelledby="our-mission">
          <h2 id="our-mission" className="text-2xl md:text-3xl mb-4 font-bold text-foreground drop-shadow-md">OUR MISSION</h2>
          <p className="text-muted-foreground leading-relaxed">
            To create a vibrant platform where students can express their creativity, build meaningful connections, and develop skills that extend beyond the classroom. We aim to foster a culture of innovation, collaboration, and excellence within the TUT community.
          </p>
        </div>

<div aria-labelledby="our-vision">
          <h2 id="our-vision" className="text-2xl md:text-3xl mb-4 font-bold text-foreground drop-shadow-md">OUR VISION</h2>
          <p className="text-muted-foreground leading-relaxed">
            To be the leading student creative movement in South Africa — inspiring, empowering, and elevating young creatives through events, content, and community-driven initiatives.
          </p>
        </div>

<div aria-labelledby="what-we-do">
          <h2 id="what-we-do" className="text-2xl md:text-3xl mb-4 font-bold text-foreground drop-shadow-md">WHAT WE DO</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: <Users size={32} className="text-primary-foreground" />, title: 'Fashion', text: 'Pop-up shows, styling workshops, and trend-setting on campus.' },
              { icon: <Camera size={32} className="text-primary-foreground" />, title: 'Media & Content', text: 'Photography, videography, and digital storytelling.' },
              { icon: <Music size={32} className="text-primary-foreground" />, title: 'Music', text: 'Live sessions, DJ sets, and music curation for events.' },
              { icon: <Calendar size={32} className="text-primary-foreground" />, title: 'Events & Activations', text: 'Campus activations, networking events, and creative workshops.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#F8BBD9] via-[#F8BBD9]/80 to-purple-400 shadow-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground drop-shadow-sm flex-1">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;

