'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Sprout, 
  GraduationCap, 
  ArrowRight, 
  Globe, 
  Calendar, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  Lightbulb, 
  Workflow, 
  Mail, 
  CheckCircle2, 
  MessagesSquare
} from 'lucide-react';

export default function InsightsPage() {
  const [activeStatTab, setActiveStatTab] = useState<'youth' | 'farms' | 'startups' | 'literacy'>('youth');
  const [subscribed, setSubscribed] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  const articles = [
    {
      title: "Unlocking Ghana's Agribusiness Value Chains: The Off-Taker Revolution",
      category: "Agribusiness Strategy",
      readTime: "6 min read",
      date: "May 28, 2026",
      desc: "How eliminating middlemen dependency and locking in forward-pricing models delivers structural financial security directly to sub-Saharan cooperative smallholders.",
      image: "https://picsum.photos/seed/agri_insight/800/500",
      link: "/insights/agribusiness-offtaker"
    },
    {
      title: "The Future of Transnational Placement and Human Capital Development",
      category: "Human Capital",
      readTime: "8 min read",
      date: "June 02, 2026",
      desc: "Analyzing the mathematical and socio-economic dynamics of upfront relocation funding balanced against deferred payback contracts for national elite tier talent.",
      image: "https://picsum.photos/seed/placement_insight/800/500",
      link: "/insights/human-capital-dynamics"
    },
    {
      title: "Modernizing Clinical Diagnostic Ecosystems in Western Africa",
      category: "Healthcare Technology",
      readTime: "7 min read",
      date: "June 09, 2026",
      desc: "SPEARHEADED BY DR. ERIC BOATENG: Why cloud-telemedicine and decentralized remote clinics represent the single fastest path to reducing medical wait times.",
      image: "https://picsum.photos/seed/medical_insight/800/500",
      link: "/insights/telemedicine-infrastructure"
    }
  ];

  const impactData = {
    youth: {
      stat: "420+ Placed",
      topic: "Transnational Talent Placed",
      p34: "Staflinc has cleared relocation and visa barriers for highly creative Ghanaian technicians, creating a pathway to global salaries.",
      metricText: "Median Candidate Salary Hike",
      metricVal: "+380%",
      prog: 90
    },
    farms: {
      stat: "1,200+ Farmers",
      topic: "Smallholder Cooperatives Engaged",
      p34: "iLLa Farms provides software matching loops, guaranteeing clean transactions and direct purchasing power for regional crops.",
      metricText: "Smallholder Profit Margins Boost",
      metricVal: "+35%",
      prog: 75
    },
    startups: {
      stat: "15 Ventures",
      topic: "Venture Builders Incubated",
      p34: "We provide strategic operational advice, regulatory registrations, legal titles auditing, and direct bookkeeping setup support.",
      metricText: "Pre-seed Capital Mobilized",
      metricVal: "$3.8M",
      prog: 80
    },
    literacy: {
      stat: "4,500+ Attendees",
      topic: "Workshops Attendees Nationwide",
      p34: "Bridging the sovereign knowledge gap. Offering practical masterclasses that explain proper bank account strategies and capital plans.",
      metricText: "Attendees Reporting High Confidence",
      metricVal: "92%",
      prog: 95
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailAddress.trim()) {
      setSubscribed(true);
      setEmailAddress('');
    }
  };

  return (
    <div id="insights-view" className="space-y-32 pt-32 pb-16">
      
      {/* 1. Page Header */}
      <section id="insights-hero" className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B41A] font-mono block">
          INSIGHTS & GLOBAL IMPACT
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl">
          Empowering Communities, Elevating Industry Thought-Leadership.
        </h1>
        <p className="text-neutral-500 font-normal text-lg md:text-xl max-w-2xl leading-relaxed">
          Measuring our ongoing social footprint across Western Africa and sharing tactical operations blueprints for regional market scaling.
        </p>
      </section>

      {/* 2. INTERACTIVE IMPACT METRICS PANEL */}
      <section id="impact-interactive-metrics" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#111111] text-white rounded-[40px] p-8 md:p-16 border border-white/5 relative overflow-hidden space-y-12">
          
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4B41A] rounded-full filter blur-[150px]"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#F4B41A] uppercase font-bold">SOVEREIGN STATS</span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Active Social Footprint</h2>
              <p className="text-neutral-400 text-xs md:text-sm max-w-xl font-normal leading-relaxed">
                Click on the tabs below to explore real metrics verified across Investas Pro Ghana&apos;s active subsidiary registries.
              </p>
            </div>

            {/* Dynamic tabs selector */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(impactData) as Array<keyof typeof impactData>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveStatTab(key)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    activeStatTab === key 
                      ? 'bg-[#F4B41A] text-[#111111]' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive panel content layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Visual circle metric */}
            <div className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/10 rounded-3xl text-center space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">ACTIVE METRIC VALUE</span>
              <h3 className="text-5xl md:text-7xl font-sans font-black text-[#F4B41A] tracking-tighter">
                {impactData[activeStatTab].stat}
              </h3>
              <p className="text-sm text-white font-extrabold uppercase font-mono">
                {impactData[activeStatTab].topic}
              </p>
              
              {/* Process indicator bar */}
              <div className="w-full max-w-xs space-y-1.5 pt-4">
                <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                  <span>Target compliance index</span>
                  <span>{impactData[activeStatTab].prog}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#F4B41A] transition-all duration-300"
                    style={{ width: `${impactData[activeStatTab].prog}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Description card */}
            <div className="space-y-6">
              <h4 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                {impactData[activeStatTab].topic}
              </h4>
              <p className="text-sm text-neutral-450 leading-relaxed font-normal">
                {impactData[activeStatTab].p34}
              </p>
              
              <div className="p-6 bg-white/[0.04] border border-white/5 rounded-2xl flex items-center justify-between font-mono">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">{impactData[activeStatTab].metricText}</span>
                  <span className="text-xl font-extrabold text-[#F4B41A] mt-1 block">{impactData[activeStatTab].metricVal}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#F4B41A]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CASE STUDIES FOR SOCIAL EMPOWERMENT */}
      <section id="social-empowerment-stories" className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#F4B41A] uppercase font-bold">EMPOWERMENT BLUEPRINTS</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">Structured Change Narratives</h2>
          <p className="text-neutral-500 text-sm">
            We track success not only in financial margin rates, but by looking closely at how our local operations improve communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Story 1 */}
          <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="relative aspect-[16/10]">
              <Image 
                src="https://picsum.photos/seed/cooperative_women/800/500" 
                alt="Women Crop Offtakers Cooperatives" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-emerald-600 text-white font-mono text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full font-bold">
                Agribusiness & Women
              </span>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-tight group-hover:text-[#F4B41A] transition-colors duration-300">
                Lifting Yield Values for Smallholder Cooperatives
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                By configuring direct digital offtake support via iLLa Farms, we bypass middlemen buyers. This empowers rural cooperative clusters to retain maximum value from organic cashew, cassava, and cocoa farming.
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-neutral-400 uppercase font-mono">Verified Regional Scope: 22 cooperative villages inside Ashanti Region</span>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="relative aspect-[16/10]">
              <Image 
                src="https://picsum.photos/seed/tech_empowerment/800/500" 
                alt="Young Technicians Relocating" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white font-mono text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full font-bold">
                Youth & Career Placement
              </span>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-tight group-hover:text-[#F4B41A] transition-colors duration-300">
                Sponsoring Paths to International Experience
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Overcoming major passport, visa, and flight cash barriers, our Staflinc system makes global recruitment positions fully accessible for qualified young graduates, with payback deferred safely.
              </p>
              <div className="pt-2">
                <span className="text-xs font-bold text-neutral-400 uppercase font-mono">Consolidated Backing: $380,000 in flight and immigration visa flows</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. INSIGHTS / BLOG SECTION */}
      <section id="insights-publication-feed" className="bg-[#FAF9F7] py-24 border-y border-neutral-200/45">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#F4B41A] font-bold block uppercase">THOUGHT LEADERSHIP</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">Featured Publications</h2>
            </div>
            <p className="text-neutral-500 max-w-xs text-xs md:text-sm font-normal">
              Deep operational analyses written by our sector leaders on scaling mid-market enterprises across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {articles.map((art, aidx) => (
              <div key={aidx} className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image 
                      src={art.image} 
                      alt={art.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-4 left-4 bg-[#1A1A1A] text-white font-mono text-[9px] uppercase tracking-wider px-3.5 py-1 rounded-full font-bold border border-white/10">
                      {art.category}
                    </span>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-neutral-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {art.readTime}</span>
                    </div>
                    <h3 className="font-extrabold text-lg text-[#1A1A1A] group-hover:text-[#F4B41A] transition-colors duration-300 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {art.desc}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-mono text-neutral-400">Investas Research Desk</span>
                  <Link 
                    href="/contact?type=research" 
                    className="inline-flex items-center gap-1 font-mono tracking-wider font-extrabold text-[#1A1A1A] hover:text-[#F4B41A] uppercase"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. COMMUNITY & EMPOWERMENT CHANNELS */}
      <section id="community-empowerment-details" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F4B41A] font-bold block uppercase">MENTORSHIP LINES</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight">
              Bridging Ideas With Practical Execution
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Many entrepreneurs in Ghana possess solid work ethics but lack technical accounting methods, legal structures, or scaling paths. Investas Pro provides structured networks to bridge these operational gaps.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF9F7] text-neutral-850 flex items-center justify-center font-bold">1</div>
                <h4 className="font-extrabold text-sm text-[#1A1A1A]">Audit Readiness</h4>
                <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">Systemizing company accounts for compliance audits.</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FAF9F7] text-neutral-850 flex items-center justify-center font-bold">2</div>
                <h4 className="font-extrabold text-sm text-[#1A1A1A]">Growth Sourcing</h4>
                <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">Direct links to global relocation or domestic supplier contracts.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#1A1A1A] text-white rounded-[32px] p-8 md:p-12 border border-white/5 space-y-6">
            <h3 className="text-2xl font-black text-white">Youth & Entrepreneur Incubation Portals</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              We coordinate continuous mentorship platforms, corporate internship pipelines, and agribusiness workshops to prepare cohorts for physical venture-building tasks.
            </p>

            <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Monthly Digital Masterclasses:</span>
                <span className="font-bold text-[#F4B41A]">Free Access, No Cap</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-neutral-400">Cooperative Farmer Seed Allocations:</span>
                <span className="font-bold text-[#F4B41A]">Funded via iLLa Holdings</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-neutral-400">Pre-placement Career Grooming:</span>
                <span className="font-bold text-[#F4B41A]">100% Backed via Staflinc</span>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link
                href="/contact?type=incubation"
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider font-extrabold text-[#F4B41A] hover:text-white uppercase transition-colors"
              >
                <span>Request Mentorship Package</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. NEWSLETTER CTA CONSOLE */}
      <section id="insights-newsletter" className="max-w-4xl mx-auto px-6 md:px-12 py-8">
        <div className="bg-[#F5F2F0] rounded-[32px] p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          
          <div className="space-y-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-white text-[#1A1A1A] flex items-center justify-center mx-auto shadow-sm">
              <Mail className="w-5 h-5 text-neutral-850" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A]">Secure Research updates</h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed font-normal">
              Get our proprietary briefings on West African transport logs, real estate yields, and global talent recruitment cycles.
            </p>
          </div>

          <div className="relative z-10 max-w-md mx-auto">
            {subscribed ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2 text-emerald-800 text-xs font-bold animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Successfully subscribed! Check your inbox for upcoming briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input 
                  type="email" 
                  required
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="Enter secure email..." 
                  className="w-full bg-white text-xs border border-neutral-250/80 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F4B41A]"
                />
                <button 
                  type="submit"
                  className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#F4B41A] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
