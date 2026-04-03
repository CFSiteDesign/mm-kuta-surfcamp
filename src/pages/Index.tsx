import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

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

      {/* ===================== HERO ===================== */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroDrone} alt="Kuta Lombok Surf Camp" className="absolute inset-0 w-full h-full object-cover scale-125 object-center" />
        <div className="absolute inset-0 bg-foreground/30 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-yellow text-stroke tracking-wider drop-shadow-lg uppercase">
            Kuta Lombok Surf Camp
          </h1>
          <div className="mt-10">
            <a href="#surfcamp" className="inline-block bg-pink text-primary-foreground px-10 py-4 font-display text-2xl uppercase tracking-wider hover:brightness-110 transition-all shadow-lg">
              Explore Trips
            </a>
          </div>
        </div>
        {/* Torn paper wave bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full block h-[60px] md:h-[100px]">
            <path d="M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50 Q210,80 240,50 Q270,20 300,50 Q330,80 360,50 Q390,20 420,50 Q450,80 480,50 Q510,20 540,50 Q570,80 600,50 Q630,20 660,50 Q690,80 720,50 Q750,20 780,50 Q810,80 840,50 Q870,20 900,50 Q930,80 960,50 Q990,20 1020,50 Q1050,80 1080,50 Q1110,20 1140,50 Q1170,80 1200,50 Q1230,20 1260,50 Q1290,80 1320,50 Q1350,20 1380,50 Q1410,80 1440,50 L1440,100 L0,100 Z" fill="hsl(40,33%,95%)" />
          </svg>
        </div>
      </section>

      {/* ===================== DISCOVER ===================== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Island icon */}
          <div className="mb-10">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-foreground">
              <circle cx="40" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M28,30 Q28,18 40,18 Q52,18 52,30" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <line x1="40" y1="18" x2="40" y2="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M40,6 Q50,10 42,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M40,6 Q30,10 38,18" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M10,55 Q30,45 50,55 Q70,65 80,55" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M5,62 Q25,52 45,62 Q65,72 80,62" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-6">
            Discover Lombok's Surf Paradise
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            Find your surf haven at Mad Monkey Kuta Lombok, located in the vibing town of Kuta, Lombok. With its stunning beaches and incredible surf, Lombok is a tropical island to the east of Bali, offering dramatic scenery, diverse surf breaks, delectable food, beach parties, and authentic local culture.
          </p>
        </div>
      </section>

      {/* ===================== LARGE IMAGE + COMPASS ===================== */}
      <section className="bg-cream pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Compass */}
            <div className="absolute top-0 left-4 md:left-8 z-20 -translate-y-1/3">
              <svg width="100" height="100" viewBox="0 0 100 100" className="text-foreground">
                <text x="50" y="18" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">N</text>
                <text x="50" y="95" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">S</text>
                <text x="5" y="58" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">W</text>
                <text x="95" y="58" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">E</text>
                <line x1="50" y1="25" x2="50" y2="75" stroke="currentColor" strokeWidth="1.5" />
                <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="25" x2="45" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="50" y1="25" x2="55" y2="35" stroke="currentColor" strokeWidth="1.5" />
                <line x1="25" y1="30" x2="75" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                <line x1="75" y1="30" x2="25" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>
            <div className="torn-edge-all overflow-hidden">
              <img src={surfLesson1} alt="Surf camp in Kuta Lombok" className="w-full h-[400px] md:h-[600px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== YOUR SURF RETREAT ===================== */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl text-yellow text-stroke-sm uppercase tracking-wider mb-6">
            Mad Monkey Kuta Lombok: Your Surf Retreat Awaits
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-4xl leading-relaxed">
            Situated in the heart of Kuta Lombok, offering guests a tranquil retreat just a short walk from the area's vibrant attractions. Located approximately 1.1 km from the pristine Kuta Beach, visitors can easily enjoy sun-soaked days by the sea. Immerse yourself in the surf lifestyle as you ride the waves by day and chill out with the Mad Monkey crew by night. Savour amazing food, go for happy hour, and create unforgettable memories in this vibrant surf community.
          </p>
        </div>
      </section>

      {/* ===================== WHAT TO DO ===================== */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-12">
            What to do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <WhatToDoCard image={surfAction} title="Surf Lessons" description="The waves consist of beach breaks, beginner/intermediate friendly soft-reef breaks, and hollow maneuverable waves for the experienced surfer. Your Mad Monkey guides will take you on a true surf journey encompassing secluded beaches and boat trips to some of the less easily accessible locations." />
            <WhatToDoCard image={snorkelingGili} title="Amazing Scenery" description="Known for its stunning beaches and awesome surf, Lombok is a tropical island to the East of Bali. Enjoy dramatic scenery, varied surf breaks, delicious food, beach parties and local culture." />
            <WhatToDoCard image={waterfallTour} title="Activities" description="Guides will show you the local surf spots and all the best food, culture and activities Lombok has to offer." />
            <WhatToDoCard image={poolParty} title="Lombok Surf Camp" description="The accommodation consists of both shared and private bungalows, all fitted with air con, fans, and western-style amenities. You can chill by the beach or head into the local village for a guided tour to learn about the customs and traditions of the local Sasak people. Finish the day witnessing some of the most awe-inspiring sunsets in the world." />
          </div>
        </div>
      </section>

      {/* ===================== FIND YOUR DREAM SURF ADVENTURE ===================== */}
      <section id="surfcamp" className="relative overflow-hidden">
        {/* Top torn edge */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block h-[40px] md:h-[60px]">
            <path d="M0,30 Q30,0 60,30 Q90,60 120,30 Q150,0 180,30 Q210,60 240,30 Q270,0 300,30 Q330,60 360,30 Q390,0 420,30 Q450,60 480,30 Q510,0 540,30 Q570,60 600,30 Q630,0 660,30 Q690,60 720,30 Q750,0 780,30 Q810,60 840,30 Q870,0 900,30 Q930,60 960,30 Q990,0 1020,30 Q1050,60 1080,30 Q1110,0 1140,30 Q1170,60 1200,30 Q1230,0 1260,30 Q1290,60 1320,30 Q1350,0 1380,30 Q1410,60 1440,30 L1440,60 L0,60 Z" fill="hsl(195,70%,75%)" />
          </svg>
        </div>

        <div className="bg-blue py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-6xl text-pink text-stroke-sm uppercase tracking-wider mb-12">
              Find Your Dream Surf Adventure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard image={surfLesson1} title="Lombok Surf & Stay" price="From US$210.00" />
              <ProductCard image={surfLesson2} title="7 Day Lombok Surf Camp Adventure" price="US$694.00" />
              <ProductCard image={surfLesson3} title="1 Month Surf Academy Indonesia" price="US$80.00" priceExtra="per day" subPrice="IDR 1,335,416.00" />
              <ProductCard image={surfAction} title="2 Month Surf Academy Indonesia" price="US$79.00" priceExtra="per day" subPrice="IDR 1,318,723.00" />
              <ProductCard image={beachSunset} title="3 Month Surf Academy Instructor Course Indonesia" price="US$70.00" priceExtra="per day" />
              <ProductCard image={pinkBeach} title="15 Day Island Hopper Surf Adventure" price="US$1,399.00" subPrice="IDR 23,325,946.00" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENQUIRY FORM ===================== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-pink text-stroke-sm uppercase tracking-wider mb-8">
            Make an Enquiry
          </h2>
          <p className="text-sm text-muted-foreground mb-8">"*" indicates required fields</p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-bold text-sm mb-2">Name <span className="text-pink">*</span></label>
              <input type="text" className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors" />
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Email <span className="text-pink">*</span></label>
              <input type="email" className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors" />
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Phone <span className="text-pink">*</span></label>
              <input type="tel" className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-sm mb-2">Proposed Date Start</label>
                <input type="date" className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors" />
              </div>
              <div>
                <label className="block font-bold text-sm mb-2">Proposed Date End</label>
                <input type="date" className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors" />
              </div>
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Leave us a message (optional)</label>
              <textarea rows={5} className="w-full border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:border-pink transition-colors resize-none" />
            </div>
            <button type="submit" className="bg-pink text-primary-foreground font-display text-xl uppercase tracking-wider px-8 py-3 hover:brightness-110 transition-all shadow-md">
              Submit
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 lg:bottom-8 right-8 bg-pink text-primary-foreground p-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

/* ===================== SUB-COMPONENTS ===================== */

function WhatToDoCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div>
      <div className="torn-edge-all overflow-hidden mb-4">
        <img src={image} alt={title} className="w-full h-[250px] md:h-[300px] object-cover" loading="lazy" />
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-foreground uppercase tracking-wider mb-3">{title}</h3>
      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

function ProductCard({ image, title, price, priceExtra, subPrice }: {
  image: string; title: string; price: string; priceExtra?: string; subPrice?: string;
}) {
  return (
    <a href="#surfcamp" className="block group">
      <div className="torn-edge-all overflow-hidden mb-3">
        <img src={image} alt={title} className="w-full h-[180px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <h3 className="font-display text-base md:text-lg text-foreground uppercase tracking-wider mb-1 leading-tight">{title}</h3>
      <p className="font-bold text-sm text-foreground">
        {price} {priceExtra && <span className="font-normal text-foreground/60">{priceExtra}</span>}
      </p>
      {subPrice && <p className="text-xs text-foreground/50">{subPrice}</p>}
    </a>
  );
}
