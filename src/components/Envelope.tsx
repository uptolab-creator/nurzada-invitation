import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TundukOrnament } from './EthnicOrnaments';
import { TypewriterText } from './TypewriterText';
import { translations } from '../data';
import { RSVP } from '../types';

interface EnvelopeProps {
  onOpen: () => void;
  lang: 'ru' | 'ky' | 'en';
  setLang: (lang: 'ru' | 'ky' | 'en') => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen, lang, setLang }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  const CORRECT_PASSCODE = '1201';

  // Load RSVPs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nurzada_qyz_uzatuu_rsvps');
    if (saved) {
      try {
        setRsvps(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading RSVPs", e);
      }
    }
  }, [showAdmin, isAuthenticated]);

  const saveRsvps = (updated: RSVP[]) => {
    setRsvps(updated);
    localStorage.setItem('nurzada_qyz_uzatuu_rsvps', JSON.stringify(updated));
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === CORRECT_PASSCODE) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Неверный код доступа / Туура эмес код');
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту запись?')) {
      const updated = rsvps.filter(item => item.id !== id);
      saveRsvps(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('ВНИМАНИЕ! Вы действительно хотите удалить ВСЕ ответы?')) {
      saveRsvps([]);
    }
  };

  const handleCopyToClipboard = () => {
    if (rsvps.length === 0) return;
    
    const headers = 'Имя (Аты),Присутствие (Катышуу),Сопровождающий (Коштоочу),Дата отправки\n';
    const rows = rsvps.map(r => {
      const attendance = r.willAttend ? 'Да / Ооба' : 'Нет / Жок';
      const companion = r.plusOne ? `+1 (${r.companionName || ''})` : 'Нет / Жок';
      return `"${r.name}","${attendance}","${companion}","${r.timestamp}"`;
    }).join('\n');
    
    navigator.clipboard.writeText(headers + rows);
    alert('Список гостей скопирован в буфер обмена!');
  };

  const filteredRsvps = rsvps.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (item.companionName && item.companionName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalAttendees = rsvps.filter(r => r.willAttend).length;
  const plusOnesCount = rsvps.filter(r => r.willAttend && r.plusOne).length;
  const totalGuestsComing = totalAttendees + plusOnesCount;
  const notComingCount = rsvps.filter(r => !r.willAttend).length;

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
            <h1 className="font-script text-4xl sm:text-5xl text-brand-primary tracking-wide text-gold-gradient py-1">
              <TypewriterText text={t.title} mode="slide-right" delay={0.2} once={false} />
            </h1>
            <div className="w-16 h-[1px] bg-brand-accent/40 my-3" />
            <h2 className="font-serif text-lg sm:text-xl font-semibold uppercase tracking-[0.18em] text-brand-accent select-none">
              <TypewriterText text={t.subtitle} mode="reveal" delay={0.7} once={false} />
            </h2>
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

      {/* Organizer Login Button (Exactly matching the design of user image) */}
      {!isOpening && (
        <button
          onClick={() => setShowAdmin(true)}
          className="relative border border-brand-accent/20 rounded-xl px-6 py-3.5 bg-white/45 backdrop-blur-sm flex items-center justify-center gap-3 cursor-pointer hover:bg-white/60 hover:border-brand-accent/40 active:scale-95 transition-all duration-300 group z-20"
        >
          {/* Decorative Corner Lines */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-brand-accent/30" />
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-brand-accent/30" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-brand-accent/30" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-brand-accent/30" />

          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-accent uppercase">
            Вход для организаторов (Акыл & Гулнур)
          </span>
        </button>
      )}

      {/* Overlay admin modal dialog for organisers */}
      <AnimatePresence>
        {showAdmin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-[#1B3E59] text-brand-parchment rounded-2xl p-6 shadow-2xl border border-brand-accent/40 relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 border-b border-brand-accent/20 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-wide text-brand-accent">
                    Панель организатора
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-brand-parchment/60 mt-0.5">
                    Акыл & Гулнур
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowAdmin(false);
                    setIsAuthenticated(false);
                    setAdminPasscode('');
                    setAuthError('');
                  }}
                  className="text-xs text-brand-accent hover:text-white border border-brand-accent/30 rounded-lg px-2.5 py-1.5 transition-colors"
                >
                  Закрыть
                </button>
              </div>

              {!isAuthenticated ? (
                /* Passcode entry with '1201' */
                <form onSubmit={handleAuth} className="space-y-4 max-w-xs mx-auto py-6">
                  <p className="text-xs text-center text-brand-parchment/80">
                    Введите код доступа, чтобы просмотреть список гостей. (Подсказка: ул. 7 апреля 120/1 — код это номер дома)
                  </p>
                  <div className="space-y-2">
                    <input
                      type="password"
                      required
                      placeholder="Код доступа"
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      className="w-full bg-white/10 border border-brand-accent/30 rounded-xl px-4 py-3 text-center text-brand-parchment tracking-widest placeholder:text-brand-parchment/30 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    />
                  </div>
                  {authError && <p className="text-xs text-red-400 text-center">{authError}</p>}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-brand-accent text-[#1B3E59] font-bold rounded-xl transition-transform hover:scale-[1.02]"
                  >
                    Войти
                  </button>
                </form>
              ) : (
                /* Authenticated organizer list */
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-white/5 rounded-xl p-2.5 border border-brand-accent/10">
                      <div className="text-base sm:text-xl font-bold text-brand-accent">{rsvps.length}</div>
                      <div className="text-[8px] uppercase tracking-wider text-brand-parchment/60">Всего анкет</div>
                    </div>
                    <div className="bg-green-950/20 rounded-xl p-2.5 border border-green-800/20">
                      <div className="text-base sm:text-xl font-bold text-green-400">{totalAttendees}</div>
                      <div className="text-[8px] uppercase tracking-wider text-green-400/80">Придут</div>
                    </div>
                    <div className="bg-brand-accent/10 rounded-xl p-2.5 border border-brand-accent/20">
                      <div className="text-base sm:text-xl font-bold text-brand-accent">{plusOnesCount}</div>
                      <div className="text-[8px] uppercase tracking-wider text-brand-accent/80">Сопровож. (+1)</div>
                    </div>
                    <div className="bg-red-950/20 rounded-xl p-2.5 border border-red-800/20">
                      <div className="text-base sm:text-xl font-bold text-red-400">{notComingCount}</div>
                      <div className="text-[8px] uppercase tracking-wider text-red-400/80">Не придут</div>
                    </div>
                  </div>

                  {/* Total summary */}
                  <div className="bg-brand-accent/15 rounded-xl py-3 px-4 flex items-center justify-between border border-brand-accent/20 text-xs font-semibold">
                    <span>Всего придут гостей (+1):</span>
                    <span className="text-brand-accent font-bold text-base">{totalGuestsComing} чел.</span>
                  </div>

                  {/* Actions & Search */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <input
                      type="text"
                      placeholder="Поиск по имени..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full sm:w-56 bg-white/5 border border-brand-accent/30 rounded-xl px-3.5 py-2 text-xs placeholder:text-brand-parchment/30 focus:outline-none focus:ring-1 focus:ring-brand-accent"
                    />
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleCopyToClipboard}
                        disabled={rsvps.length === 0}
                        className="flex-1 sm:flex-none py-2 px-3 bg-brand-accent/20 hover:bg-brand-accent/30 border border-brand-accent/40 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        Копировать CSV
                      </button>
                      <button
                        onClick={handleClearAll}
                        disabled={rsvps.length === 0}
                        className="py-2 px-3 bg-red-950/30 hover:bg-red-900/30 border border-red-800/40 text-red-300 rounded-xl text-xs flex items-center justify-center transition-colors"
                      >
                        Очистить все
                      </button>
                    </div>
                  </div>

                  {/* Guest List Table */}
                  <div className="max-h-60 overflow-y-auto border border-brand-accent/20 rounded-xl bg-black/10">
                    {filteredRsvps.length === 0 ? (
                      <p className="text-center py-8 text-xs text-brand-parchment/40">
                        Нет записей
                      </p>
                    ) : (
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-white/5 border-b border-brand-accent/10 text-brand-accent/80 font-serif">
                            <th className="p-2.5">Имя</th>
                            <th className="p-2.5 text-center">Придет?</th>
                            <th className="p-2.5">Сопровождающий</th>
                            <th className="p-2.5 text-right">Удалить</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {filteredRsvps.map((item) => (
                            <tr key={item.id} className="hover:bg-white/5 transition-colors">
                              <td className="p-2.5 font-medium">{item.name}</td>
                              <td className="p-2.5 text-center">
                                {item.willAttend ? (
                                  <span className="bg-green-500/20 text-green-400 font-bold px-1.5 py-0.5 rounded text-[10px]">Да</span>
                                ) : (
                                  <span className="bg-red-500/20 text-red-400 font-bold px-1.5 py-0.5 rounded text-[10px]">Нет</span>
                                )}
                              </td>
                              <td className="p-2.5 text-brand-parchment/80">
                                {item.plusOne ? <span className="text-brand-accent">+1 ({item.companionName})</span> : <span className="text-brand-parchment/30">—</span>}
                              </td>
                              <td className="p-2.5 text-right">
                                <button
                                  onClick={() => handleDelete(item.id)}
                                  className="text-red-400 hover:text-red-300 font-semibold"
                                >
                                  Удалить
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
