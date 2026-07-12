import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, COLOR_PALETTE_HEX } from './data';
import { Language } from './types';
import { CalendarCard } from './components/CalendarCard';
import { CountdownTimer } from './components/CountdownTimer';
import { RsvpSection } from './components/RsvpSection';
import { AudioPlayer } from './components/AudioPlayer';
import { Envelope } from './components/Envelope';
import { TypewriterText } from './components/TypewriterText';
import {
  TundukOrnament,
  CornerOrnament,
  HangingOrnament,
  DividingOrnament,
  HeartOrnament,
  EthnicSun,
  KyrgyzVerticalBorder,
  KyrgyzDiamondOimo,
  KyrgyzVerticalOimo
} from './components/EthnicOrnaments';

import galleryImage1 from './assets/images/gallery_1.jpg';
import galleryImage2 from './assets/images/gallery_2.jpg';
import galleryImage3 from './assets/images/gallery_3.jpg';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [playTrigger, setPlayTrigger] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [galleryImage1, galleryImage2, galleryImage3];

  // Preload every gallery photo into the browser cache as soon as the app loads,
  // so switching slides in the carousel never has to wait on a network request.
  useEffect(() => {
    galleryImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!isEnvelopeOpen) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [galleryImages.length, isEnvelopeOpen]);

  const t = translations[lang];

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    setPlayTrigger(true);
  };

  if (!isEnvelopeOpen) {
    return <Envelope lang={lang} onOpen={handleOpenEnvelope} setLang={setLang} />;
  }

  return (
    <div className="min-h-screen bg-[#ECE9E4] text-brand-primary flex justify-center items-center py-0 sm:py-12 px-0 sm:px-4 font-sans relative overflow-x-hidden select-none selection:bg-brand-accent/20">
      
      {/* Absolute background patterns outside mobile container for desktop */}
      <div className="absolute inset-0 bg-[radial-gradient(#E4DEC9_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40 z-0 pointer-events-none" />
      
      {/* Flowing marble drapes backgrounds for ultra-high-end feel on desktop */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/5 rounded-full filter blur-3xl opacity-20 pointer-events-none" />

      {/* Music background player */}
      <AudioPlayer playTrigger={playTrigger} />

      {/* Floating Language Selector */}
      <div className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md rounded-full px-1.5 py-1 flex gap-1 shadow-lg border border-brand-accent/30">
        {(['ru', 'ky', 'en'] as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
              lang === l
                ? 'bg-brand-primary text-brand-parchment shadow-md'
                : 'text-brand-primary/70 hover:text-brand-primary hover:bg-brand-accent/10'
            }`}
          >
            {l === 'ky' ? 'KG' : l}
          </button>
        ))}
      </div>

      {/* Primary Mobile-First Container (Mocking a high-end greeting invitation screen) */}
      <main className="w-full max-w-[480px] bg-brand-parchment min-h-screen sm:min-h-[850px] sm:rounded-3xl sm:shadow-[0_25px_60px_-15px_rgba(27,62,89,0.35)] relative overflow-hidden flex flex-col border-0 sm:border-8 border-white/80 z-10">
        
        {/* Ornamental Border lines across all pages */}
        <div className="absolute inset-4 border border-brand-accent/20 rounded-2xl pointer-events-none z-20" />
        <div className="absolute inset-5 border border-brand-accent/10 rounded-2xl pointer-events-none z-20" />

        {/* Decorative corner ornaments in four corners of the container */}
        <CornerOrnament className="absolute top-6 left-6 z-30 opacity-70 scale-75" />
        <CornerOrnament className="absolute top-6 right-6 z-30 rotate-90 opacity-70 scale-75" />
        <CornerOrnament className="absolute bottom-6 left-6 z-30 -rotate-90 opacity-70 scale-75" />
        <CornerOrnament className="absolute bottom-6 right-6 z-30 rotate-180 opacity-70 scale-75" />

        {/* Hanging ethnic ornaments from top (as seen on references) */}
        <div className="absolute top-6 left-16 z-20 opacity-30 pointer-events-none">
          <HangingOrnament />
        </div>
        <div className="absolute top-6 right-16 z-20 opacity-30 pointer-events-none">
          <HangingOrnament className="scale-90" />
        </div>

        {/* ================= HERO SECTION ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative pt-24 pb-16 px-8 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Subtle background ornament slowly rotating */}
          <div className="absolute -top-12 opacity-[0.03] text-brand-primary scale-150 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            >
              <TundukOrnament className="w-96 h-96" />
            </motion.div>
          </div>

          {/* Central Ethnic Header Symbol with slow rotation */}
          <div className="relative mb-6 text-brand-accent flex flex-col items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="w-20 h-20"
            >
              <TundukOrnament className="w-full h-full" />
            </motion.div>
          </div>

          {/* Bride Name Title in High-End Script Calligraphy with scale/fade animation */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-script text-6xl sm:text-7xl text-brand-primary tracking-wide text-gold-gradient py-2"
          >
            {t.title}
          </motion.h1>

          {/* Subtitle / Ceremony name (Qyz Uzatuu) */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif text-xl sm:text-2xl font-semibold uppercase tracking-[0.18em] text-brand-accent mt-3 mb-6 text-center"
          >
            {t.subtitle}
          </motion.h2>

          <div className="w-32">
            <DividingOrnament />
          </div>

          {/* Simple Hero Date and Welcome with elegant delay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 space-y-2"
          >
            <p className="font-serif text-lg tracking-widest text-brand-primary/90">
              03.09.2026
            </p>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-accent font-semibold">
              г. Бишкек / Bishkek
            </p>
          </motion.div>

          {/* Scroll indicators */}
          <div className="mt-12 flex flex-col items-center gap-1.5 animate-bounce">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">
              Scroll down
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.section>

        {/* ================= WELCOME STATEMENT ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-12 px-8 text-center relative"
        >
          {/* Symmetrical slow rotating background watermarks */}
          <div className="absolute top-1/4 -left-12 opacity-[0.05] text-brand-primary pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <KyrgyzDiamondOimo className="w-36 h-36" />
            </motion.div>
          </div>
          <div className="absolute bottom-1/4 -right-12 opacity-[0.05] text-brand-primary pointer-events-none">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              <KyrgyzDiamondOimo className="w-36 h-36" />
            </motion.div>
          </div>

          <div className="max-w-xs mx-auto space-y-6">
            <EthnicSun className="mx-auto text-brand-accent/50 scale-75 animate-spin-slow" />
            
            {/* Elegant Arched Portrait of the Bride with gentle entry */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-64 aspect-[3/4] mx-auto rounded-t-full border-4 border-brand-accent shadow-2xl overflow-hidden group bg-brand-primary/10"
            >
              {/* Internal absolute gold outline */}
              <div className="absolute inset-1.5 border border-white/40 rounded-t-full pointer-events-none z-20" />
              
              {/* Ethnic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent mix-blend-multiply pointer-events-none z-20" />
              
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-t-full z-10">
                <AnimatePresence initial={false}>
                  <motion.img 
                    key={currentImageIndex}
                    src={galleryImages[currentImageIndex]} 
                    alt={`Bride Slide ${currentImageIndex + 1}`} 
                    referrerPolicy="no-referrer"
                    variants={{
                      enter: { x: '100%', opacity: 1 },
                      center: { x: 0, opacity: 1 },
                      exit: { x: '-100%', opacity: 1 }
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 120, damping: 20 },
                      opacity: { duration: 0.5 }
                    }}
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-11 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex 
                        ? 'w-4 bg-brand-accent shadow-sm' 
                        : 'w-1.5 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

            </motion.div>
            


            <p className="font-serif text-base sm:text-lg leading-relaxed text-brand-primary/90 font-light">
              <TypewriterText text={t.hostsInvitation} mode="word" delay={0.2} stagger={0.08} once={true} />
            </p>
            <div className="w-20 mx-auto">
              <DividingOrnament />
            </div>
          </div>
        </motion.section>

        {/* ================= CALENDAR & COUNTDOWN ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-12 px-6 bg-white/30 border-y border-brand-accent/15 relative"
        >
          <div className="space-y-10">
            {/* Save the date textual prompt with bounce bounce arrow element */}
            <div className="text-center space-y-2">
              <span className="text-brand-accent inline-block text-xl">📅</span>
              <h3 className="font-serif text-xl font-bold uppercase tracking-widest text-brand-primary">
                <TypewriterText text={t.saveTheDateTitle} mode="reveal" once={true} />
              </h3>
              <p className="text-xs text-brand-primary/70 max-w-xs mx-auto font-sans leading-relaxed">
                {t.saveTheDateDesc}
              </p>
            </div>

            {/* Custom Interactive September 2026 Calendar Card */}
            <CalendarCard t={t} targetDay={3} />

            {/* Live countdown timer calculation */}
            <CountdownTimer t={t} />
          </div>
        </motion.section>

        {/* ================= THE PROGRAM TIMELINE ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-14 px-8 relative"
        >
          <div className="text-center mb-10">
            <span className="text-brand-accent text-2xl block mb-2">🕊</span>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-brand-primary">
              <TypewriterText text={t.programTitle} mode="scatter" once={true} />
            </h3>
            <div className="w-24 mx-auto mt-2">
              <DividingOrnament />
            </div>
          </div>

          {/* High end graphical timeline */}
          <div className="relative border-l border-brand-accent/30 ml-3 space-y-8 py-2">
            {t.programItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative pl-8 group"
              >
                {/* Pulsating timeline marker node */}
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-brand-parchment border-2 border-brand-accent flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary group-hover:bg-brand-burgundy transition-colors" />
                </span>
                
                {/* Time bubble */}
                <div className="inline-block bg-brand-primary text-brand-parchment text-xs font-bold px-3 py-1 rounded-full mb-2 tracking-wider">
                  {item.time}
                </div>
                
                {/* Item Details */}
                <h4 className="font-serif text-base font-bold text-brand-primary">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= LOCATION & VENUE DETAILS ================= */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-12 px-8 bg-brand-primary text-brand-parchment text-center relative overflow-hidden"
        >
          {/* Subtle background ornament rotating slowly */}
          <div className="absolute -bottom-10 -left-10 opacity-10 text-brand-accent pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="w-48 h-48"
            >
              <TundukOrnament className="w-full h-full" />
            </motion.div>
          </div>

          <div className="relative z-10 space-y-6">
            <span className="text-brand-accent text-2xl block">📍</span>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-brand-accent">
              <TypewriterText text={t.locationTitle} mode="reveal" once={true} />
            </h3>
            
            <div className="space-y-2">
              <p className="font-serif text-xl font-semibold tracking-wide">
                <TypewriterText text={t.locationVenue} mode="fade-slide" once={true} />
              </p>
              <p className="text-xs text-brand-parchment/70 font-sans tracking-wide">
                {t.locationAddress}
              </p>
            </div>

            {/* Timings summary listed next to address */}
            <div className="grid grid-cols-3 gap-2 border-t border-b border-brand-parchment/10 py-4 max-w-sm mx-auto text-[11px] uppercase tracking-wider font-semibold text-brand-accent">
              <div className="space-y-1">
                <span>{t.gatheringLabel}</span>
                <span className="block text-white text-sm font-bold">{t.gatheringTime}</span>
              </div>
              <div className="space-y-1 border-x border-brand-parchment/10">
                <span>{t.officialStartLabel}</span>
                <span className="block text-white text-sm font-bold">{t.officialStartTime}</span>
              </div>
              <div className="space-y-1">
                <span>{t.eveningEndLabel}</span>
                <span className="block text-white text-sm font-bold">{t.eveningEndTime}</span>
              </div>
            </div>

            {/* 2GIS Map Button */}
            <div className="pt-4">
              <a
                href="https://2gis.kg/bishkek/geo/70000001101581212"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-[#b2956c] text-brand-primary font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {/* 2GIS icon mockup */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {t.openMapButton}
              </a>
            </div>
          </div>
        </motion.section>

        {/* ================= DRESS CODE ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-14 px-8 text-center relative"
        >
          <div className="space-y-6">
            <span className="text-brand-accent text-2xl block">👗</span>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-brand-primary">
              <TypewriterText text={t.dressCodeTitle} mode="scatter" once={true} />
            </h3>
            <p className="text-xs text-brand-primary/80 max-w-sm mx-auto leading-relaxed">
              {t.dressCodeDesc}
            </p>

            <div className="w-16 mx-auto">
              <DividingOrnament />
            </div>

            {/* Custom beautiful color swatches with ethnic element look */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {t.dressCodePalette}
              </p>
              
              <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto pt-2">
                {COLOR_PALETTE_HEX.map((colorItem, idx) => (
                  <motion.div
                    key={colorItem.nameKey}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, delay: idx * 0.1 }}
                    className="flex flex-col items-center group cursor-help"
                  >
                    {/* Beautiful Swatch Container */}
                    <div
                      className="h-11 w-11 rounded-full shadow-md border-2 border-white transform transition-transform group-hover:scale-110 relative flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: colorItem.hex }}
                    >
                      {/* Subtle circular border inside swatch */}
                      <span className="absolute inset-0.5 rounded-full border border-white/25" />
                    </div>
                    {/* Translated Color text underneath */}
                    <span className="text-[10px] font-medium text-brand-primary/80 mt-2 truncate w-full text-center">
                      {t.colors[colorItem.nameKey as keyof typeof t.colors]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================= RSVP FORM ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-14 px-6 bg-brand-accent/10 border-t border-brand-accent/20 relative"
        >
          {/* Decorative ornament background rotating slowly */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-brand-primary pointer-events-none">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="w-80 h-80"
            >
              <KyrgyzDiamondOimo className="w-full h-full" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-sm mx-auto">
            <RsvpSection t={t} />
          </div>
        </motion.section>

        {/* ================= FINAL WORDS & LOVE SIGNATURE ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-16 px-8 text-center relative bg-brand-parchment mt-auto"
        >
          <div className="space-y-8 relative z-10">
            <div className="flex justify-center text-brand-accent">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <HeartOrnament className="text-brand-burgundy" />
              </motion.div>
            </div>

            <p className="font-serif text-lg leading-relaxed text-brand-primary/90 max-w-xs mx-auto italic">
              <TypewriterText text={t.finalMessage} mode="word" delay={0.1} stagger={0.08} once={true} />
            </p>

            {/* Hosts signature: love label + names of the celebration's hosts */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                {t.loveLabel}
              </p>
              <p className="font-script text-4xl text-gold-gradient mt-1">
                {t.hostsNames}
              </p>
            </div>

            {/* Bottom mini footer with Tunduk watermark spinning slowly */}
            <div className="pt-6 flex justify-center opacity-25">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="w-12 h-12"
              >
                <TundukOrnament className="w-full h-full text-brand-accent" />
              </motion.div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
