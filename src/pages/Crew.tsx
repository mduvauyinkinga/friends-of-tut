import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sections = {
  Leadership: [
    { name: "EAZY_WEEZY", role: "Chairman", img: "/src/assets/Leadership/EAZY_WEEZY.jpeg", social: "@eazyweezy" },
    { name: "MOVIE", role: "Deputy Chairman", img: "/src/assets/Leadership/MOVIE.jpeg", social: "@movie" },
    { name: "SIBAHLESONKEEE", role: "Treasure", img: "/src/assets/Leadership/SIBAHLESONKEEE.jpeg", social: "@sibahlesonkeee" },
    { name: "SIMP4PHINDILE", role: "Secretary", img: "/src/assets/Leadership/SIMP4PHINDILE.jpeg", social: "@simp4phindile" },
    { name: "DONKA_KREATES", role: "Deputy Secretary", img: "/src/assets/Leadership/DONKA_KREATES.jpeg", social: "@donka_kreates" },
  ],
  Ambassadors: [
    { name: "_NOT.SNOWIE", role: "Ambassador", img: "/src/assets/Ambassadors/_NOT.SNOWIE.jpeg", social: "@not.snowie" },
    { name: "BAENCANE", role: "Ambassador", img: "/src/assets/Ambassadors/BAENCANE.jpeg", social: "@baencane" },
    { name: "BARBIE", role: "Ambassador", img: "/src/assets/Ambassadors/BARBIE.jpeg", social: "@barbie" },
    { name: "BATHI.UMDUVA.UYINKINGA", role: "Ambassador", img: "/src/assets/Ambassadors/BATHI.UMDUVA.UYINKINGA.jpeg", social: "@bathi_umduva" },
    { name: "CHARMAINE", role: "Ambassador", img: "/src/assets/Ambassadors/CHARMAINE.jpeg", social: "@charmaine" },
    { name: "CJBEST", role: "Ambassador", img: "/src/assets/Ambassadors/CJBEST.jpeg", social: "@cjbest" },
    { name: "DON_PABLO", role: "Ambassador", img: "/src/assets/Ambassadors/DON_PABLO.jpeg", social: "@don_pablo" },
    { name: "GOT2LOVESK", role: "Ambassador", img: "/src/assets/Ambassadors/GOT2LOVESK.jpeg", social: "@got2lovesk" },
    { name: "HERSMILE", role: "Ambassador", img: "/src/assets/Ambassadors/HERSMILE.jpeg", social: "@hersmile" },
    { name: "KARABO", role: "Ambassador", img: "/src/assets/Ambassadors/KARABO.jpeg", social: "@karabo" },
    { name: "KAT LA ZONKE", role: "Ambassador", img: "/src/assets/Ambassadors/KAT LA ZONKE.jpeg", social: "@katlazonke" },
    { name: "KUTLOANO", role: "Ambassador", img: "/src/assets/Ambassadors/KUTLOANO.jpeg", social: "@kutloano" },
    { name: "LETHABO", role: "Ambassador", img: "/src/assets/Ambassadors/LETHABO.jpeg", social: "@lethabo" },
    { name: "NONKULULEKO", role: "Ambassador", img: "/src/assets/Ambassadors/NONKULULEKO.jpeg", social: "@nonkululeko" },
    { name: "NONO", role: "Ambassador", img: "/src/assets/Ambassadors/NONO.jpeg", social: "@nono" },
    { name: "NTHABII", role: "Ambassador", img: "/src/assets/Ambassadors/NTHABII.jpeg", social: "@nthabii" },
    { name: "PALESA", role: "Ambassador", img: "/src/assets/Ambassadors/PALESA.jpeg", social: "@palesa" },
    { name: "PRECIOUS", role: "Ambassador", img: "/src/assets/Ambassadors/PRECIOUS.jpeg", social: "@precious" },
    { name: "PRETTY BOUYY", role: "Ambassador", img: "/src/assets/Ambassadors/PRETTY BOUYY.jpeg", social: "@prettybouyy" },
    { name: "SDEEZO", role: "Ambassador", img: "/src/assets/Ambassadors/SDEEZO.jpeg", social: "@sdeezo" },
    { name: "SHALOM", role: "Ambassador", img: "/src/assets/Ambassadors/SHALOM.jpeg", social: "@shalom" },
    { name: "SHAUN", role: "Ambassador", img: "/src/assets/Ambassadors/SHAUN.jpeg", social: "@shaun" },
    { name: "SIHLE", role: "Ambassador", img: "/src/assets/Ambassadors/SIHLE.jpeg", social: "@sihle" },
    { name: "SUPRIMEL", role: "Ambassador", img: "/src/assets/Ambassadors/SUPRIMEL.jpeg", social: "@suprimel" },
    { name: "UNATHI", role: "Ambassador", img: "/src/assets/Ambassadors/UNATHI.jpeg", social: "@unathi" },
  ],
"Content Creators": [
    { name: "FANADEERSA", role: "Content Creator", img: "/src/assets/Content Creators/FANADEERSA.jpeg", social: "@fanadeersa" },
    { name: "KABELO", role: "Content Creator", img: "/src/assets/Content Creators/KABELO.jpeg", social: "@kabelo" },
    { name: "MellowDoeBoy", role: "Content Creator", img: "/src/assets/Content Creators/MellowDoeBoy.jpeg", social: "@mellowdoeboy" },
    { name: "SEASON", role: "Content Creator", img: "/src/assets/Content Creators/SEASON.jpeg", social: "@season" },
    { name: "BATHI.UMDUVA.UYINKINGA", role: "Content Creator", img: "/src/assets/Content Creators/BATHI.UMDUVA.UYINKINGA.jpeg", social: "@bathi_umduva" },
  ],
  "Fashion Models": [
    { name: "ALTEGANG", role: "Fashion Model", img: "/src/assets/Fashion Models/ALTEGANG.jpeg", social: "@altegang" },
    { name: "BATHI.UMDUVA.UYINKINGA", role: "Fashion Model", img: "/src/assets/Fashion Models/BATHI.UMDUVA.UYINKINGA.jpeg", social: "@bathi_umduva" },
    { name: "BOTHLALE", role: "Fashion Model", img: "/src/assets/Fashion Models/BOTHLALE.jpeg", social: "@bothlale" },
    { name: "GUGUU", role: "Fashion Model", img: "/src/assets/Fashion Models/GUGUU.jpeg", social: "@gu guu" },
    { name: "HAKEEM", role: "Fashion Model", img: "/src/assets/Fashion Models/HAKEEM.jpeg", social: "@hakeem" },
    { name: "KHUTSHO", role: "Fashion Model", img: "/src/assets/Fashion Models/KHUTSHO.jpeg", social: "@khutsho" },
    { name: "PRINNY", role: "Fashion Model", img: "/src/assets/Fashion Models/PRINNY.jpeg", social: "@prinny" },
    { name: "RABS", role: "Fashion Model", img: "/src/assets/Fashion Models/RABS.jpeg", social: "@rabs" },
    { name: "SWA.GGER", role: "Fashion Model", img: "/src/assets/Fashion Models/SWA.GGER.jpeg", social: "@swa.gger" },
  ],
};

