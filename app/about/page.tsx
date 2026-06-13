'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Milestone, 
  HeartHandshake, 
  LineChart, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  Stethoscope,
  Briefcase,
  Layers,
  CheckCircle2,
  ChevronDown,
  Globe,
  Leaf,
  Settings,
  Scale,
  Users
} from 'lucide-react';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "What does Investas Pro Ghana do?",
      a: "Investas Pro Ghana is a diversified investment and business development company focused on empowering businesses, entrepreneurs, and communities through financial literacy, venture building, strategic partnerships, recruitment opportunities, agribusiness, real estate, and investment-backed projects across Ghana and Africa."
    },
    {
      q: "How can Investas Pro Ghana help entrepreneurs and startups?",
      a: "We support entrepreneurs through business development guidance, mentorship, financial literacy training, startup incubation, strategic partnerships, and access to investment opportunities that help businesses grow sustainably."
    },
    {
      q: "Does Investas Pro Ghana offer investment opportunities?",
      a: "Yes. Investas Pro Ghana provides investment opportunities across multiple sectors including agriculture, real estate, logistics, startups, food processing, transport, and business development projects. Our goal is to create diversified and sustainable investment ecosystems for partners and investors."
    },
    {
      q: "What industries does Investas Pro Ghana operate in?",
      a: "We operate across several sectors including:\n\n• Recruitment & Global Opportunities\n• Agribusiness\n• Real Estate\n• Financial Literacy & Business Development\n• Healthcare\n• Logistics\n• Import & Export\n• Venture Development"
    },
    {
      q: "How can Investas Pro Ghana help me start a business in Ghana?",
      a: "We provide business consulting, strategic planning, mentorship, market guidance, and growth support for startups and growing businesses. Our team helps entrepreneurs navigate opportunities, build sustainable models, and scale effectively."
    },
    {
      q: "Why should investors partner with Investas Pro Ghana?",
      a: "Investas Pro Ghana combines local market expertise with a diversified investment approach. We focus on high-growth sectors, strategic partnerships, sustainable development, and long-term value creation across Ghana and Africa."
    },
    {
      q: "What makes Investas Pro Ghana different from other consulting firms in Ghana?",
      a: "Our approach goes beyond traditional consulting. We actively build, support, and invest in businesses while creating long-term ecosystems around entrepreneurship, innovation, and economic empowerment."
    },
    {
      q: "Does Investas Pro Ghana provide recruitment and international job opportunities?",
      a: "Yes. One of our major ventures focuses on connecting qualified individuals with local and international job opportunities while supporting relocation, career development, and workforce placement initiatives."
    },
    {
      q: "Does Investas Pro Ghana work with SMEs and growing businesses?",
      a: "Absolutely. We work closely with startups, SMEs, entrepreneurs, and organizations by providing consulting, growth strategies, business development support, and partnership opportunities."
    },
    {
      q: "Can Investas Pro Ghana help improve my business strategy?",
      a: "Yes. We help businesses strengthen operations, improve market positioning, identify growth opportunities, and develop sustainable long-term strategies tailored to their goals."
    },
    {
      q: "Does Investas Pro Ghana provide financial literacy training?",
      a: "Yes. Financial education is one of our core pillars. We organize workshops, mentorship programs, consulting sessions, and educational initiatives focused on helping individuals and businesses make informed financial decisions."
    },
    {
      q: "Is Investas Pro Ghana involved in agribusiness?",
      a: "Yes. Through iLLa Farms & Foods Ghana, we are building sustainable agribusiness solutions focused on farming, food production, distribution, investment opportunities, and agricultural empowerment."
    },
    {
      q: "How can I partner with Investas Pro Ghana?",
      a: "You can partner with us as:\n\n• An investor\n• Strategic business partner\n• Entrepreneur\n• Corporate organization\n• Development partner\n• Startup collaborator\n\nReach out through our contact form or business channels to begin discussions."
    },
    {
      q: "Where is Investas Pro Ghana located?",
      a: "Investas Pro Ghana is based in Accra, Ghana, West Africa."
    },
    {
      q: "How can I contact Investas Pro Ghana?",
      a: "You can contact us through:\n\n• Email: investas24@gmail.com\n• Phone/WhatsApp: +233 50 005 0924\n• Socials: @investaspro_gh"
    }
  ];

  const coreValues = [
    {
      title: 'Empowerment through education',
      description: 'We believe that the baseline of any financial or operational leap is high-caliber, practical business and financial literacy.',
      icon: GraduationCap
    },
    {
      title: 'Integrity and transparency',
      description: 'Operating absolute compliance lines with national and international bodies. No corners cut, ever.',
      icon: Scale
    },
    {
      title: 'Innovation and adaptability',
      description: 'West African markets move continuously. We construct versatile models capable of swift strategic calibration.',
      icon: Sparkles
    },
    {
      title: 'Collaboration and partnership',
      description: 'Bridging international expertise with boots-on-the-ground capability to construct shared socioeconomic benefit.',
      icon: HeartHandshake
    },
    {
      title: 'Customer-centric approach',
      description: 'Solving actual operational difficulties for investors and client talent with deep empathy and constant diligence.',
      icon: Users
    }
  ];

  const valuePillars = [
    {
      title: 'Diversified Portfolio',
      desc: 'By spreading resources across recruitment global channels, supply-chain agribusiness, and middle-market real estate, we secure multiple non-correlated return sources and capture consistent sector yields.',
      icon: Layers
    },
    {
      title: 'Strategic Partnerships',
      desc: 'We cultivate deep relationships with local governments, regulatory bodies, and international trade desks, clearing legal bottlenecks and unlocking streamlined market pathways.',
      icon: HeartHandshake
    },
    {
      title: 'Sustainability',
      desc: 'Environmental responsibility and local empowerment run through our ventures. From eco-conscious farming systems to sustainable recruitment paths that enhance long-term economic metrics.',
      icon: Leaf
    },
    {
      title: 'Innovation & Incubation',
      desc: 'We leverage proprietary software systems for logistical mapping at iLLa Farms and rapid visa-applicant tracking at Staflinc, infusing efficiency into historic offline workflows.',
      icon: Sparkles
    },
    {
      title: 'Local Ground Expertise',
      desc: 'Headquartered in Accra, our local managers navigate land registries, soil conditions, cultural nuances, and logistical clusters, safeguarding capital from common market pitfalls.',
      icon: Globe
    },
    {
      title: 'Investor Confidence',
      desc: 'Our doctor-led, systemized compliance, rigorous corporate governance, open audits, and risk-managed models reassure global partners of maximum transparency.',
      icon: CheckCircle2
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Eric Boateng',
      role: 'President & Founder',
      desc: 'Medical practitioner and lead venture architect, translating scientific precision into resilient economic ecosystems in Ghana.',
      image: 'https://picsum.photos/seed/dr_eric/600/700'
    },
    {
      name: 'Audrey Mensah',
      role: 'Chief Operations Officer',
      desc: 'Operations specialist with 12+ years optimizing cross-border logistics, supply-chain agritech, and corporate regulatory alignments.',
      image: 'https://picsum.photos/seed/audrey/600/700'
    },
    {
      name: 'Kofi Sarpong',
      role: 'Head of Ventures',
      desc: 'Venture scale strategist managing the recruitment placements pathways and structuring middle-market real estate assets.',
      image: 'https://picsum.photos/seed/kofi/600/700'
    }
  ];

  const coreMilestones = [
    {
      status: 'Current Active Service',
      title: 'Corporate Financial Literacy & Business Consulting',
      desc: 'Our primary currently ongoing service. Empowering business owners, founders, and community partners in Ghana with capital management planning, bookkeeping guidelines, and audit preparation.',
      badgeColor: 'text-emerald-700 bg-emerald-150 border border-emerald-300/30'
    },
    {
      status: 'Coming Soon',
      title: 'Global Talent Placement (Staflinc)',
      desc: 'Our upcoming flagship recruitment corridor matching top-tier Ghanaian professionals with international placement desks under deferred payback models.',
      badgeColor: 'text-neutral-500 bg-neutral-100 border border-neutral-250/20'
    },
    {
      status: 'Coming Soon',
      title: 'Decentralized Agribusiness Value Chain (iLLa Farms)',
      desc: 'Preparing future logistics nodes and software channels to directly connect rural farm cooperatives with major markets.',
      badgeColor: 'text-neutral-500 bg-neutral-100 border border-neutral-250/20'
    },
    {
      status: 'Coming Soon',
      title: 'Strategic built land & digital health',
      desc: 'Creating prime middle-market workspace frameworks and decentralized cloud clinics.',
      badgeColor: 'text-neutral-500 bg-neutral-100 border border-neutral-250/20'
    }
  ];

  return (
    <div id="about-view" className="space-y-28 pt-32 pb-16">
      
      {/* Editorial Page Header */}
      <section id="about-hero" className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B41A] font-mono block">
          ABOUT INVESTAS PRO GHANA
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl">
          We exist to build other companies, transforming the economic bedrock of Ghana.
        </h1>
        <p className="text-neutral-500 font-normal text-lg md:text-xl max-w-2xl leading-relaxed">
          How a medical physician&apos;s vision for long-term clinical and economic wellness sparked a diversified multi-sector enterprise holding.
        </p>
      </section>

      {/* Origin & Founder Deep Dive Section */}
      <section id="origin-deep-dive" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 group">
            <Image 
              src="https://picsum.photos/seed/doctor_visionary/800/1000" 
              alt="Dr Eric Boateng - Founder & President"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-8">
              <span className="flex items-center gap-1.5 text-xs text-[#F4B41A] font-bold uppercase tracking-widest">
                <Stethoscope className="w-4 h-4" /> Medical Physician & Venture Architect
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-2">Dr. Eric Boateng</h3>
              <p className="text-sm text-white/70">President & Founder, Investas Pro Ghana</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                Visions of Holistic Wellness and Financial Sovereignty.
              </h2>
              <div className="h-1 w-16 bg-[#F4B41A] rounded-full"></div>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              Dr. Eric Boateng, a practicing medical practitioner in Ghana, recognized early in his career that true human wellbeing cannot occur inside an impoverished ecosystem. True health is holistic—spanning agricultural stability, high-income recruitment networks, stable home assets, and deep financial literacy.
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed font-normal">
              Applying the scientific rigour and diagnostic precision learned in medicine, Dr. Boateng began acquiring and building high-value real estate models, bridging farm logistics networks, and constructing premium recruitment paths. What originated as tactical personal operations grew into <span className="font-bold text-[#1A1A1A]">Investas Pro Ghana</span>—a robust parent holding designed to build, nurture, and scale other high-growth businesses. Our philosophy integrates disciplined community impact with long-term commercial optimization.
            </p>

            {/* Strategic Pillars Icons Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-[#F5F2F0] rounded-2xl">
                <Briefcase className="w-5 h-5 text-neutral-800 mb-2" />
                <h4 className="font-bold text-xs text-neutral-800">1. Venture Building</h4>
                <p className="text-[10px] text-neutral-500 pt-1">Building from scratch</p>
              </div>
              <div className="p-4 bg-[#F5F2F0] rounded-2xl">
                <Layers className="w-5 h-5 text-neutral-800 mb-2" />
                <h4 className="font-bold text-xs text-neutral-800">2. Asset Security</h4>
                <p className="text-[10px] text-neutral-500 pt-1">Hard assets first</p>
              </div>
              <div className="p-4 bg-[#F5F2F0] rounded-2xl">
                <Milestone className="w-5 h-5 text-neutral-800 mb-2" />
                <h4 className="font-bold text-xs text-neutral-800">3. Scale Matching</h4>
                <p className="text-[10px] text-neutral-500 pt-1">Global connections</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Mission & Vision */}
      <section id="corporate-statements" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#121212] rounded-3xl p-8 md:p-16 relative overflow-hidden text-white space-y-12">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white rounded-full filter blur-[100px]"></div>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#F4B41A]">GUIDING MOTIVES</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">Our Core Blueprint.</h2>
            <p className="text-white/60 text-sm">Clear pathways defining our continuous progress and standard of governance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F4B41A]">
                <Milestone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">The Mission</h3>
              <p className="text-sm md:text-base text-white/75 leading-relaxed font-normal">
                “We are on a mission to change the dynamics of Ghana&apos;s future through diversified investments, innovative solutions, and entrepreneurial empowerment — driving growth, impact, and opportunity for all.”
              </p>
            </div>

            <div className="space-y-4 md:border-l md:border-white/10 md:pl-12">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F4B41A]">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">The Vision</h3>
              <p className="text-sm md:text-base text-white/75 leading-relaxed font-normal">
                “To become Ghana’s leading catalyst for entrepreneurial success, transforming industries and inspiring a new generation of innovators.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="corporate-values" className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F4B41A] font-bold">ETHOS IN MOTION</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            How We Standardize Work.
          </h2>
          <p className="text-neutral-500 text-sm">
            Five core attributes that govern how we interact with global capital, local managers, and individual talent assets of Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, i) => {
            const IconComp = val.icon;
            return (
              <div key={i} className="bg-white border border-neutral-150 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F2F0] text-[#1A1A1A] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-[#1A1A1A] text-base leading-snug">{val.title}</h3>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed pt-4 font-normal">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Investas Pro Section */}
      <section id="why-investas-pro-expanded" className="bg-[#F9F8F6] py-24 border-y border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#F4B41A] font-bold uppercase">THE CORE ADVANTAGES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">Why Partners Choose Investas Pro</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              We move past conventional consulting setups, building integrated systems to capture physical security and high output yields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-neutral-200/50 space-y-4 shadow-sm hover:scale-[1.02] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#F4B41A]/10 text-[#F4B41A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-base text-[#1A1A1A]">{pillar.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services and Ecosystem Roadmap */}
      <section id="corporate-timeline" className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              Service Roadmap & Venture Milestones
            </h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-xs md:text-sm">
            Overview of currently active consulting services and upcoming structured venture milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-6">
          {coreMilestones.map((mil, idx) => (
            <div key={idx} className="space-y-4 relative p-6 bg-[#F9F8F6] rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider ${mil.badgeColor}`}>
                  {mil.status}
                </span>
                <h3 className="text-base font-extrabold text-[#1A1A1A] leading-snug">{mil.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-normal">{mil.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet The Team Section */}
      <section id="meet-our-team" className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 py-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#F4B41A] font-bold uppercase">THE EXECUTIVE DESK</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">Meet Our Leadership</h2>
          <p className="text-neutral-500 text-sm">
            Enabling high-value cross-sector performance through systemic thinking and thorough operational governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="group overflow-hidden rounded-3xl bg-white border border-neutral-250/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full">
                  {member.role}
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-2">
                <h3 className="font-extrabold text-xl text-[#1A1A1A] group-hover:text-[#F4B41A] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed font-normal">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm max-w-lg mx-auto">
            Got questions? We have compiled detailed answers detailing our operations, services, and strategic channels.
          </p>
        </div>

        <div className="space-y-4 border-t border-neutral-200/60 pt-6">
          {faqData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx} 
                className="border-b border-neutral-200 pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-4 font-bold text-[#1A1A1A] hover:text-[#F4B41A] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 hover:text-[#F4B41A] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#F4B41A]' : ''}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-neutral-600 font-normal text-sm md:text-base leading-relaxed whitespace-pre-line pb-4 pl-1">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Premium CTA back to Ventures */}
      <section id="ventures-redirection" className="mx-[10px] bg-[#F5F2F0] rounded-3xl p-8 md:p-16 text-center space-y-6">
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
          Partner With Africa’s Next Generation of Businesses
        </h3>
        <p className="text-neutral-600 max-w-xl mx-auto text-sm leading-relaxed font-normal">
          From immigration and visa placement platforms to highly-secured real estate strategies and agri-logistics engines with Investas Pro.
        </p>
        <div className="pt-2">
          <Link
            id="partner-cta-btn"
            href="/contact?type=partner"
            className="bg-[#1A1A1A] hover:bg-[#F4B41A] text-white hover:text-black font-extrabold text-sm px-8 py-4 rounded-xl inline-flex items-center gap-1.5 transition-all shadow-md"
          >
            Explore Active Ventures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
