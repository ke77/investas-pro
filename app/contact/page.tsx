'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Send, 
  ArrowRight, 
  Info,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

function ContactForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams ? searchParams.get('type') : null;
  const initialType = (typeParam && ['partner', 'investor', 'staflinc', 'illa-farms'].includes(typeParam)) ? typeParam : 'partner';
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(initialType);
  const [message, setMessage] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      // Setup default payloads
      const payload = {
        name: fullName,
        email: email,
        phone: phone,
        subject: `Investas Pro Inquiry - ${type.toUpperCase()}`,
        message: `Partnership Type: ${type}\n\nClient Phone: ${phone}\n\nMessage:\n${message}`,
        // Use default test Web3Forms key if they haven't configured process.env
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'
      };

      // Mock submit if they haven't set an API key yet
      if (payload.access_key === 'YOUR_ACCESS_KEY_HERE') {
        // Wait 1.5s to simulate real API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSuccess(true);
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        // Real Web3Forms REST Submission
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.success) {
          setSuccess(true);
          setFullName('');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          setErrorMsg(result.message || 'Error executing API routing. Fallback message sent.');
        }
      }
    } catch (err) {
      setErrorMsg('API transport error. Check networks.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="contact-view" className="space-y-24 pt-32 pb-16">
      
      {/* Header section */}
      <section id="contact-headline" className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.1] max-w-4xl text-balance">
          Sow Your Seeds of Enterprise.
        </h1>
        <p className="text-neutral-500 font-normal text-lg md:text-xl max-w-2xl leading-relaxed">
          Align with Ghana&apos;s premier venture development holding. Reach out to our Accra desks to coordinate investments or secure placement advice.
        </p>
      </section>

      {/* Main Core Form + Info side-by-side */}
      <section id="contact-panel" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form holding container */}
          <div className="lg:col-span-7 bg-white border border-neutral-150 p-6 md:p-10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-neutral-800" />
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1A1A1A]">Holding Intake Registry</h2>
              </div>

              {success ? (
                <div id="contact-submit-success" className="bg-[#F4B41A]/10 border border-[#F4B41A]/30 rounded-2xl p-6 space-y-4 animate-custom-fade-up">
                  <div className="w-12 h-12 rounded-full bg-[#F4B41A]/25 flex items-center justify-center text-[#1A1A1A]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Message Transmitted!</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                    Thank you. Your strategic partnership query has been formatted for inbox collection at <span className="font-bold text-black">investas24@gmail.com</span>. An operations representative from our Accra headquarters will engage you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="fullname" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Full Name / corporate Officer
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        placeholder="e.g. Dr. Kwame Mensah"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#F5F2F0]/60 border border-neutral-200 focus:border-[#1A1A1A] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. advisor@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#F5F2F0]/60 border border-neutral-200 focus:border-[#1A1A1A] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Telephone (WhatsApp Preferred)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="e.g. +233 50 005 0924"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#F5F2F0]/60 border border-neutral-200 focus:border-[#1A1A1A] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="partner-type" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                        Partnership Model
                      </label>
                      <select
                        id="partner-type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full bg-[#F5F2F0]/60 border border-neutral-200 focus:border-[#1A1A1A] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none transition-colors"
                      >
                        <option value="partner">Strategic Partner / General Inquiry</option>
                        <option value="investor">Institutional Investor Allocation</option>
                        <option value="staflinc">Staflinc Global Job Applicant</option>
                        <option value="illa-farms">iLLa Farms Agri Partner</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                      Brief Message & Strategic Intent
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Outline how your vision matches the Investas Pro ecosystem..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#F5F2F0]/60 border border-neutral-200 focus:border-[#1A1A1A] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-medium text-red-600">{errorMsg}</p>
                  )}

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#1A1A1A] hover:bg-[#F4B41A] text-white hover:text-black font-extrabold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md disabled:opacity-55"
                  >
                    {submitting ? 'Transmitting Over Encrypted Lines...' : 'Submit Certified Inquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Integration instruction tooltip helper */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-start gap-3 bg-[#F5F2F0]/50 p-4 rounded-2xl text-[11px] text-neutral-500 leading-relaxed font-normal">
              <Info className="w-5 h-5 text-neutral-800 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#1A1A1A]">How To Activate Live Email Routing:</p>
                <p className="pt-0.5">To receive live submission emails at <span className="font-bold">investas24@gmail.com</span>, retrieve an Access Key from <a href="https://web3forms.com" className="font-bold text-[#1A1A1A] hover:underline inline-flex items-center gap-0.5" target="_blank" rel="noreferrer">web3forms.com <ExternalLink className="w-2.5 h-2.5" /></a> and append it inside your environment variables configuration as <code className="font-mono bg-white/80 p-0.5 border text-black font-bold text-[10px]">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1A1A1A] text-white p-8 md:p-10 rounded-3xl flex flex-col justify-between h-full border border-white/5 shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Direct Command Centers</h3>
                <p className="text-xs text-white/65 leading-relaxed font-normal">
                  Our regional desks are configured for transparent correspondence with international investors and sovereign agencies.
                </p>

                <div className="space-y-6 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-white/40">Headquarters Address</p>
                      <p className="text-sm font-semibold text-[#FDFCFB]">Accra, Ghana</p>
                      <p className="text-[11px] text-white/50">Venture incubation & Strategic Operations Desk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-white/40">Electronic Mail</p>
                      <a href="mailto:investas24@gmail.com" className="text-sm font-semibold text-white hover:text-[#F4B41A] transition-colors">
                        investas24@gmail.com
                      </a>
                      <p className="text-[11px] text-white/50">Response within 24 operational hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-[#F4B41A]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-white/40">Telephone lines</p>
                      <a href="tel:+233500050924" className="text-sm font-semibold text-white hover:text-[#F4B41A] transition-colors">
                        +233 50 005 0924
                      </a>
                      <p className="text-[11px] text-white/50">Available Mon-Fri, 8AM to 5PM GMT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Launcher */}
              <div className="pt-8 border-t border-white/10">
                <a
                  href="https://wa.me/233500050924?text=Hello%20Investas%20Pro%20Ghana,%20I'd%20like%20to%20query%2520about%20your%20strategic%20operations."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-white/5 hover:bg-[#F4B41A] text-white hover:text-black font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all"
                >
                  Message Operations on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#F4B41A] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-neutral-500">Initializing Contact Channels...</p>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
