import { useState, useEffect } from 'react';
import {
  ArrowUp,
  ChevronDown,
  Coffee,
  Users,
  UtensilsCrossed,
  Waves,
  Utensils,
  Mic,
  BookOpen,
  PartyPopper,
  CircleDot,
  Beer,
  Disc3,
  LogOut,
  X,
  BedDouble,
  Bath,
  GlassWater,
  Footprints,
  Flame,
  Gift,
  Target,
  Moon,
  type LucideIcon,
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

import surfCampLogo from '@/assets/surf-camp-logo.png';
import surferIcon from '@/assets/surfer-icon.png';
import heroDrone from '@/assets/hero-drone.jpg';
import surfLesson1 from '@/assets/surf-lesson-1.jpg';
import surfLesson2 from '@/assets/surf-lesson-2.png';
import surfLesson3 from '@/assets/surf-lesson-3.png';
import surfLesson4 from '@/assets/surf-lesson-4.jpg';
import priceSticker from '@/assets/price-sticker-clean.png';
import stayPool from '@/assets/stay-pool.jpg';
import stayJacuzzi from '@/assets/stay-jacuzzi.png';

const BOOK_URLS = {
  '7': 'https://madmonkeyhostels.com/tours-events/surf-camp',
  '4': 'https://madmonkeyhostels.com/tours-events/surf-camp-4-day',
} as const;
type Duration = keyof typeof BOOK_URLS;
const PRICING: Record<Duration, { usd: string; idr: string; nights: string }> = {
  '7': { usd: '$499 USD', idr: '8,500,000 IDR per person / all inclusive', nights: '7 Days' },
  '4': { usd: '$249 USD', idr: '4,250,000 IDR per person / all inclusive', nights: '4 Days' },
};

export default function Index() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [duration, setDuration] = useState<Duration>('7');
  const bookUrl = BOOK_URLS[duration];
  const pricing = PRICING[duration];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-notification', {
        body: form,
      });
      if (error || !data?.success) throw new Error(error?.message || 'Failed to send');
      toast.success("Message sent! We'll be in touch soon. 🤙");
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowBanner(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="font-sans text-foreground bg-cream min-h-screen">
      <SiteHeader />

      {/* ===================== HERO ===================== */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroDrone} alt="Kuta Lombok Surf Camp" className="absolute inset-0 w-full h-full object-cover object-center scale-[1.35]" />
        <div className="absolute inset-0 bg-foreground/30 z-[1]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={surfCampLogo} alt="Mad Monkey Surf Camp Kuta Lombok" className="w-72 md:w-[28rem] mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-hero text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-widest drop-shadow-lg uppercase leading-tight">
            Surf. Stay. Send It.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mt-4 mb-10 font-medium max-w-xl mx-auto">
            Your ultimate surf camp in Kuta Lombok — waves, mates, and zero regrets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="inline-block bg-card text-foreground px-8 py-4 font-display text-xl md:text-2xl uppercase tracking-wider hover:brightness-95 transition-all shadow-lg rounded-full">
              Ask Us Anything
            </a>
            <a href="#book" className="inline-block bg-coral text-primary-foreground px-8 py-4 font-display text-xl md:text-2xl uppercase tracking-wider hover:brightness-110 transition-all shadow-lg rounded-full">
              Book Now
            </a>
          </div>
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
          <div className="torn-edge-all overflow-hidden relative">
            <img src={surfLesson1} alt="Learning to surf in Kuta Lombok" className="w-full h-[400px] md:h-[600px] object-cover" loading="lazy" />
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-32 md:w-48 aspect-square -rotate-12 drop-shadow-xl pointer-events-none">
              <div className="w-full h-full animate-attention-pop origin-center">
                <img src={priceSticker} alt="Secure today for only $100" className="w-full h-auto" loading="lazy" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-7 md:px-10 -mt-1">
                  <span className="text-[9px] md:text-xs font-bold text-primary-foreground uppercase leading-none drop-shadow-sm">Secure Today</span>
                  <span className="text-[8px] md:text-[10px] font-semibold text-primary-foreground uppercase leading-none drop-shadow-sm mt-0.5">for only</span>
                  <span className="font-display text-2xl md:text-4xl text-primary-foreground uppercase leading-none drop-shadow-sm mt-0.5">$100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== YOUR BASECAMP ===================== */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
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
                <span className="bg-blue px-4 py-2 rounded-full text-sm font-bold shadow-sm">⏱️ {pricing.nights}</span>
                <span className="bg-coral/20 px-4 py-2 rounded-full text-sm font-bold shadow-sm">👥 Max 16 Guests</span>
                <span className="bg-green px-4 py-2 rounded-full text-sm font-bold shadow-sm">🍽️ Breakfast + Lunch & 25% Off MM Bar & Restaurant</span>
              </div>
              <div id="book" className="flex flex-col sm:flex-row gap-2 mb-6">
                <span className="bg-yellow text-foreground px-5 py-3 rounded-2xl -rotate-2 shadow-md border border-border font-display text-xl uppercase tracking-wider inline-block">All Inclusive Surf</span>
                <span className="bg-yellow text-foreground px-5 py-3 rounded-2xl rotate-1 shadow-md border border-border font-display text-xl uppercase tracking-wider inline-block">All Inclusive Stays</span>
              </div>
              {/* Duration toggle */}
              <div className="inline-flex bg-card border border-border rounded-full p-1 mb-4 shadow-sm">
                {(['4', '7'] as Duration[]).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`px-5 py-2 rounded-full font-display text-base uppercase tracking-wider transition-all ${duration === d ? 'bg-coral text-primary-foreground shadow-sm' : 'text-foreground/70 hover:text-foreground'}`}
                  >
                    {d} Days
                  </button>
                ))}
              </div>
              <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
                <p className="font-display text-2xl text-coral uppercase tracking-wider mb-1">{pricing.usd} All Inclusive</p>
                <p className="text-sm text-muted-foreground">{pricing.idr}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="torn-edge-all overflow-hidden">
                <img src={surfLesson2} alt="Mad Monkey surf camp vibes" className="w-full h-[350px] md:h-[450px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Secure-your-spot reinforcement */}
          <div className="mt-6 md:mt-8 bg-[#FF6A00] rounded-xl p-3 sm:p-4 shadow-md flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <div className="flex-1">
              <p className="font-display text-lg md:text-xl text-white uppercase tracking-wider leading-tight">
                Secure today for only $100
              </p>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                Just a $100 deposit locks in your spot — pay the rest later. Limited to 16 spots per week.
              </p>
            </div>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-[#FF6A00] px-6 py-2 rounded-full font-display text-base uppercase tracking-wider hover:brightness-95 transition-all shadow-sm"
            >
              Secure My Spot
            </a>
          </div>
        </div>
      </section>

      {/* ===================== WHERE YOU'RE STAYING ===================== */}
      <section className="bg-cream pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-3">
            Where You're Staying
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Your home base is just as fun as the waves. Crash, splash, soak, and refuel — it's all right here.
          </p>

          {/* Image strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
            <div className="torn-edge-all overflow-hidden">
              <img src={stayPool} alt="Outdoor pool and hangout area at Mad Monkey Kuta Lombok" className="w-full h-[280px] md:h-[340px] object-cover" loading="lazy" />
            </div>
            <div className="torn-edge-all overflow-hidden">
              <img src={stayJacuzzi} alt="Jacuzzi at Mad Monkey Kuta Lombok" className="w-full h-[280px] md:h-[340px] object-cover" loading="lazy" />
            </div>
          </div>

          {/* Facilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <StayFacility
              icon={BedDouble}
              title="Comfy Rooms"
              description="Spacious private rooms for couples and solo legends, plus social dorms to meet your new crew. Crash easy after a big day on the water."
            />
            <StayFacility
              icon={Waves}
              title="Outdoor Pool"
              description="A large outdoor swimming pool for cooling off, ball games, and the legendary midweek pool party. Cannonballs strongly encouraged."
            />
            <StayFacility
              icon={Bath}
              title="Jacuzzi"
              description="Soak those post-surf muscles in the bubbling jacuzzi — drink in hand, sunnies on, zero rush. Pure island recovery mode."
            />
            <StayFacility
              icon={GlassWater}
              title="Bar & Restaurant"
              description="On-site bar and restaurant slinging cold drinks and good feeds all day. No need to wander far — the party's already home."
            />
          </div>
        </div>
      </section>

      {/* ===================== WEEKLY SCHEDULE ===================== */}
      <section className="bg-pink/30 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground uppercase tracking-wider mb-4">
            Your Week, Sorted
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            {duration === '7' ? 'Seven' : 'Four'} days of waves, vibes, and unforgettable moments. Here's how it goes down.
          </p>
          {(() => {
            const allDays: { day: string; subtitle: string; durations: Duration[]; activities: { label: string; icon: LucideIcon }[] }[] = [
              { day: "SUN", subtitle: "Check-In Day", durations: ['4'], activities: [{ label: "Check-In", icon: BedDouble }] },
              { day: "CHECK-IN", subtitle: "Welcome to the Crew", durations: ['7'], activities: [{ label: "Check-In", icon: BedDouble }] },
              { day: "MON", subtitle: "Kick-Off Day", durations: ['4','7'], activities: [{ label: "Welcome Session", icon: Users }, { label: "Theory & Pop-Ups", icon: BookOpen }, { label: "Lunch", icon: UtensilsCrossed }, { label: "Welcome Pack", icon: Gift }, { label: "Family Dinner", icon: Utensils }, { label: "Karaoke", icon: Mic }] },
              { day: "TUE", subtitle: "Into the Swing", durations: ['4','7'], activities: [{ label: "Run Club", icon: Footprints }, { label: "Breakfast", icon: Coffee }, { label: "Morning Surf", icon: Waves }, { label: "Lunch", icon: UtensilsCrossed }, { label: "Afternoon Surf", icon: Waves }, { label: "Beach Bonfire", icon: Flame }] },
              { day: "WED", subtitle: "Midweek Splash", durations: ['4','7'], activities: [{ label: "Breakfast", icon: Coffee }, { label: "Morning Surf", icon: Waves }, { label: "Pool Party", icon: PartyPopper }, { label: "Surf Skate Meet", icon: CircleDot }, { label: "DJ Party Night", icon: Disc3 }] },
              { day: "THU", subtitle: "See You Next Time", durations: ['4'], activities: [{ label: "Breakfast", icon: Coffee }, { label: "Check Out", icon: LogOut }] },
              { day: "THU", subtitle: "Dial It In", durations: ['7'], activities: [{ label: "Breakfast", icon: Coffee }, { label: "Morning Surf", icon: Waves }, { label: "Lunch", icon: UtensilsCrossed }, { label: "Afternoon Surf", icon: Waves }, { label: "Beach Bonfire", icon: Flame }] },
              { day: "FRI", subtitle: "Big Night Energy", durations: ['7'], activities: [{ label: "Breakfast", icon: Coffee }, { label: "Morning Surf", icon: Waves }, { label: "Lunch", icon: UtensilsCrossed }, { label: "Paintball / Ring Making", icon: Target }, { label: "Free Evening", icon: Moon }] },
              { day: "SAT", subtitle: "The Last Hurrah", durations: ['7'], activities: [{ label: "Morning Surf", icon: Waves }, { label: "BBQ at Hostel", icon: Utensils }, { label: "Drinks", icon: Beer }, { label: "DJ Night", icon: Disc3 }] },
              { day: "SUN", subtitle: "See You Next Time", durations: ['7'], activities: [{ label: "Breakfast", icon: Coffee }, { label: "Check Out", icon: LogOut }] },
            ];
            const days = allDays.filter((d) => d.durations.includes(duration));
            const desktopCols = duration === '7' ? 'lg:grid-cols-8' : 'lg:grid-cols-5';
            return (
              <>
                {/* Desktop / tablet: column grid */}
                <div className={`hidden sm:grid grid-cols-4 ${desktopCols} gap-3 md:gap-4 lg:gap-5`}>
                  {days.map((d) => (
                    <ScheduleColumn key={d.day} day={d.day} subtitle={d.subtitle} activities={d.activities} />
                  ))}
                </div>
                {/* Mobile: accordion */}
                <div className="sm:hidden flex flex-col gap-3">
                  {days.map((d) => (
                    <ScheduleAccordion key={d.day} day={d.day} subtitle={d.subtitle} activities={d.activities} />
                  ))}
                </div>
              </>
            );
          })()}
          <div className="mt-12 text-center">
            <a href="#book" className="inline-block bg-coral text-primary-foreground px-10 py-4 font-display text-2xl uppercase tracking-wider hover:brightness-110 transition-all shadow-lg rounded-full">
              Book Now
            </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <WhatToDoCard
              image={surfLesson4}
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
              Everything Included.<br />
              Just Show Up & Surf.
            </h2>
            <p className="text-foreground/70 text-lg mb-12 max-w-2xl">
              Everything you need for the ultimate surf trip — no hidden costs, no stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="bg-card/80 backdrop-blur rounded-2xl p-8 shadow-md">
                <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-4">✅ Included</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>All accommodation, including a free night the day before the tour starts</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Transport to and from surf spots</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Meals (breakfast & lunch daily)</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>All surf lessons</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Surf board rental for the week</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Rash vest provided</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Professional surf instructors</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>Welcome pack with merch</li>
                  <li className="flex items-start gap-3"><span className="text-coral font-bold text-lg">•</span>25% off food & drinks at Mad Monkey</li>
                </ul>
              </div>
              {/* Need to know */}
              <div className="space-y-6">
                <div className="bg-card/80 backdrop-blur rounded-2xl p-8 shadow-md">
                  <h3 className="font-display text-2xl text-foreground uppercase tracking-wider mb-4">🎒 What to Bring</h3>
                  <p className="text-foreground/80">Surfing attire, swimming gear, towels, cash/cards, sunscreen, and good vibes only.</p>
                </div>
                <div className="bg-yellow/40 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-display text-lg text-foreground uppercase tracking-wider mb-2">📋 Cancellation Policy</h3>
                  <p className="text-foreground/80 text-sm">Non-refundable within one week of start date. Fully refundable 7+ days before if cancelled by you or Mad Monkey. Mad Monkey reserves the right to cancel the Surf Camp if the minimum requirement of 6 participants is not met.</p>
                </div>
                <div className="bg-card/80 backdrop-blur rounded-2xl p-6 shadow-md border border-border">
                  <p className="text-foreground/80 text-base font-semibold leading-relaxed">No hidden costs — accommodation, breakfast and lunch, & surf lessons + board rental are included in your package.</p>
                </div>
                <div className="text-center md:text-left">
                  <a href={bookUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-coral text-primary-foreground px-10 py-4 font-display text-2xl uppercase tracking-wider hover:brightness-110 transition-all shadow-lg rounded-full">
                    Book Now
                  </a>
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
      <section id="contact" className="bg-cream py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-coral uppercase tracking-wider mb-4">
            Hit Us Up
          </h2>
          <p className="text-muted-foreground mb-8">
            Got questions? Want to lock in dates? Flick us a message and we'll sort you out.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-sm mb-2">Name <span className="text-coral">*</span></label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-sm mb-2">Email <span className="text-coral">*</span></label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors"
                />
              </div>
              <div>
                <label className="block font-bold text-sm mb-2">Phone <span className="text-coral">*</span></label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold text-sm mb-2">Message <span className="text-coral">*</span></label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us what you're keen for..."
                className="w-full border border-border bg-card px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-coral transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-coral text-primary-foreground font-display text-xl uppercase tracking-wider px-8 py-3 rounded-full hover:brightness-110 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Sending…' : 'Send It 🤙'}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />

      {/* ===================== PROMO BANNER ===================== */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center px-3 pb-3 sm:pb-4 pointer-events-none">
          <div className="pointer-events-auto animate-slide-up relative flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-card rounded-2xl shadow-2xl border border-border px-5 py-4 sm:pl-7 sm:pr-12 max-w-2xl w-full sm:w-auto">
            <button
              onClick={() => setShowBanner(false)}
              aria-label="Close banner"
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors p-1"
            >
              <X size={18} />
            </button>
            <p className="font-display text-lg sm:text-xl text-foreground uppercase tracking-wider text-center sm:text-left leading-tight pr-4 sm:pr-0">
              Secure today for only <span className="text-coral">$100 USD</span>
            </p>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#FF6A00] text-white px-7 py-3 rounded-full font-display text-lg uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
            >
              Book Now
            </a>
          </div>
        </div>
      )}

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

function ScheduleCard({ day, subtitle, activities }: { day: string; subtitle: string; activities: string[] }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
        <h3 className="font-display text-xl md:text-2xl text-coral uppercase tracking-wider">{day}</h3>
        <span className="text-sm font-bold text-muted-foreground">— {subtitle}</span>
      </div>
      <ul className="space-y-1.5">
        {activities.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm md:text-base text-foreground/70 leading-relaxed">
            <span className="text-coral font-bold mt-0.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScheduleColumn({ day, subtitle, activities }: { day: string; subtitle: string; activities: { label: string; icon: LucideIcon }[] }) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border px-2 lg:px-4 py-4 lg:py-6 flex flex-col">
      <div className="flex flex-col items-center pb-3 lg:pb-5 border-b border-border/70 overflow-visible">
        <h3 className="font-display text-base md:text-lg lg:text-2xl text-foreground/80 tracking-widest whitespace-nowrap">{day}</h3>
        <p className="text-[10px] lg:text-[11px] text-muted-foreground mt-1 leading-tight whitespace-nowrap">{subtitle}</p>
      </div>
      <ul className="flex flex-col items-center gap-5 lg:gap-7 pt-5 lg:pt-7">
        {activities.map(({ label, icon: Icon }) => (
          <li key={label} className="flex flex-col items-center text-center gap-1.5 w-full">
            <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-11 lg:h-11 text-coral" strokeWidth={1.4} />
            <span className="text-[11px] md:text-xs lg:text-sm text-foreground/70 leading-tight px-1">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScheduleAccordion({ day, subtitle, activities }: { day: string; subtitle: string; activities: { label: string; icon: LucideIcon }[] }) {
  return (
    <details className="bg-card rounded-lg shadow-sm border border-border group">
      <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none">
        <span className="flex flex-col">
          <span className="font-display text-base tracking-widest text-foreground/80">{day}</span>
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        </span>
        <ChevronDown className="w-5 h-5 text-coral transition-transform group-open:rotate-180" />
      </summary>
      <ul className="grid grid-cols-3 gap-4 px-4 pb-4 pt-2 border-t border-border/60">
        {activities.map(({ label, icon: Icon }) => (
          <li key={label} className="flex flex-col items-center text-center gap-1.5">
            <Icon className="w-7 h-7 text-coral" strokeWidth={1.4} />
            <span className="text-[11px] text-foreground/70 leading-tight">{label}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

/* ===================== SUB-COMPONENTS ===================== */

function StayFacility({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-coral/15 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-coral" strokeWidth={1.6} />
      </div>
      <h3 className="font-display text-xl text-foreground uppercase tracking-wider mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}

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
