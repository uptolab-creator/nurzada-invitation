import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TundukOrnament } from './EthnicOrnaments';
import { translations } from '../data';

interface EnvelopeProps {
  onOpen: () => void;
  lang: 'ru' | 'ky' | 'en';
  setLang: (lang: 'ru' | 'ky' | 'en') => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen, lang, setLang }) => {
  const [isOpening, setIsOpening] = useState(false);

  const t = translations[lang];

  const handleLanguageSelect = (selectedLang: 'ru' | 'ky' | 'en') => {
    setLang(selectedLang);
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#ECE9E4] flex flex-col items-center justify-center p-4 gap-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#E4DEC9_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40" />
      
      {/* Container holding the envelope */}
      <div className={`w-full max-w-[420px] aspect-[4/3] relative transition-all duration-1000 ${isOpening ? 'scale-110 opacity-0 translateY(-50px)' : 'scale-100'}`}>
        
        {/* Shadow under the envelope */}
        <div className="absolute bottom-[-10px] inset-x-4 h-6 bg-black/15 blur-md rounded-full" />

        {/* Outer Envelope Body */}
        <div 
          onClick={() => handleLanguageSelect(lang)}
          className="w-full h-full bg-[#FAF6F0] rounded-2xl shadow-2xl border-2 border-brand-accent/30 relative overflow-hidden flex flex-col justify-between p-6 cursor-pointer group"
        >
          {/* Elegant Blue & Gold linings on the border */}
          <div className="absolute inset-2 border border-brand-primary/20 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 border border-brand-accent/20 rounded-xl pointer-events-none" />
          
          {/* Subtle decorative corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-accent/50 rounded-tl" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-brand-accent/50 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-brand-accent/50 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-accent/50 rounded-br" />

          {/* Spacer to align center content */}
          <div className="h-4" />

          {/* Center Calligraphy Text: Bride's name above ceremony name */}
          <div className="text-center my-auto py-2 flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-script text-4xl sm:text-5xl text-brand-primary tracking-wide text-gold-gradient py-1"
            >
              {t.title}
            </motion.h1>
            <div className="w-16 h-[1px] bg-brand-accent/40 my-3" />
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-serif text-lg sm:text-xl font-semibold uppercase tracking-[0.18em] text-brand-accent select-none"
            >
              {t.subtitle}
            </motion.h2>
          </div>

          {/* Decorative Wax Seal (Static & Elegant) */}
          <div className="flex justify-center mb-4 z-10 pointer-events-none">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-accent via-brand-accent to-[#A98C60] shadow-md flex items-center justify-center border border-white/30">
              <TundukOrnament className="w-6 h-6 text-brand-parchment" />
            </div>
          </div>
        </div>
      </div>

      {/* Language choice buttons below envelope */}
      {!isOpening && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center gap-3.5 relative z-20 mt-2 px-4 w-full max-w-[420px]"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-primary/65 font-bold">
            Выберите язык / Тилди тандаңыз
          </span>
          <div className="grid grid-cols-3 gap-2.5 w-full">
            <button
              onClick={() => handleLanguageSelect('ky')}
              className="py-3 bg-white/90 hover:bg-brand-accent/15 border border-brand-accent/35 rounded-xl text-xs font-bold text-brand-primary uppercase tracking-widest shadow-md hover:border-brand-accent hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer text-center"
            >
              Кыргызча
            </button>
            <button
              onClick={() => handleLanguageSelect('ru')}
              className="py-3 bg-white/90 hover:bg-brand-accent/15 border border-brand-accent/35 rounded-xl text-xs font-bold text-brand-primary uppercase tracking-widest shadow-md hover:border-brand-accent hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer text-center"
            >
              Русский
            </button>
            <button
              onClick={() => handleLanguageSelect('en')}
              className="py-3 bg-white/90 hover:bg-brand-accent/15 border border-brand-accent/35 rounded-xl text-xs font-bold text-brand-primary uppercase tracking-widest shadow-md hover:border-brand-accent hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer text-center"
            >
              English
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
