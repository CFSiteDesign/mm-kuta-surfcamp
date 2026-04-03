import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

import surfCampLogo from '@/assets/surf-camp-logo.png';
import surferIcon from '@/assets/surfer-icon.png';
import heroDrone from '@/assets/hero-drone.jpg';
import surfLesson1 from '@/assets/surf-lesson-1.jpg';
import surfLesson2 from '@/assets/surf-lesson-2.png';
import surfLesson3 from '@/assets/surf-lesson-3.png';
import surfLesson4 from '@/assets/surf-lesson-4.jpg';

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
          <img src={surfCampLogo} alt="Mad Monkey Surf Camp Kuta Lombok" className="w-72 md:w-[28rem] mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-hero text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-widest drop-shadow-lg uppercase leading-tight">
            Surf. Stay. Send It.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mt-4 mb-10 font-medium max-w-xl mx-auto">
            Your ultimate surf camp in Kuta Lombok — waves, mates, and zero regrets.
          </p>
          <a href="#surfcamp" className="inline-block bg-coral text-primary-foreground px-10 py-4 font-display text-2xl uppercase tracking-wider hover:brightness-110 transition-all shadow-lg rounded-full">
            Explore Trips
          </a>
        </div>
        {/* Torn paper wave bottom */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full block h-[60px] md:h-[100px]">
            <path d="M0,50 Q30,20 60,50 Q90,80 120,50 Q150,20 180,50 Q210,80 240,50 Q270,20 300,50 Q330,80 360,50 Q390,20 420,50 Q450,80 480,50 Q510,20 540,50 Q570,80 600,50 Q630,20 660,50 Q690,80 720,50 Q750,20 780,50 Q810,80 840,50 Q870,20 900,50 Q930,80 960,50 Q990,20 1020,50 Q1050,80 1080,50 Q1110,20 1140,50 Q1170,80 1200,50 Q1230,20 1260,50 Q1290,80 1320,50 Q1350,20 1380,50 Q1410,80 1440,50 L1440,100 L0,100 Z" fill="hsl(24,60%,97%)" />
          </svg>
        </div>
      </section>

      {/* ===================== DISCOVER ===================== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Surfer icon */}
          <div className="mb-8">
            <img src={surferIcon} alt="Surfer icon" className="w-20 h-20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-6">
            Discover Lombok's Surf Paradise
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl leading-relaxed">
            Lombok is Bali's cooler, less crowded neighbour — and Kuta is where the magic happens. Think epic beach breaks, crystal-clear water, and the kind of sunsets that make you forget your phone exists. Whether you've never touched a board or you're hunting barrels, this is where you want to be. Add in cheap eats, beach bonfires, and a crew of legends from around the world, and you've got yourself the trip of a lifetime.
          </p>
        </div>
      </section>

      {/* ===================== LARGE FEATURE IMAGE ===================== */}
      <section className="bg-cream pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="torn-edge-all overflow-hidden">
            <img src={surfLesson1} alt="Learning to surf in Kuta Lombok" className="w-full h-[400px] md:h-[600px] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ===================== YOUR BASECAMP ===================== */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-3xl md:text-5xl text-coral uppercase tracking-wider mb-6">
              Your Surf Basecamp in Kuta
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
              Ready to level up your island life? Join our epic Surf Camp, kicking off every Monday at 9AM, where salty hair, new mates, and unforgettable sessions are all part of the plan. Whether you're a total beginner or chasing cleaner lines, this week is all about surfing, social vibes, and living your best backpacker life.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-yellow px-4 py-2 rounded-full text-sm font-bold shadow-sm">🏄 All Levels Welcome</span>
              <span className="bg-pink px-4 py-2 rounded-full text-sm font-bold shadow-sm">📅 Every Monday 9AM</span>
              <span className="bg-blue px-4 py-2 rounded-full text-sm font-bold shadow-sm">⏱️ 7 Days</span>
              <span className="bg-coral/20 px-4 py-2 rounded-full text-sm font-bold shadow-sm">👥 Max 16 Guests</span>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
              <p className="font-display text-2xl text-coral uppercase tracking-wider mb-1">$880 USD</p>
              <p className="text-sm text-muted-foreground">15,000,000 IDR per person</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="torn-edge-all overflow-hidden">
              <img src={surfLesson2} alt="Mad Monkey surf camp vibes" className="w-full h-[350px] md:h-[450px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WEEKLY SCHEDULE ===================== */}
      <section className="bg-pink/30 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-4">
            Your Week, Sorted
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Seven days of waves, vibes, and unforgettable moments. Here's how it goes down.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScheduleCard
              day="Monday"
              subtitle="Welcome Day"
              details="Welcome session with the crew and your surf instructors. Practice pop-ups on the beach, smash lunch together, grab your welcome pack with merch, then head back to the hostel for family dinner and the first night's event. Let's gooo. 🤙"
            />
            <ScheduleCard
              day="Tuesday – Friday"
              subtitle="Surf. Eat. Repeat."
              details="Brekkie first, then hit the waves around 9-10AM — different beaches each day depending on conditions. Back for lunch and video analysis with your instructors (watch yourself eat it in slo-mo). Afternoon surf sesh, then nightly events. Rinse and repeat."
            />
            <ScheduleCard
              day="Saturday"
              subtitle="Boat Party Day 🎉"
              details="Morning surf as usual, then ALL camp members pile onto the boat party with exclusive drink deals. Nurse the hangover, explore some non-surf beaches, then normal service resumes for the arvo surf session and night events."
            />
            <ScheduleCard
              day="Sunday"
              subtitle="Chill & Farewell"
              details="Sleep in, explore the non-surf beaches, or just vibe by the pool. Afternoon surf session to wrap things up, then finish the week strong with a pub quiz. Legends only. 🏆"
            />
          </div>
        </div>
      </section>

      {/* ===================== THE GOOD STUFF ===================== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-4">
            The Good Stuff
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Here's what you'll get up to between catching waves and making memories.
          </p>
          <div className="torn-edge-all overflow-hidden mb-16">
            <img src={surfLesson4} alt="Surfing waves in Kuta Lombok" className="w-full h-[400px] md:h-[600px] object-cover" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <WhatToDoCard
              image={surfLesson1}
              title="Surf Sessions"
              description="From mellow beach breaks perfect for your first pop-up to gnarly reef breaks that'll have you buzzing — our local guides know every secret spot. Daily lessons, board included, stoke guaranteed."
            />
            <WhatToDoCard
              image={surfLesson3}
              title="Beach Life"
              description="White sand beaches, crystal-clear water, and the kind of sunsets that make you forget your phone exists. Kuta Lombok is your playground between sessions."
            />
          </div>
        </div>
      </section>

      {/* ===================== WHAT'S INCLUDED ===================== */}
      <section id="surfcamp" className="relative overflow-hidden">
        {/* Top torn edge */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block h-[40px] md:h-[60px]">
            <path d="M0,30 Q30,0 60,30 Q90,60 120,30 Q150,0 180,30 Q210,60 240,30 Q270,0 300,30 Q330,60 360,30 Q390,0 420,30 Q450,60 480,30 Q510,0 540,30 Q570,60 600,30 Q630,0 660,30 Q690,60 720,30 Q750,0 780,30 Q810,60 840,30 Q870,0 900,30 Q930,60 960,30 Q990,0 1020,30 Q1050,60 1080,30 Q1110,0 1140,30 Q1170,60 1200,30 Q1230,0 1260,30 Q1290,60 1320,30 Q1350,0 1380,30 Q1410,60 1440,30 L1440,60 L0,60 Z" fill="hsl(199,46%,77%)" />
          </svg>
        </div>

        <div className="bg-blue py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-6xl text-coral text-stroke-sm uppercase tracking-wider mb-4">
              What's Included
            </h2>
            <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
              Everything you need for the ultimate surf week — no hidden costs, no stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-card/80 backdrop-blur rounded-2xl p-8 shadow-md">
                <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-4">✅ Included</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Transport to and from surf spots</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Meals (breakfast & lunch daily)</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Surf board rental for the week</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Rash vest provided</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Professional surf instructors</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Video analysis sessions</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Welcome pack with merch</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Saturday boat party access</li>
                </ul>
              </div>
              {/* Need to know */}
              <div className="space-y-6">
                <div className="bg-card/80 backdrop-blur rounded-2xl p-8 shadow-md">
                  <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-4">❌ Not Included</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3"><span className="text-muted-foreground font-bold text-lg">•</span>Evening meals</li>
                    <li className="flex items-start gap-3"><span className="text-muted-foreground font-bold text-lg">•</span>Other personal expenses & gratuity</li>
                  </ul>
                </div>
                <div className="bg-card/80 backdrop-blur rounded-2xl p-8 shadow-md">
                  <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-4">🎒 What to Bring</h3>
                  <p className="text-foreground/80">Surfing attire, swimming gear, towels, cash/cards, sunscreen, and good vibes only.</p>
                </div>
                <div className="bg-yellow/40 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-display text-lg text-foreground uppercase tracking-wider mb-2">📋 Cancellation Policy</h3>
                  <p className="text-foreground/80 text-sm">Non-refundable within one week of start date. Fully refundable 7+ days before if cancelled by you or Mad Monkey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom torn edge */}
        <div className="bg-cream">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block h-[40px] md:h-[60px] rotate-180">
            <path d="M0,30 Q30,0 60,30 Q90,60 120,30 Q150,0 180,30 Q210,60 240,30 Q270,0 300,30 Q330,60 360,30 Q390,0 420,30 Q450,60 480,30 Q510,0 540,30 Q570,60 600,30 Q630,0 660,30 Q690,60 720,30 Q750,0 780,30 Q810,60 840,30 Q870,0 900,30 Q930,60 960,30 Q990,0 1020,30 Q1050,60 1080,30 Q1110,0 1140,30 Q1170,60 1200,30 Q1230,0 1260,30 Q1290,60 1320,30 Q1350,0 1380,30 Q1410,60 1440,30 L1440,60 L0,60 Z" fill="hsl(199,46%,77%)" />
          </svg>
        </div>
      </section>

      {/* ===================== ENQUIRY FORM ===================== */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-coral uppercase tracking-wider mb-4">
            Hit Us Up
          </h2>
          <p className="text-muted-foreground mb-8">
            Got questions? Want to lock in dates? Flick us a message and we'll sort you out.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block font-bold text-sm mb-2">Name <span className="text-coral">*</span></label>
              <input type="text" className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Email <span className="text-coral">*</span></label>
              <input type="email" className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Phone <span className="text-coral">*</span></label>
              <input type="tel" className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-sm mb-2">Start Date</label>
                <input type="date" className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors" />
              </div>
              <div>
                <label className="block font-bold text-sm mb-2">End Date</label>
                <input type="date" className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors" />
              </div>
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Message (optional)</label>
              <textarea rows={4} className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors resize-none" placeholder="Tell us what you're keen for..." />
            </div>
            <button type="submit" className="bg-coral text-primary-foreground font-display text-xl uppercase tracking-wider px-8 py-3 rounded-full hover:brightness-110 transition-all shadow-md">
              Send It 🤙
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 lg:bottom-8 right-8 bg-coral text-primary-foreground p-3 rounded-full shadow-lg hover:brightness-110 transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

function ScheduleCard({ day, subtitle, details }: { day: string; subtitle: string; details: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
      <div className="flex items-baseline gap-3 mb-2">
        <h3 className="font-display text-xl md:text-2xl text-coral uppercase tracking-wider">{day}</h3>
        <span className="text-sm font-bold text-muted-foreground">— {subtitle}</span>
      </div>
      <p className="text-sm md:text-base text-foreground/70 leading-relaxed">{details}</p>
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

function ProductCard({ image, title, price, description }: {
  image: string; title: string; price: string; description: string;
}) {
  return (
    <a href="#surfcamp" className="block group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-[180px] md:h-[220px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg md:text-xl text-foreground uppercase tracking-wider mb-1 leading-tight">{title}</h3>
        <p className="font-bold text-coral text-lg mb-2">{price}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </a>
  );
}
