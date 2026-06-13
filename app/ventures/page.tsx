'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Sprout, 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Globe,
  DollarSign,
  Briefcase,
  HelpCircle,
  Truck,
  TrendingUp,
  Percent,
  Layers,
  Award,
  Zap,
  Flame,
  Wrench
} from 'lucide-react';

export default function VenturesPage() {
  // Staflinc Calculator State
  const [income, setIncome] = useState<number>(3500);
  const [duration, setDuration] = useState<number>(6);
  const [region, setRegion] = useState<'europe' | 'north_america' | 'gulf'>('europe');

  // Interactive Diversification Simulator weights
  const [agriWeight, setAgriWeight] = useState<number>(30);
  const [recruitmentWeight, setRecruitmentWeight] = useState<number>(40);
  const [realEstateWeight, setRealEstateWeight] = useState<number>(30);

  // Calculates visa funding support
  const getTravelSponsorship = () => {
    switch (region) {
      case 'europe': return 3800;
      case 'north_america': return 4800;
      case 'gulf': return 2500;
    }
  };

  const getMonthlyPayback = () => {
    return Math.round(income * 0.50);
  };

  const getTotalPaybackValue = () => {
    return getMonthlyPayback() * duration;
  };

  const getNetTakeHome = () => {
    return Math.round(income * 0.50);
  };

  // Portfolio return calculation
  const getSimulatedYieldValue = () => {
    // Agri = 18%, Recruitment = 25%, Real Estate = 12%
    return Math.round((agriWeight * 0.18) + (recruitmentWeight * 0.25) + (realEstateWeight * 0.12));
  };

  // Adjust sliders helper
  const handleAgriSlider = (val: number) => {
    const diff = val - agriWeight;
    setAgriWeight(val);
    // adjust other two proportionally to keep total at 100
    const rem = 100 - val;
    const ratio = recruitmentWeight + realEstateWeight;
    if (ratio === 0) {
      setRecruitmentWeight(rem / 2);
      setRealEstateWeight(rem / 2);
    } else {
      setRecruitmentWeight(Math.round((recruitmentWeight / ratio) * rem));
      setRealEstateWeight(100 - val - Math.round((recruitmentWeight / ratio) * rem));
    }
  };

  const handleRecruitmentSlider = (val: number) => {
    setRecruitmentWeight(val);
    const rem = 100 - val;
    const ratio = agriWeight + realEstateWeight;
    if (ratio === 0) {
      setAgriWeight(rem / 2);
      setRealEstateWeight(rem / 2);
    } else {
      setAgriWeight(Math.round((agriWeight / ratio) * rem));
      setRealEstateWeight(100 - val - Math.round((agriWeight / ratio) * rem));
    }
  };

  const investmentSectors = [
    {
      title: 'Agriculture',
      tag: 'Food Production',
      yieldRate: '18% Avg',
      risk: 'Moderate',
      metric: '3,500+ Farm acres synchronized',
      impact: 'Yield optimization via direct buying channels.',
      icon: Sprout
    },
    {
      title: 'Real Estate',
      tag: 'Middle-Market',
      yieldRate: '12% IRR',
      risk: 'Conservative',
      metric: 'Fully verified titles, 0% litigation',
      impact: 'Commercial leasing & light suburban expansion.',
      icon: Building2
    },
    {
      title: 'Logistics',
      tag: 'Sub-Saharan Supply Chain',
      yieldRate: '22% CAGR',
      risk: 'Moderate',
      metric: '18 Active transport hubs connected',
      impact: 'Bridging farm yield clusters directly with markets.',
      icon: Truck
    },
    {
      title: 'Venture Startups',
      tag: 'High-Growth Tech',
      yieldRate: '35%+ Potential',
      risk: 'High/Opportunistic',
      metric: 'Pre-seed mentorship & financial audit support',
      impact: 'Nurturing innovative local software founders.',
      icon: Zap
    },
    {
      title: 'Food Processing',
      tag: 'Agritech Offtaking',
      yieldRate: '16% Gross margins',
      risk: 'Moderate',
      metric: '100% processing volume scaling',
      impact: 'Value-addition loops for sovereign export products.',
      icon: Layers
    },
    {
      title: 'Intramunicipal Transport',
      tag: 'Regional Freight',
      yieldRate: '14% Yields',
      risk: 'Moderate',
      metric: 'Guaranteed commercial off-taker volumes',
      impact: 'Moving cargo between ports and rural trade nodes.',
      icon: Globe
    }
  ];

  const activeSubsidiaries = [
    {
      id: 'staflinc',
      title: 'Staflinc International',
      tagline: 'Global Human Capital Delivery System',
      description: 'An advanced recruitment platform bridging Ghanaian professionals with high-tier local and international corporate listings. To make international career opportunities accessible to qualified candidates, we fully finance visa processing fees, flight booking, immigration clearance, and resettlement costs. We eliminate the initial financial hurdles of relocating.',
      agreement: 'In return, candidates enter a transparent settlement contract, paying back 50% of their base salary for a pre-negotiated span of initial operational months (typically 6 to 12 months) once placed in their job.',
      image: 'https://picsum.photos/seed/recruit-desk/800/500',
      status: 'Launch Active',
      industry: 'Human Capital & Recruitment'
    },
    {
      id: 'illa-farms',
      title: 'iLLa Farms & Foods Ghana',
      tagline: 'Decentralized Agribusiness Value Chain',
      description: 'A revolutionary logistics and commercial agribusiness network that removes middlemen dependencies in agricultural transactions. We directly bridge independent smallholder farm owners with high-volume end-users, cash-and-carries, manufacturing firms, and foreign export markets.',
      agreement: 'Our model locks in predictive pricing schedules, guaranteeing high-yield cashew, cocoa, organic corn, and plantain supplies while elevating local cooperative farmer margins by up to 35%.',
      image: 'https://picsum.photos/seed/agri-crop/800/500',
      status: 'Launch Active',
      industry: 'Agribusiness & Food Processing'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Holdings',
      tagline: 'High-Integrity Asset Development',
      description: 'Securing prime real estate lots in strategic Ghanaian economic zones, constructing premium light-industrial workspaces, corporate headquarters, and middle-market suburban housing packages.',
      agreement: 'Utilising strict leasehold checks, we enable high-security, transparent buy-and-build frameworks that empower diaspora members to acquire property with complete safety and legal compliance.',
      image: 'https://picsum.photos/seed/real-estate-estate/800/500',
      status: 'Active Sourcing',
      industry: 'Real Estate & Infrastructure'
    },
    {
      id: 'education',
      title: 'Financial Literacy Hub',
      tagline: 'Operational Cultivation & Advisory',
      description: 'Developing structured masterclasses, incubation cohorts, and advisory programs for SMEs and corporate workers. We bridge the critical gap between raw entrepreneurial ideas and institutional venture capital compliance.',
      agreement: 'Providing practical, clear paths to balance-sheet optimization, regulatory registration, tax strategies, and seed funding pipelines.',
      image: 'https://picsum.photos/seed/learning-center/800/500',
      status: 'Active Cohorts',
      industry: 'Corporate Incubation & FinLit'
    },
    {
      id: 'healthcare',
      title: 'e-Health Ventures',
      tagline: 'Digital Diagnostic Connectivity (Future Focus)',
      description: 'A forward-facing platform spearheaded by our medical practitioner founder. e-Health seeks to connect remote community clinics, family practices, and pharmacies across Ghana into a unified cloud-telemedicine system.',
      agreement: 'Developing diagnostic support systems and digital prescription pipelines to drastically reduce maternal and primary consultation waiting lists.',
      image: 'https://picsum.photos/seed/telehealth/800/500',
      status: 'Planning Stage',
      industry: 'Healthcare & Digital Clinic Network'
    }
  ];

  return (
    <div id="ventures-view" className="space-y-32 pt-32 pb-16">
      
      {/* 1. Page Header */}
      <section id="ventures-headline" className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#F4B41A] font-mono block">
          OUR LINES OF WORK
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl text-balance mx-auto">
          Strategic Assets and High-Yield Subsidiaries.
        </h1>
        <p className="text-neutral-500 font-normal text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
          The curated business segments built from the ground up by Investas Pro Ghana as specialized standalone networks.
        </p>
      </section>

      {/* 2. Flagship Venture Spotlight: Staflinc International */}
      <section id="staflinc" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#111111] text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden space-y-12 shadow-xl border border-white/5 max-w-5xl mx-auto">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4B41A] rounded-full filter blur-[180px]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#F4B41A] uppercase tracking-widest font-mono">
                FLAGSHIP VENTURE SPOTLIGHT
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
                Staflinc International
              </h2>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-normal">
                Our premier global human capital deployment engine, dedicated to connecting qualified Ghanaian professionals directly with vetted international contract teams.
              </p>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
                <h4 className="font-bold text-xs text-[#F4B41A]">Zero Capital Burden for Qualified Talent</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  To eliminate immediate financial migration bottlenecks, we fund 100% of visa processing fees, flight logistics, and initial resettlement cash-flow.
                </p>
                <p className="text-xs text-neutral-500 italic">
                  * Payback terms: Once placed, candidates support the program through a straightforward 50% basic salary return contract for a predetermined launch span.
                </p>
              </div>
            </div>

            {/* Right Calculator Column */}
            <div className="lg:col-span-6 bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="text-center">
                <h3 className="font-bold text-base text-[#F4B41A] flex items-center justify-center gap-1.5 font-mono uppercase tracking-wider">
                  <Calculator className="w-4 h-4 text-[#F4B41A]" />
                  Payback Program Estimator
                </h3>
                <p className="text-[10px] text-neutral-400 leading-relaxed pt-1 font-normal">
                  Toggle fields to simulate resettlement budgets and payback frameworks.
                </p>
              </div>

              {/* Inputs */}
              <div className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                    Expected Monthly Net Salary (USD Equivalent)
                  </label>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                    <span className="text-lg font-bold font-mono text-[#F4B41A]">$</span>
                    <input
                      type="number"
                      min="1000"
                      max="20000"
                      step="100"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="bg-transparent border-none text-white text-lg font-extrabold font-mono focus:outline-none w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                      Payback Tenure
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full bg-white/5 text-white text-xs rounded-xl py-3 px-3.5 font-bold border border-white/10 focus:outline-none focus:border-[#F4B41A]"
                    >
                      <option value="6" className="bg-[#111111]">6 Months Span</option>
                      <option value="9" className="bg-[#111111]">9 Months Span</option>
                      <option value="12" className="bg-[#111111]">12 Months Span</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 font-bold">
                      Destination Corridor
                    </label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value as any)}
                      className="w-full bg-white/5 text-white text-xs rounded-xl py-3 px-3.5 font-bold border border-white/10 focus:outline-none focus:border-[#F4B41A]"
                    >
                      <option value="europe" className="bg-[#111111]">UK & Europe</option>
                      <option value="north_america" className="bg-[#111111]">USA & Canada</option>
                      <option value="gulf" className="bg-[#111111]">Gulf Cooperation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Calculations Block */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3.5 text-left text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Estimated Upfront Sponsorship Provided:</span>
                  <span className="font-mono text-white font-extrabold">${getTravelSponsorship().toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-3">
                  <span className="text-[#F4B41A] font-medium">Monthly Program Contribution (50%):</span>
                  <span className="font-mono text-[#F4B41A] font-extrabold">${getMonthlyPayback().toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Monthly Net Career Income (Take-home):</span>
                  <span className="font-mono text-white font-extrabold">${getNetTakeHome().toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-3 border-t border-white/10">
                  <span className="text-neutral-500">Consolidated Paid Settlement:</span>
                  <span className="font-mono text-white text-[11px] font-semibold">${getTotalPaybackValue().toLocaleString()} over {duration} months</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  disabled
                  className="w-full bg-[#F4B41A] text-[#111111] font-extrabold text-xs tracking-wider uppercase py-3.5 rounded-xl opacity-80 cursor-not-allowed shadow"
                >
                  Application Desk Opening Soon
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Subsidiaries Grid */}
      <section id="subsidiary-showcases" className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#F4B41A] uppercase font-bold">PORTFOLIO SEGMENTS</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">
            Our Principal Sectors.
          </h2>
          <p className="text-neutral-500 font-normal text-sm leading-relaxed">
            Investas Pro Ghana develops specialized, asset-backed setups to ensure stable enterprise valuations across diverse financial climates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeSubsidiaries.filter(ven => ven.id !== 'staflinc').map((ven) => (
            <div 
              key={ven.id}
              id={ven.id}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={ven.image}
                  alt={ven.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#1A1A1A] text-[9px] font-mono text-white font-bold uppercase tracking-widest border border-white/10">
                    {ven.status}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#F4B41A]">
                  <span>{ven.industry}</span>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A1A] tracking-tight">{ven.title}</h3>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">{ven.tagline}</p>
                <div className="h-0.5 w-10 bg-neutral-100"></div>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">{ven.description}</p>
                <p className="text-xs bg-[#F9F8F6] border border-neutral-150 p-4 rounded-xl leading-relaxed text-neutral-500 font-normal italic">
                  {ven.agreement}
                </p>
              </div>

              <div className="p-8 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Strategic desk audit</span>
                <Link
                  href={`/contact?type=${ven.id}`}
                  className="inline-flex items-center gap-1 text-xs font-mono tracking-wider text-[#1A1A1A] hover:text-[#F4B41A] font-bold uppercase"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM INVESTMENT OPPORTUNITIES */}
      <section id="investment-opportunities" className="bg-[#FAF9F7] py-24 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F4B41A] font-bold">PARTNER CHANNELS</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1A1A1A] leading-none">
                Sovereign Allocation Opportunities
              </h2>
              <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
                Qualified individual and institutional partners can tap directly into several middle-market, high-interest sectors positioned across Ghana&apos;s sovereign boundary.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-block px-4 py-2 bg-white rounded-full border border-neutral-200 text-xs font-mono text-neutral-500">
                Diversification: Active Managed Portfolios
              </div>
            </div>
          </div>

          {/* Investment opportunities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentSectors.map((sector, sidx) => {
              const Icon = sector.icon;
              return (
                <div key={sidx} className="bg-white rounded-3xl p-8 border border-neutral-200/60 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#F4B41A]/10 text-[#F4B41A] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {sector.yieldRate}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">{sector.tag}</span>
                      <h3 className="text-lg font-extrabold text-[#1A1A1A]">{sector.title}</h3>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {sector.impact}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <div>
                      <span className="block text-[9px] uppercase text-neutral-300 font-bold">Sector metric</span>
                      <span className="text-neutral-600 font-bold">{sector.metric}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] uppercase text-neutral-300 font-bold">Risk profile</span>
                      <span className="text-[#1A1A1A] font-extrabold">{sector.risk}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4b. Dynamic Interactive Diversification Mixer */}
          <div className="max-w-4xl mx-auto bg-[#111111] text-white rounded-[40px] p-8 md:p-12 border border-white/5 mt-16 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[9px] font-mono text-[#F4B41A] tracking-widest uppercase">PORTFOLIO MIXER</span>
              <h3 className="text-2xl font-black text-white">Compound Diversification Engine</h3>
              <p className="text-xs text-neutral-450 max-w-xl mx-auto leading-relaxed">
                Adjust the allocations below to simulate yield metrics based on Investas Pro Ghana&apos;s primary sector historical indices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 items-center">
              
              {/* Sliders */}
              <div className="space-y-6">
                
                {/* Agri Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-450">Agribusiness Core (18%)</span>
                    <span className="text-[#F4B41A] font-bold">{agriWeight}%</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={agriWeight}
                    onChange={(e) => handleAgriSlider(Number(e.target.value))}
                    className="w-full h-1 bg-white/25 accent-[#F4B41A] roundedAppearance cursor-pointer"
                  />
                </div>

                {/* Recruitment Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-450">Global Relocations (25%)</span>
                    <span className="text-[#F4B41A] font-bold">{recruitmentWeight}%</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={recruitmentWeight}
                    onChange={(e) => handleRecruitmentSlider(Number(e.target.value))}
                    className="w-full h-1 bg-white/25 accent-[#F4B41A] roundedAppearance cursor-pointer"
                  />
                </div>

                {/* Real estate weight derived */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-450">Real Estate Assets (12%)</span>
                    <span className="text-[#F4B41A] font-bold">{realEstateWeight}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded overflow-hidden">
                    <div 
                      className="h-full bg-[#F4B41A]/50 transition-all duration-300"
                      style={{ width: `${realEstateWeight}%` }}
                    ></div>
                  </div>
                </div>

              </div>

              {/* Chart Visual feedback */}
              <div className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center text-center space-y-4">
                
                {/* SVG Mock Gauge */}
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle 
                      cx="72" 
                      cy="72" 
                      r="60" 
                      className="stroke-neutral-850"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle 
                      cx="72" 
                      cy="72" 
                      r="60" 
                      className="stroke-[#F4B41A] transition-all duration-300"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 60}`}
                      strokeDashoffset={`${2 * Math.PI * 60 * (1 - getSimulatedYieldValue() / 35)}`}
                    />
                  </svg>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block">EST. YIELD</span>
                    <span className="text-3xl font-black text-[#F4B41A] font-mono">{getSimulatedYieldValue()}%</span>
                  </div>
                </div>

                <p className="text-[10px] text-neutral-400 leading-relaxed font-normal">
                  * Estimated compounded indexes based on historical performance. Calculated in USD/GHS.
                </p>
                <div className="text-xs text-neutral-300 bg-white/5 px-4 py-1.5 rounded-full font-mono">
                  Weighted Mix IRR: <span className="text-emerald-500 font-bold">19.2% Target</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. BUSINESS ECOSYSTEM SECTION */}
      <section id="our-business-ecosystem" className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#F4B41A] font-bold uppercase">OPERATING ENGINE</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] tracking-tight">The Incubation Core Framework</h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            How Investas Pro structures and expands operating enterprises across the West African markets securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-100 hidden md:block -translate-y-1/2"></div>
          
          {/* Phase 1 */}
          <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative z-10 space-y-4 hover:border-[#F4B41A] transition-colors">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F4B41A] font-mono text-xs flex items-center justify-center font-bold">
              01
            </span>
            <h3 className="font-extrabold text-base text-[#1A1A1A]">Structured Seed Support</h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Acquiring agricultural lands, licensing global recruiting portals, or checking commercial real estate titles with zero baseline risk.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative z-10 space-y-4 hover:border-[#F4B41A] transition-colors">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F4B41A] font-mono text-xs flex items-center justify-center font-bold">
              02
            </span>
            <h3 className="font-extrabold text-base text-[#1A1A1A]">Operational Scaffolding</h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Formulating concrete legal setups, deploying internal logistics trackers, and sourcing top professional candidates locally.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative z-10 space-y-4 hover:border-[#F4B41A] transition-colors">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F4B41A] font-mono text-xs flex items-center justify-center font-bold">
              03
            </span>
            <h3 className="font-extrabold text-base text-[#1A1A1A]">Cross-Boundary Matching</h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Deploying agricultural commodities to commercial end users, and sponsoring visa holders into verified contracts abroad safely.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm relative z-10 space-y-4 hover:border-[#F4B41A] transition-colors">
            <span className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#F4B41A] font-mono text-xs flex items-center justify-center font-bold">
              04
            </span>
            <h3 className="font-extrabold text-base text-[#1A1A1A]">Sovereign Integration</h3>
            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Recycling program cash flows into e-health initiatives and broader financial literacy campaigns to lift community economies.
            </p>
          </div>

        </div>
      </section>

      {/* 6. STRATEGIC PARTNERSHIPS */}
      <section id="strategic-partnerships" className="bg-[#111111] text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#F4B41A] font-bold block uppercase">GLOBAL ALLIANCES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                A Unified Front for African Growth
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                Investas Pro bridges private global capital with real high-yield development programs. We prioritize transparency, community resilience, and continuous compliance.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F4B41A]/20 text-[#F4B41A] flex items-center justify-center text-xs mt-0.5">✓</div>
                  <p className="text-xs text-neutral-300">Robust local connections to secure clear, litigation-free land deeds.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F4B41A]/20 text-[#F4B41A] flex items-center justify-center text-xs mt-0.5">✓</div>
                  <p className="text-xs text-neutral-300">International legal counseling across EU, North America, and Gulf regions.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-3">
                <Users className="w-6 h-6 text-[#F4B41A]" />
                <h4 className="font-bold text-base text-white">Trust & Compliance</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Strict accounting standards and sovereign laws ensure complete transparency across real estate & placement ventures.
                </p>
              </div>

              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-3">
                <Globe className="w-6 h-6 text-[#F4B41A]" />
                <h4 className="font-bold text-base text-white">Ecosystem Resilience</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  Guaranteed offtake volumes secure direct cash flows to farmers and protect agricultural investors.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <section id="ventures-cta" className="mx-[10px] bg-[#FAF9F7] rounded-3xl p-8 md:p-16 text-center space-y-6">
        <span className="text-[10px] font-mono tracking-[0.35em] text-[#F4B41A] font-bold block uppercase">BUILD WITH THE LEADERS</span>
        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">
          Invest In Africa’s Future
        </h3>
        <p className="text-neutral-500 max-w-xl mx-auto text-sm leading-relaxed font-normal">
          Connect with our capital allocation desks, venture architects, and recruitment channels to secure premium sovereign positioning.
        </p>
        <div className="pt-2">
          <Link
            id="invest-cta-btn"
            href="/contact?type=investor"
            className="bg-[#1A1A1A] hover:bg-[#F4B41A] text-white hover:text-black font-extrabold text-xs tracking-wider uppercase px-8 py-4 rounded-xl inline-flex items-center gap-1.5 transition-all shadow-md"
          >
            Connect With Our Desk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
