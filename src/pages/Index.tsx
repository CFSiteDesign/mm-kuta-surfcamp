import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Check, ArrowDown, ArrowUp, Instagram, Facebook, Youtube, Waves } from 'lucide-react';

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-foreground bg-cream min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream shadow-md py-3' : 'bg-cream/90 py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-primary-foreground">
              <Waves size={24} />
            </div>
            <span className="font-display text-2xl tracking-wider mt-1">MAD MONKEY KUTA LOMBOK</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-coral transition-colors">Home</a>
            <a href="#tours" className="text-sm font-medium hover:text-coral transition-colors">Tours & Activities</a>
            <a href="#surfcamp" className="text-sm font-medium hover:text-coral transition-colors">Surf Camp</a>
            <a href="#gallery" className="text-sm font-medium hover:text-coral transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium hover:text-coral transition-colors">Contact</a>
            <a href="#book" className="bg-coral text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-coral/90 transition-colors shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-200">BOOK NOW</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-border">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-medium">Home</a>
            <a href="#tours" onClick={() => setMobileMenuOpen(false)} className="font-medium">Tours & Activities</a>
            <a href="#surfcamp" onClick={() => setMobileMenuOpen(false)} className="font-medium">Surf Camp</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-medium">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-medium">Contact</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)} className="bg-coral text-primary-foreground text-center px-6 py-3 rounded-full font-bold mt-2">BOOK NOW</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue to-coral opacity-90 z-0"></div>
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-20 bg-[url('https://picsum.photos/seed/surf/1920/1080')] bg-cover bg-center"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="font-display text-6xl md:text-8xl text-primary-foreground mb-6 tracking-wide drop-shadow-lg">KUTA LOMBOK SURF CAMP</h1>
          <p className="text-xl md:text-2xl text-primary-foreground mb-10 font-medium drop-shadow-md">A full week of surfing, adventure, and good vibes — starting every Monday</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#surfcamp" className="bg-coral text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-coral/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">EXPLORE SURF CAMP</a>
            <a href="#tours" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground hover:text-foreground transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">VIEW ALL TOURS</a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#about" className="text-primary-foreground opacity-80 hover:opacity-100">
            <ArrowDown size={36} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] bg-blue rounded-2xl shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/50 font-display text-3xl tracking-widest z-10">SURF VIBES</div>
                <img src="https://picsum.photos/seed/lomboksurf/800/1000" alt="Surfing in Lombok" className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-display text-5xl md:text-6xl mb-6 tracking-wide">Your Surf Retreat Awaits</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Situated in the heart of Kuta Lombok, Mad Monkey offers a surf paradise just steps from stunning beaches. Whether you're a total beginner or chasing cleaner lines, this is your basecamp for the ultimate island surf experience. Ride waves by day, chill with the crew by night — unforgettable sessions, salty hair, new mates, and good vibes are all part of the plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm"><MapPin size={16}/> Kuta, Lombok</span>
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">🏄 All Levels Welcome</span>
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">🌊 Beach Breaks & Reef Breaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surf Camp Section */}
      <section id="surfcamp" className="py-20 md:py-32 bg-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-6xl md:text-7xl mb-2 tracking-wide">7-DAY SURF CAMP</h2>
          <p className="text-xl font-bold text-foreground/70 mb-8 uppercase tracking-wider">Starting Every Monday at 9:00 AM</p>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Ready to level up your island life? Join our epic Surf Camp, kicking off every Monday at 9AM, where salty hair, new mates, and unforgettable sessions are all part of the plan. Whether you're a total beginner or chasing cleaner lines, this week is all about surfing, social vibes, and living your best backpacker life.
          </p>

          <div className="inline-block bg-coral text-primary-foreground font-display text-4xl md:text-5xl px-8 py-4 rounded-2xl shadow-xl mb-12 transform -rotate-2">
            $880 USD <span className="text-2xl opacity-80">/ 15,000,000 IDR</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {["Transport included", "All meals included", "Surf board & rash vest rental", "Max 16 surfers per week"].map((item) => (
              <div key={item} className="bg-card p-6 rounded-2xl shadow-md flex items-center gap-4 text-left transform hover:-translate-y-1 transition-transform">
                <div className="bg-blue/20 p-3 rounded-full text-blue"><Check size={24} /></div>
                <span className="font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mb-10 text-sm font-medium text-foreground/60">
            <p>Exclusions: Evening meals</p>
            <p>Things to bring: Surfing attire</p>
            <p className="text-coral font-bold">Cancellation policy: Non-refundable</p>
          </div>

          <a href="#book" className="inline-block bg-coral text-primary-foreground px-10 py-5 rounded-full font-bold text-xl hover:bg-coral/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-8">
            BOOK SURF CAMP
          </a>

          <div className="bg-pink inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-sm mx-auto">
            <MapPin size={18} /> Meet at the restaurant at 9AM
          </div>
        </div>
      </section>

      {/* Tours & Activities */}
      <section id="tours" className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">More Adventures in Kuta Lombok</h2>
            <p className="text-xl text-muted-foreground">From waterfalls to snorkeling — there's something for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard
              image="https://picsum.photos/seed/surflesson/600/400"
              alt="Surf Lesson"
              bgColor="bg-blue"
              badge="DAILY"
              badgeColor="bg-yellow"
              title="Surf Lesson Kuta Lombok"
              schedule="Every Day, 9:00 AM – 12:00 PM | 3 Hours"
              price="500,000 Rp / $30.50 USD"
              description="A surf lesson in surfer's paradise with a qualified surf instructor. Go for a private lesson, or team up with your friends and hit those waves together!"
            />
            <TourCard
              image="https://picsum.photos/seed/snorkeling/600/400"
              alt="Snorkeling"
              bgColor="bg-pink"
              badge="EVERY WEDNESDAY"
              badgeColor="bg-yellow"
              title="Madventure Snorkeling — Secret Gili's"
              schedule="Every Wed, 10:00 AM – 5:00 PM | 7 Hours"
              price="500,000 Rp / $30.50 USD"
              description="See the unseen underwater world of Gili Nanggu, Sudak and Kedis. Guided snorkeling adventure with lunch, free mineral water, and boat transportation included."
            />
            <TourCard
              image="https://picsum.photos/seed/waterfall/600/400"
              alt="Waterfall Tour"
              bgColor="bg-yellow"
              badge="WEEKLY"
              badgeColor="bg-blue"
              title="Lombok Waterfall Tour + Family Dinner"
              schedule="Weekly | 7 Hours"
              price="350,000 Rp / $22.70 USD"
              description="Chase waterfalls, indulge in homemade lunch, strike a pose amidst picturesque rice fields. Includes packed lunch and a heartwarming family dinner at the hostel."
            />

            {/* Pool Party - Highlighted */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col group border-2 border-pink relative transform md:-translate-y-2">
              <div className="absolute -top-4 -right-4 bg-pink font-display text-2xl px-6 py-2 rounded-full shadow-lg z-10 rotate-12 border-2 border-card">FREE</div>
              <div className="h-48 bg-coral relative overflow-hidden flex items-center justify-center">
                <img src="https://picsum.photos/seed/poolparty/600/400" alt="Pool Party" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <span className="absolute top-4 left-4 bg-yellow text-sm font-bold px-3 py-1 rounded-full shadow-sm">EVERY FRIDAY</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl mb-2">Mad Pool Party 🎉</h3>
                <p className="text-sm text-muted-foreground mb-4 font-medium">Every Fri, 5:00 PM – 11:00 PM | 6 Hours</p>
                <p className="font-display text-3xl mb-4">FREE</p>
                <p className="text-muted-foreground mb-6 flex-grow">Join our legendary pool party! Free shots every hour, DJ, Happy Hour, pool games, and meeting new friends — in true Mad Monkey style!</p>
                <a href="#book" className="block text-center bg-coral text-primary-foreground font-bold py-3 rounded-full hover:bg-coral/90 transition-colors shadow-md">JOIN THE PARTY</a>
              </div>
            </div>

            <TourCard
              image="https://picsum.photos/seed/pinkbeach/600/400"
              alt="Pink Beach"
              bgColor="bg-pink"
              badge="EVERY SUNDAY"
              badgeColor="bg-blue"
              title="Pink Beach Tour"
              schedule="Every Sun, 9:00 AM – 5:00 PM | 8 Hours"
              price="375,000 Rp / $22.43 USD"
              description="Snorkelling tour heading to Pulau Pasir and ending on the famous Pink Beach. Take in the surrounding waters and finally the Pink Beach."
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-32 bg-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">Life at Mad Monkey Kuta Lombok</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
            <GalleryItem src="https://picsum.photos/seed/drone/800/800" alt="Drone Shot" bg="bg-blue" className="col-span-2 md:col-span-1 md:row-span-2" />
            <GalleryItem src="https://picsum.photos/seed/surfaction/800/600" alt="Surf Action" bg="bg-yellow" />
            <GalleryItem src="https://picsum.photos/seed/poolparty2/800/600" alt="Pool Party" bg="bg-coral" />
            <GalleryItem src="https://picsum.photos/seed/beachsunset/1200/600" alt="Beach Sunset" bg="bg-pink" className="col-span-2" />
            <GalleryItem src="https://picsum.photos/seed/hostelvibes/800/600" alt="Hostel Vibes" bg="bg-blue" />
            <GalleryItem src="https://picsum.photos/seed/snorkelingtrip/800/600" alt="Snorkeling Trip" bg="bg-yellow" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-wide">Mad Monkey Kuta Lombok</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="text-coral shrink-0 mt-1" size={24} />
                  <p className="text-lg">Jl. Pariwisata Pantai Kuta, Kuta, Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573, Indonesia</p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="font-bold text-foreground mb-1">Contact Us</p>
                  <p className="text-lg mb-1">+62 811-3888-260</p>
                  <a href="mailto:kutalombok@madmonkeyhostels.com" className="text-coral hover:underline text-lg">kutalombok@madmonkeyhostels.com</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] bg-blue relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-primary-foreground/70 font-bold text-xl p-8 text-center">
                <MapPin size={48} className="mb-4 opacity-50" />
                <span>Interactive Map Placeholder</span>
                <span className="text-sm font-normal mt-2">Google Maps iframe goes here</span>
              </div>
              <img src="https://picsum.photos/seed/map/800/800" alt="Map Location" className="w-full h-full object-cover mix-blend-multiply opacity-40" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-24 bg-coral text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-primary-foreground tracking-wide drop-shadow-sm">Ready to Catch Some Waves?</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 font-medium">Book your Surf Camp or any of our Kuta Lombok adventures today</p>
          <button className="bg-card text-coral px-12 py-5 rounded-full font-bold text-xl hover:bg-cream transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16 border-b border-primary-foreground/10 pb-16">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-primary-foreground">
                  <Waves size={24} />
                </div>
                <span className="font-display text-2xl tracking-wider mt-1">MAD MONKEY</span>
              </div>
              <p className="text-primary-foreground/60 text-sm max-w-xs text-center md:text-left">
                Mad Monkey Kuta Lombok — Jl. Pariwisata Pantai Kuta, Lombok
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <nav className="flex flex-col gap-3 text-center md:text-left text-primary-foreground/70">
                <a href="#tours" className="hover:text-coral transition-colors">Tours</a>
                <a href="#surfcamp" className="hover:text-coral transition-colors">Surf Camp</a>
                <a href="#gallery" className="hover:text-coral transition-colors">Gallery</a>
                <a href="#contact" className="hover:text-coral transition-colors">Contact</a>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-4 text-lg">Follow the Vibe</h4>
              <div className="flex gap-4 text-coral">
                <a href="#" className="hover:text-primary-foreground transition-colors transform hover:scale-110"><Instagram size={24} /></a>
                <a href="#" className="hover:text-primary-foreground transition-colors transform hover:scale-110"><Facebook size={24} /></a>
                <a href="#" className="hover:text-primary-foreground transition-colors transform hover:scale-110"><Youtube size={24} /></a>
              </div>
            </div>
          </div>

          <div className="text-center text-blue text-sm">
            <p>© 2026 Mad Monkey Hostels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-coral text-primary-foreground p-3 rounded-full shadow-lg hover:bg-coral/90 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

function TourCard({ image, alt, bgColor, badge, badgeColor, title, schedule, price, description }: {
  image: string; alt: string; bgColor: string; badge: string; badgeColor: string;
  title: string; schedule: string; price: string; description: string;
}) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col group">
      <div className={`h-48 ${bgColor} relative overflow-hidden flex items-center justify-center`}>
        <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
        <span className={`absolute top-4 right-4 ${badgeColor} text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>{badge}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-2xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 font-medium">{schedule}</p>
        <p className="text-coral font-bold text-xl mb-4">{price}</p>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <a href="#book" className="block text-center border-2 border-coral text-coral font-bold py-3 rounded-full hover:bg-coral hover:text-primary-foreground transition-colors">BOOK NOW</a>
      </div>
    </div>
  );
}

function GalleryItem({ src, alt, bg, className = "" }: { src: string; alt: string; bg: string; className?: string }) {
  return (
    <div className={`${bg} rounded-2xl overflow-hidden relative group ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <span className="text-primary-foreground font-bold text-lg">{alt}</span>
      </div>
    </div>
  );
}