const Crew = () => (
  <>
    <section className="gradient-hero py-16 md:py-24">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl text-primary-foreground mb-4">MEET THE CREW</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Our leadership, ambassadors, creators, media team, and models driving the Friends of TUT movement.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        {Object.entries(sections).map(([sectionName, members]: [string, any[]]) => (
          <section key={sectionName} className="mb-24 last:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground drop-shadow-md text-center mb-12">
              {sectionName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {members.map((member) => (
                <Card 
                  key={member.name} 
                  className="group border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] hover:bg-primary/5 transition-all duration-500 overflow-hidden h-full cursor-pointer border-border/50"
                >
                  <CardHeader className="p-6 pb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent -z-10 group-hover:from-primary/10 transition-all" />
                    <div className="relative z-10">
                      <Avatar className="w-28 h-28 group-hover:scale-110 transition-all duration-300 mx-auto border-4 border-white/50 shadow-2xl">
                        <AvatarImage src={member.img} loading="lazy" decoding="async" />
                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary text-background">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 text-center space-y-3">
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-base md:text-lg font-semibold text-muted-foreground">
                      {member.role}
                    </CardDescription>
                    <div className="flex items-center justify-center pt-2 border-t border-border/50">
                      <span className="text-primary font-mono text-sm tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                        {member.social}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  </>
);

export default Crew;
