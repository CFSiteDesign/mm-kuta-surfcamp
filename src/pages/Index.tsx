import { useState, useEffect } from 'react';
import { MapPin, Check, ArrowDown, ArrowUp } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

import logo from '@/assets/logo.png';
import heroDrone from '@/assets/hero-drone.jpg';
import surfLesson1 from '@/assets/surf-lesson-1.jpg';
import surfLesson2 from '@/assets/surf-lesson-2.png';
import surfLesson3 from '@/assets/surf-lesson-3.png';
import surfAction from '@/assets/surf-action.jpg';
import snorkelingGili from '@/assets/snorkeling-gili.jpg';
import waterfallTour from '@/assets/waterfall-tour.jpg';
import poolParty from '@/assets/pool-party.jpg';
import pinkBeach from '@/assets/pink-beach.jpg';
import hostelVibes from '@/assets/hostel-vibes.jpg';
import beachSunset from '@/assets/beach-sunset.jpg';

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="font-sans text-foreground bg-cream min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroDrone} alt="Kuta Lombok aerial view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="Mad Monkey Surf Camp Logo" className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-4 tracking-wider drop-shadow-lg">
            MAD MONKEY KUTA LOMBOK
          </h1>
          <p className="text-lg md:text-2xl text-primary-foreground/90 mb-10 font-medium drop-shadow-md max-w-2xl mx-auto">
            A full week of surfing, adventure, and good vibes — starting every Monday
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#surfcamp" className="bg-coral text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-coral/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Surf Camp
            </a>
            <a href="#tours" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-primary-foreground hover:text-foreground transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View All Tours
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <a href="#about" className="text-primary-foreground opacity-80 hover:opacity-100"><ArrowDown size={36} /></a>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="hsl(var(--cream))" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden relative group">
                <img src={surfLesson1} alt="Surfers in Kuta Lombok" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-coral font-bold uppercase tracking-widest text-sm mb-3">Discover Lombok's Surf Paradise</p>
              <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-wide">Your Surf Retreat Awaits</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Situated in the heart of Kuta Lombok, Mad Monkey offers a surf paradise just steps from stunning beaches. Whether you're a total beginner or chasing cleaner lines, this is your basecamp for the ultimate island surf experience. Ride waves by day, chill with the crew by night — unforgettable sessions, salty hair, new mates, and good vibes are all part of the plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm"><MapPin size={16}/> Kuta, Lombok</span>
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">🏄 All Levels Welcome</span>
                <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm">🌊 Beach & Reef Breaks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="bg-cream pb-16 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl tracking-wide">What To Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <WhatToDoCard image={surfAction} title="Surf Lessons" description="The waves consist of beach breaks, beginner/intermediate friendly soft-reef breaks, and hollow maneuverable waves for the experienced surfer." />
            <WhatToDoCard image={snorkelingGili} title="Amazing Scenery" description="Known for its stunning beaches and awesome surf, Lombok is a tropical island to the East of Bali. Enjoy dramatic scenery, varied surf breaks, and local culture." />
            <WhatToDoCard image={waterfallTour} title="Activities" description="Our guides will show you the local surf spots and all the best food, culture and activities Lombok has to offer — from waterfalls to family dinners." />
            <WhatToDoCard image={hostelVibes} title="Surf Camp Life" description="Chill by the pool or head into the local village for a guided tour to learn about the customs and traditions of the local Sasak people." />
          </div>
        </div>
      </section>

      {/* Surf Camp Pricing */}
      <section id="surfcamp" className="relative overflow-hidden">
        <div className="bg-cream">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--blue))" />
          </svg>
        </div>
        <div className="bg-blue py-16 md:py-28 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <p className="text-coral font-bold uppercase tracking-widest text-sm mb-3">Find Your Dream Surf Adventure</p>
            <h2 className="font-display text-5xl md:text-7xl mb-2 tracking-wide">7-DAY SURF CAMP</h2>
            <p className="text-xl font-bold text-foreground/70 mb-8 uppercase tracking-wider">Starting Every Monday at 9:00 AM</p>
            <p className="text-lg text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to level up your island life? Join our epic Surf Camp, kicking off every Monday at 9AM, where salty hair, new mates, and unforgettable sessions are all part of the plan.
            </p>
            <div className="inline-block bg-coral text-primary-foreground font-display text-4xl md:text-5xl px-8 py-4 rounded-2xl shadow-xl mb-12 transform -rotate-2">
              $880 USD <span className="text-2xl opacity-80">/ 15,000,000 IDR</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              {["Transport included", "All meals included", "Surf board & rash vest rental", "Max 16 surfers per week"].map((item) => (
                <div key={item} className="bg-card p-6 rounded-2xl shadow-md flex items-center gap-4 text-left transform hover:-translate-y-1 transition-transform">
                  <div className="bg-blue/30 p-3 rounded-full text-foreground"><Check size={24} /></div>
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 mb-10 text-sm font-medium text-foreground/60">
              <p>Exclusions: Evening meals</p>
              <p>Things to bring: Surfing attire</p>
              <p className="text-coral font-bold">Cancellation policy: Non-refundable</p>
            </div>
            <a href="#book" className="inline-block bg-coral text-primary-foreground px-10 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-coral/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mb-8">
              Book Surf Camp
            </a>
            <div className="bg-pink inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-sm mx-auto">
              <MapPin size={18} /> Meet at the restaurant at 9AM
            </div>
          </div>
        </div>
        <div className="bg-cream">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block rotate-180">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--blue))" />
          </svg>
        </div>
      </section>

      {/* Tours & Activities */}
      <section id="tours" className="py-16 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-coral font-bold uppercase tracking-widest text-sm mb-3">Tours & Activities</p>
            <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">More Adventures in Kuta Lombok</h2>
            <p className="text-xl text-muted-foreground">From waterfalls to snorkeling — there's something for everyone</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TourCard image={surfLesson3} alt="Surf Lesson" badge="DAILY" badgeColor="bg-yellow" title="Surf Lesson Kuta Lombok" schedule="Every Day, 9:00 AM – 12:00 PM | 3 Hours" price="500,000 Rp / $30.50 USD" description="A surf lesson in surfer's paradise with a qualified surf instructor. Go for a private lesson, or team up with your friends!" />
            <TourCard image={snorkelingGili} alt="Snorkeling" badge="EVERY WEDNESDAY" badgeColor="bg-yellow" title="Madventure Snorkeling — Secret Gili's" schedule="Every Wed, 10:00 AM – 5:00 PM | 7 Hours" price="500,000 Rp / $30.50 USD" description="See the unseen underwater world of Gili Nanggu, Sudak and Kedis. Guided snorkeling with lunch and boat transport included." />
            <TourCard image={waterfallTour} alt="Waterfall Tour" badge="WEEKLY" badgeColor="bg-blue" title="Lombok Waterfall Tour + Family Dinner" schedule="Weekly | 7 Hours" price="350,000 Rp / $22.70 USD" description="Chase waterfalls, indulge in homemade lunch, strike a pose amidst picturesque rice fields. Includes a heartwarming family dinner." />
            {/* Pool Party - Highlighted */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col group border-2 border-pink relative transform md:-translate-y-2">
              <div className="absolute -top-4 -right-4 bg-pink font-display text-2xl px-6 py-2 rounded-full shadow-lg z-10 rotate-12 border-2 border-card">FREE</div>
              <div className="h-56 relative overflow-hidden">
                <img src={poolParty} alt="Pool Party" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-4 left-4 bg-yellow text-sm font-bold px-3 py-1 rounded-full shadow-sm">EVERY FRIDAY</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl mb-2">Mad Pool Party 🎉</h3>
                <p className="text-sm text-muted-foreground mb-4 font-medium">Every Fri, 5:00 PM – 11:00 PM | 6 Hours</p>
                <p className="font-display text-3xl mb-4">FREE</p>
                <p className="text-muted-foreground mb-6 flex-grow">Join our legendary pool party! Free shots every hour, DJ, Happy Hour, pool games, and meeting new friends — in true Mad Monkey style!</p>
                <a href="#book" className="block text-center bg-coral text-primary-foreground font-bold py-3 rounded-full hover:bg-coral/90 transition-colors shadow-md uppercase tracking-wider">Join The Party</a>
              </div>
            </div>
            <TourCard image={pinkBeach} alt="Pink Beach" badge="EVERY SUNDAY" badgeColor="bg-pink" title="Pink Beach Tour" schedule="Every Sun, 9:00 AM – 5:00 PM | 8 Hours" price="375,000 Rp / $22.43 USD" description="Snorkelling tour heading to Pulau Pasir and ending on the famous Pink Beach. Take in the surrounding waters and paradise views." />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-28 bg-pink/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-coral font-bold uppercase tracking-widest text-sm mb-3">Gallery</p>
            <h2 className="font-display text-5xl md:text-6xl mb-4 tracking-wide">Life at Mad Monkey Kuta Lombok</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
            <GalleryItem src={surfAction} alt="Surf Action" className="col-span-2 md:col-span-1 md:row-span-2" />
            <GalleryItem src={surfLesson2} alt="Surfer Girls" />
            <GalleryItem src={poolParty} alt="Pool Party" />
            <GalleryItem src={beachSunset} alt="Beach Sunset" className="col-span-2" />
            <GalleryItem src={hostelVibes} alt="Hostel Vibes" />
            <GalleryItem src={surfLesson3} alt="Surf Stoke" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <p className="text-coral font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
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
            <div className="w-full md:w-1/2 min-h-[400px] relative overflow-hidden">
              <img src={heroDrone} alt="Kuta Lombok Beach" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center flex-col">
                <MapPin size={48} className="text-primary-foreground mb-4 opacity-70" />
                <span className="text-primary-foreground font-bold text-xl">Kuta, Lombok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="relative py-28 text-center px-4 overflow-hidden">
        <img src={beachSunset} alt="Sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-coral/85" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-primary-foreground tracking-wide drop-shadow-sm">Ready to Catch Some Waves?</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 font-medium">Book your Surf Camp or any of our Kuta Lombok adventures today</p>
          <button className="bg-card text-coral px-12 py-5 rounded-full font-bold text-xl uppercase tracking-wider hover:bg-cream transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Book Now
          </button>
        </div>
      </section>

      <SiteFooter />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 lg:bottom-8 right-8 bg-coral text-primary-foreground p-3 rounded-full shadow-lg hover:bg-coral/90 transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

function WhatToDoCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2 tracking-wide">{title}</h3>
        <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TourCard({ image, alt, badge, badgeColor, title, schedule, price, description }: {
  image: string; alt: string; badge: string; badgeColor: string;
  title: string; schedule: string; price: string; description: string;
}) {
  return (
    <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col group">
      <div className="h-56 relative overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        <span className={`absolute top-4 right-4 ${badgeColor} text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>{badge}</span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-2xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 font-medium">{schedule}</p>
        <p className="text-coral font-bold text-xl mb-4">{price}</p>
        <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
        <a href="#book" className="block text-center border-2 border-coral text-coral font-bold py-3 rounded-full hover:bg-coral hover:text-primary-foreground transition-colors uppercase tracking-wider">Book Now</a>
      </div>
    </div>
  );
}

function GalleryItem({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden relative group ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <span className="text-primary-foreground font-bold text-lg">{alt}</span>
      </div>
    </div>
  );
}
