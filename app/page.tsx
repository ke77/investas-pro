'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Target, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  UserCheck, 
  Briefcase, 
  Activity, 
  Sprout, 
  Home as HomeIcon,
  BookOpen, 
  Plane, 
  Truck,
  HeartPulse,
  DollarSign
} from 'lucide-react';

export default function HomePage() {


  const ventures = [
    {
      id: 'staflinc',
      title: 'Staflinc International',
      type: 'Flagship Placement Engine',
      description: 'Bridging talent and boundaryless career horizons. We fund global visa processing and flights, establishing mutually-secure 50% payback terms over initial months post-placement.',
      image: 'https://picsum.photos/seed/staflinc/800/600',
      badge: 'Immediate Launch',
      extra: 'Featured Subsidiary - 50% Salary Share Engine',
      link: '/ventures#staflinc'
    },
    {
      id: 'illa-farms',
      title: 'iLLa Farms & Foods',
      type: 'Agribusiness Ecosystem',
      description: 'Strengthening sub-Saharan food systems. Bridging smallholder farmers with large-scale end users through predictive logistics, storage infrastructure, and direct purchase support.',
      image: 'https://picsum.photos/seed/farming/800/600',
      badge: 'Active Rollout',
      extra: 'Strategic Agriculture Bridge',
      link: '/ventures#illa-farms'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Holdings',
      type: 'Tactical Asset Management',
      description: 'Sourcing, planning, building, and renting premium commercial spaces and middle-market residential property inside thriving economic sectors of Accra and Kumasi.',
      image: 'https://picsum.photos/seed/realestate/800/600',
      badge: 'Capital Active',
      extra: 'High Asset Security',
      link: '/ventures#real-estate'
    }
  ];



  // Hero carousel slide controls and state
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "Where Vision Meets Institutional Opportunity.",
      image: "https://picsum.photos/seed/vibrant-accra/1920/1080",
    },
    {
      heading: "Unlocking Africa's Agribusiness Potential.",
      image: "https://picsum.photos/seed/ghana-agriculture/1920/1080",
    },
    {
      heading: "Catalyzing Elite Global Careers.",
      image: "https://picsum.photos/seed/ghana-talent/1920/1080",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div id="home-view" className="space-y-24 md:space-y-36">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-banner" 
        className="mx-[4px] mt-[4px] md:mx-[10px] md:mt-[10px] relative h-[calc(100vh-20px)] min-h-[600px] md:min-h-[850px] rounded-2xl overflow-hidden group flex flex-col justify-between bg-white"
      >
        {/* Background Image Carousel with absolute transition overlays */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt="Investas Pro Ghanaian Enterprise Hub"
                fill
                className="object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out"
                referrerPolicy="no-referrer"
                priority={index === 0}
              />
              <div className="absolute inset-0 cinematic-overlay opacity-90"></div>
            </div>
          ))}
        </div>

        {/* Floating Top Spaced Spacer */}
        <div></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-white pt-24 pb-16 space-y-6 md:space-y-8">

          {/* Slider Headings absolutely transitioned inside a relative height block */}
          <div className="relative h-[160px] md:h-[220px] flex items-end">
            {slides.map((slide, index) => (
              <h1
                key={slide.heading}
                className={`font-extrabold text-3xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] max-w-4xl text-balance transition-all duration-[800ms] absolute left-0 bottom-0 right-0 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                {slide.heading}
              </h1>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/ventures"
              className="bg-white hover:bg-neutral-100 text-brand-charcoal font-extrabold text-xs md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-xl shadow-black/35 hover:scale-[1.03]"
            >
              Explore Ventures
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-bold text-xs md:text-base px-6 py-3.5 md:px-8 md:py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Become a Partner
            </Link>
          </div>
        </div>


      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section id="about-intro" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4B41A] block">
              ABOUT THE HOLDING
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight text-balance">
              Helping Entrepreneurs & Investors Navigate <span className="text-neutral-500 italic font-serif">the Sovereign Promise</span> of Ghana.
            </h2>
            <div className="h-1.5 w-20 bg-[#F4B41A] rounded-full"></div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg text-[#1A1A1A]/80 leading-relaxed font-normal">
              Investas Pro Ghana was created by visionary builders who recognised that capital access is only one part of the equation. Sustainable expansion requires rigorous local licensing, deep talent identification, and high-quality boots-on-the-ground management.
            </p>
            <p className="text-sm text-[#1A1A1A]/65 leading-relaxed">
              We operate hand-in-hand with state planners, regional farm owners, and global immigration bodies. We structure business models from the incubation phase up to institutional viability, ensuring every stakeholder reaps long-term strategic benefit.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 group text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#F4B41A] transition-colors"
              >
                <span>Read Our Origin Story</span>
                <span className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* 3. OUR LINE OF WORK (Venture Subsidiaries) */}
      <section id="ventures-highlights" className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4B41A] block">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
            Impactful Ventures.
          </h2>
        </div>

        {/* Subsidiaries cards with rounded-3xl (more rounded than 2xl hero, less than rounded-[2rem]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mx-4 md:mx-0">
          
          {/* Card 1: Staflinc */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 text-white shadow-lg transition-all duration-500 hover:shadow-2xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/staflinc_workspace/800/800"
                alt="Staflinc Team Workspace"
                fill
                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-10"></div>
            </div>

            {/* Inner Content */}
            <div className="relative z-20 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B41A] block mb-1">
                FLAGSHIP PRODUCT
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
                Staflinc
              </h3>
              <p className="text-white/80 text-sm font-normal leading-relaxed max-w-xs pb-3">
                Revolutionizing professional recruitment and human capital development.
              </p>
              <div className="pt-1">
                <Link
                  href="/ventures#staflinc"
                  className="inline-flex items-center gap-2 bg-white text-black font-extrabold text-xs px-6 py-3 rounded-xl hover:bg-[#F4B41A] transition-all duration-300"
                >
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: iLLa Farms */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 text-white shadow-lg transition-all duration-500 hover:shadow-2xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/illa_farms_fields/800/800"
                alt="iLLa Farms fields"
                fill
                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-10"></div>
            </div>

            {/* Inner Content */}
            <div className="relative z-20 space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
                iLLa Farms
              </h3>
              <p className="text-white/80 text-sm font-normal leading-relaxed max-w-xs pb-3">
                Sustainable agricultural ecosystems.
              </p>
              <div className="pt-1">
                <Link
                  href="/ventures#illa-farms"
                  className="inline-flex items-center gap-1.5 text-[#F4B41A] hover:text-[#F4B41A]/80 font-extrabold text-sm transition-colors group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Strategic Assets */}
          <div className="group relative h-[500px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 text-white shadow-lg transition-all duration-500 hover:shadow-2xl">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/strategic_assets_holding/800/800"
                alt="Strategic Assets Construction"
                fill
                className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 z-10"></div>
            </div>

            {/* Inner Content */}
            <div className="relative z-20 space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">
                Strategic Assets
              </h3>
              <p className="text-white/80 text-sm font-normal leading-relaxed max-w-xs pb-3">
                Real Estate & Financial Literacy.
              </p>
              <div className="pt-1">
                <Link
                  href="/ventures#real-estate"
                  className="inline-flex items-center gap-1.5 text-[#F4B41A] hover:text-[#F4B41A]/80 font-extrabold text-sm transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR SERVICES SECTION - LIGHT THEMED & MINIMALIST PRESENTED */}
      <section id="our-services-section" className="bg-[#F4F3F0] text-[#1A1A1A] py-24 px-6 md:px-12 relative border-t border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header section with fine minimalist light layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#E5E3DF]">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1] text-[#1A1A1A]">
                Our Services
              </h2>
              <p className="text-neutral-500 max-w-2xl text-xs md:text-sm leading-relaxed font-normal">
                We operate a deliberate venture-building ecosystem that establishes high-yield standalone operations, filling critical economic voids across sub-Saharan Africa.
              </p>
            </div>
            <div>
              <Link
                href="/ventures"
                className="inline-flex items-center gap-2 group text-xs font-mono tracking-widest uppercase bg-transparent text-[#1A1A1A] hover:text-[#F4B41A] transition-colors duration-300 font-bold"
              >
                <span>Venture Blueprints</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Clean Minimalist Services Presentation in 1 unified column */}
          <div className="border-t border-[#E5E3DF] divide-y divide-[#E5E3DF]">
            {[
              {
                num: "01",
                label: "PLACEMENT ENGINE",
                title: "Global Talent Placement (Staflinc)",
                desc: "Sourcing and deploying top-tier Ghanaian professionals into vetted global operations. We lease flight and immigration visa flows, reducing barrier blocks with deferred payback streams post-placement.",
                status: "Upcoming Flagship",
                link: "/ventures#staflinc"
              },
              {
                num: "02",
                label: "AGRIBUSINESS",
                title: "Agribusiness Ecosystems (iLLa Farms)",
                desc: "Fostering sustainable agriculture food-chains. Bridging regional coop smallholder farms with industrial food-processing and bulk-buy retail lines.",
                status: "Upcoming Setup",
                link: "/ventures#illa-farms"
              },
              {
                num: "03",
                label: "REAL ESTATE",
                title: "Strategic Land & Property Holdings",
                desc: "Sourcing, securing, and developing middle-market commercial or residential assets within Ghana’s primary business corridors of Accra and Kumasi.",
                status: "Asset Preservation",
                link: "/ventures#real-estate"
              },
              {
                num: "04",
                label: "SPECIALIST ADVISORY",
                title: "Financial Literacy & Business Consulting",
                desc: "Our active core ongoing consulting line. Sponsoring strategic business masterclasses, bookkeeping auditing systems, and preparing local West African entrepreneurs for robust capital acquisition, balance sheet structure, and institutional compliance checks.",
                status: "Primary Active",
                link: "/contact?type=consulting",
                active: true
              },
              {
                num: "05",
                label: "VENTURE BUILDING",
                title: "Business Incubation & Acceleration",
                desc: "Active operations support, corporate governance structuring, and strategic growth advice for young regional startups and diaspora-led entities.",
                status: "Upcoming Incubations",
                link: "/contact"
              },
              {
                num: "06",
                label: "DIGITAL HEALTH",
                title: "Specialized Digital Health Paths",
                desc: "Fostering decentralized cloud-telemedicine and modern patient-consultation channels across regional clinics. Spearheaded by Dr. Eric Boateng to reduce wait times and scale access safely.",
                status: "Medical Vision",
                link: "/about"
              }
            ].map((svc) => (
              <div 
                key={svc.num} 
                className="py-10 md:py-12 flex flex-col items-start gap-5 md:gap-6 group hover:bg-[#1A1A1A]/5 transition-colors duration-300 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
              >
                {/* Number & Tag row */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F4B41A]">
                      {svc.num}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-[#1A1A1A]/40 font-bold uppercase">
                      / {svc.label}
                    </span>
                  </div>
                  {svc.active ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[8px] font-mono font-bold tracking-wider rounded-full uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Active Core
                    </span>
                  ) : (
                    <span className="inline-block px-2.5 py-0.5 bg-neutral-200/50 text-neutral-600 border border-neutral-300/50 text-[8px] font-mono font-bold tracking-wider rounded-full uppercase">
                      {svc.status}
                    </span>
                  )}
                </div>

                {/* Heading & Paragraph Flow */}
                <div className="space-y-3 max-w-4xl">
                  <h3 className="font-black text-xl md:text-2xl text-[#1A1A1A] group-hover:text-[#F4B41A] transition-colors duration-300 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-normal">
                    {svc.desc}
                  </p>
                </div>

                {/* Action arrow inside vertical flow */}
                <div className="pt-1">
                  <Link 
                    href={svc.link} 
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors duration-300"
                  >
                    <span>{svc.active ? "Initiate Route" : "Venture Spec"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FINANCIAL LITERACY & BUSINESS DEVELOPMENT (Accelerate / Incubation) */}
      <section id="incubation-engine" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left illustration content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4B41A] block">
              INCUBATION & ADVISORY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight">
              We Build Businesses From Spark to Scale.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              Unlike passive capital allocators, Investas Pro functions as a robust business accelerator. We deliver targeted financial literacy training, professional operational guidance, and key market-entry consulting.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#F4B41A]/20 text-[#1A1A1A] mt-1">
                  <CheckCircle2Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A1A1A]">Intense Pitch Preps & Mentorship</h4>
                  <p className="text-xs text-neutral-500">Rigorous financial training to format startups for sovereign/international funding rounds.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#F4B41A]/20 text-[#1A1A1A] mt-1">
                  <CheckCircle2Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A1A1A]">Operational Infrastructure Blueprints</h4>
                  <p className="text-xs text-neutral-500">Legal setups, physical real estate configurations, and technical HR matching support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right bento grid highlights */}
          <div className="lg:col-span-7 col-start-1 lg:col-start-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F5F2F0] p-8 rounded-3xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-neutral-800 font-bold shadow-sm">
                  01
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base">Startup Mentorship</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Connecting early-stage Ghanaian founders with industry veterans across North America, Europe, and Asia to share growth strategies.
                </p>
              </div>
              <div className="bg-[#F5F2F0] p-8 rounded-3xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-neutral-800 font-bold shadow-sm">
                  02
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base">Advisory Consulting</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We assist offshore entities and diaspora members in resolving legal, regulatory, land registry, and logistical bottlenecks securely.
                </p>
              </div>
              <div className="bg-[#F5F2F0] p-8 rounded-3xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-neutral-800 font-bold shadow-sm">
                  03
                </div>
                <h3 className="font-bold text-[#1A1A1A] text-base">Fin-Lit Workshops</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Designing custom, localized financial educational paths for micro-entrepreneurs to transition from cash-flow models to balance-sheet planning.
                </p>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-3xl space-y-4 text-white hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F4B41A] font-bold">
                  YC
                </div>
                <h3 className="font-bold text-white text-base">Incubator Program</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Our quarterly cohort launches deep business mentorship, pairing early ideas with operational infrastructure and early proof capital.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. WHY ALIGN WITH US */}
      <section id="trust-parameters" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Title side */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F4B41A] block">
              OUR TRUST PARAMETERS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight">
              Why Institutional Partners Align With Us.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              We stand apart through active execution rather than passive management, bridging international compliance expectations with the nuances of Ghanaian trade. We build values, data, and hard assets.
            </p>
            <div className="pt-4">
              <Link 
                href="/contact"
                className="bg-[#1A1A1A] hover:bg-[#F4B41A] text-white hover:text-black font-bold text-sm px-8 py-4 rounded-xl inline-flex items-center gap-1.5 transition-all"
              >
                Connect With An Advisor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Execution Pillars side */}
          <div className="lg:col-span-7 space-y-6 lg:pl-12">
            <div className="border-t border-[#E5E3DF] divide-y divide-[#E5E3DF]">
              {[
                {
                  id: "01",
                  title: "Direct Physical Supervision",
                  desc: "We do not run ventures via remote proxies. Our operational coordinators are physically present under native conditions to enforce standard operating procedures."
                },
                {
                  id: "02",
                  title: "Ecosystem Integration",
                  desc: "We align local talent, land networks, and cooperative smallholders with international compliance criteria, ensuring frictionless flow-through."
                },
                {
                  id: "03",
                  title: "Regulated Pre-compliance",
                  desc: "Every initiative is registered and cleared through statutory bodies before operations cycle, avoiding typical administrative delays."
                },
                {
                  id: "04",
                  title: "Deferred Liability & Self-Sufficiency",
                  desc: "We prioritize cash-generative operations first. Capital expenditures are budgeted through deferred payback loops to shield early-stage liquidity."
                }
              ].map((pillar) => (
                <div key={pillar.id} className="py-6 flex gap-6 items-start">
                  <span className="font-mono text-xs font-bold text-[#F4B41A] shrink-0 pt-0.5">
                    {pillar.id}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#1A1A1A]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. BRAND-NEW PREMIUM FINAL CTA CARD */}
      <section id="final-cta-container" className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div 
          id="final-cta-card"
          className="relative rounded-xl md:rounded-2xl py-24 md:py-32 px-8 md:px-16 overflow-hidden flex flex-col md:flex-row md:items-end justify-between gap-12 group min-h-[480px] shadow-xl"
        >
          {/* Mockup Full-cover background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/seed/innovator_collaboration/1200/600"
              alt="High-impact meeting scales with purpose"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1000ms] ease-out-quad"
              referrerPolicy="no-referrer"
            />
            {/* Dark cinematic graded overlay to read text perfectly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/70 to-[#111111]/35 z-10"></div>
          </div>

          {/* Top-left dark floating icon with vibrant trend-up graph */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 w-12 h-12 rounded-full bg-neutral-950/80 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-md">
            <TrendingUp className="w-5 h-5 text-emerald-400 stroke-[3]" />
          </div>

          {/* Bottom-left: Heading and beautiful customized paragraph */}
          <div className="relative z-20 space-y-4 max-w-2xl text-left">
            <h2 className="font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-[1.15]">
              Helping Fast-moving Innovators Scale With Purpose
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-normal max-w-xl">
              We provide active scaling pathways, deep regulatory guidelines, global capital entry matching, and bookkeeping setup. Bypassing systemic limits to deploy structures destined for regional dominance.
            </p>
          </div>

          {/* Bottom-right: Bold White pill button with split Arrow Icon circle */}
          <div className="relative z-20 shrink-0 self-start md:self-end">
            <Link
              href="/contact?type=appointment"
              className="bg-white hover:bg-neutral-100 text-brand-charcoal font-extrabold text-sm pl-7 pr-3 py-3 rounded-full inline-flex items-center gap-4 transition-all duration-300 hover:scale-[1.03] group/btn shadow-md hover:shadow-xl"
            >
              <span>Set an Appointment</span>
              <span className="w-8 h-8 rounded-full bg-brand-charcoal/10 flex items-center justify-center group-hover/btn:bg-brand-charcoal/20 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-brand-charcoal stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

// Icon helper components as Lucide fallback safety
function CheckCircle2Icon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
