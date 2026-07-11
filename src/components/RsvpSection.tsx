import React, { useState, useEffect } from 'react';
import { Translation, RSVP } from '../types';
import { HeartOrnament } from './EthnicOrnaments';

interface RsvpSectionProps {
  t: Translation;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ t }) => {
  const [name, setName] = useState('');
  const [willAttend, setWillAttend] = useState<boolean | null>(null);
  const [plusOne, setPlusOne] = useState(false);
  const [companionName, setCompanionName] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Correct passcode for hosts (e.g., 2026 or 1201)
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
  }, []);

  const saveRsvps = (updated: RSVP[]) => {
    setRsvps(updated);
    localStorage.setItem('nurzada_qyz_uzatuu_rsvps', JSON.stringify(updated));
  };

  // Sends the RSVP to a Google Sheets Apps Script webhook (acts as a shared database).
  // Fire-and-forget with mode: 'no-cors' since Apps Script doesn't return CORS headers.
  const sendToGoogleSheet = (rsvp: RSVP) => {
    const webhookUrl = import.meta.env.VITE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) return;

    fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(rsvp),
    }).catch((err) => console.error('Failed to sync RSVP to Google Sheet', err));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (willAttend === null) return;

    const newRsvp: RSVP = {
      id: Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      willAttend,
      plusOne: willAttend ? plusOne : false,
      companionName: willAttend && plusOne ? companionName.trim() : undefined,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newRsvp, ...rsvps];
    saveRsvps(updated);
    sendToGoogleSheet(newRsvp);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setWillAttend(null);
    setPlusOne(false);
    setCompanionName('');
    setSubmitted(false);
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
    if (window.confirm('Вы уверены, что хотите удалить эту запись? / Өчүрүүнү каалайсызбы?')) {
      const updated = rsvps.filter(item => item.id !== id);
      saveRsvps(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('ВНИМАНИЕ! Вы действительно хотите удалить ВСЕ ответы? / Бардык жоопторду өчүрүүнү каалайсызбы?')) {
      saveRsvps([]);
    }
  };

  const handleCopyToClipboard = () => {
    if (rsvps.length === 0) return;
    
    // Create CSV formatted string
    const headers = 'Имя (Аты),Присутствие (Катышуу),Сопровождающий (Коштоочу),Дата отправки\n';
    const rows = rsvps.map(r => {
      const attendance = r.willAttend ? 'Да / Ооба' : 'Нет / Жок';
      const companion = r.plusOne ? `+1 (${r.companionName || ''})` : 'Нет / Жок';
      return `"${r.name}","${attendance}","${companion}","${r.timestamp}"`;
    }).join('\n');
    
    navigator.clipboard.writeText(headers + rows);
    alert('Список гостей скопирован в буфер обмена в формате CSV! / Коноктор тизмеси көчүрүлдү!');
  };

  // Filtered RSVPs for search
  const filteredRsvps = rsvps.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (item.companionName && item.companionName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalAttendees = rsvps.filter(r => r.willAttend).length;
  const plusOnesCount = rsvps.filter(r => r.willAttend && r.plusOne).length;
  const totalGuestsComing = totalAttendees + plusOnesCount;
  const notComingCount = rsvps.filter(r => !r.willAttend).length;

  return (
    <div className="w-full relative">
      {!showAdmin ? (
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-brand-accent/30 relative">
          
          {/* Internal corner ornaments */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-brand-accent/40 rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-brand-accent/40 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-brand-accent/40 rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-brand-accent/40 rounded-br-lg" />

          <div className="text-center mb-6">
            <span className="text-brand-accent flex justify-center mb-2 animate-bounce">
              <HeartOrnament className="w-8 h-8" />
            </span>
            <h3 className="font-serif text-2xl font-semibold text-brand-primary tracking-wide">
              {t.rsvpTitle}
            </h3>
            <p className="font-serif text-sm italic text-brand-accent mt-1">
              {t.rsvpSubtitle}
            </p>
            <div className="inline-block mt-2 bg-brand-burgundy/10 text-brand-burgundy px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-brand-burgundy/20">
              {t.rsvpDeadline}
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-serif text-xl font-bold text-brand-primary mb-2">
                {t.rsvpSuccessTitle}
              </h4>
              <p className="text-sm text-brand-primary/80 max-w-sm mx-auto mb-6">
                {t.rsvpSuccessDesc}
              </p>
              <button
                onClick={handleResetForm}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-brand-accent/10 border border-brand-accent text-brand-primary font-medium py-2 px-6 rounded-full text-sm transition-all duration-300"
              >
                {t.rsvpSubmitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name input */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-brand-primary/80 uppercase">
                  {t.rsvpNameLabel} <span className="text-brand-burgundy">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.rsvpNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-parchment/60 border border-brand-accent/30 rounded-xl px-4 py-3 text-brand-primary placeholder:text-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 font-sans"
                />
              </div>

              {/* Will Attend Radio-like Buttons */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-wider text-brand-primary/80 uppercase">
                  {t.rsvpWillAttendLabel} <span className="text-brand-burgundy">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setWillAttend(true)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-300 flex items-center justify-center gap-2 ${
                      willAttend === true
                        ? 'bg-brand-primary text-brand-parchment border-brand-primary shadow-md'
                        : 'bg-brand-parchment/40 border-brand-accent/30 text-brand-primary/80 hover:bg-brand-accent/10'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${willAttend === true ? 'bg-brand-accent' : 'bg-gray-300'}`} />
                    {t.rsvpYes}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setWillAttend(false);
                      setPlusOne(false);
                    }}
                    className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-300 flex items-center justify-center gap-2 ${
                      willAttend === false
                        ? 'bg-brand-burgundy text-white border-brand-burgundy shadow-md'
                        : 'bg-brand-parchment/40 border-brand-accent/30 text-brand-primary/80 hover:bg-brand-accent/10'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${willAttend === false ? 'bg-white' : 'bg-gray-300'}`} />
                    {t.rsvpNo}
                  </button>
                </div>
              </div>

              {/* Companion Toggle */}
              {willAttend === true && (
                <div className="space-y-4 animate-fade-in-up">
                  <label className="flex items-center gap-3 cursor-pointer py-1">
                    <input
                      type="checkbox"
                      checked={plusOne}
                      onChange={(e) => setPlusOne(e.target.checked)}
                      className="w-4 h-4 rounded text-brand-primary border-brand-accent/50 focus:ring-brand-accent cursor-pointer"
                    />
                    <span className="text-sm font-medium text-brand-primary/80">
                      {t.rsvpPlusOneLabel}
                    </span>
                  </label>

                  {plusOne && (
                    <div className="space-y-2 animate-fade-in-up">
                      <label className="block text-xs font-semibold tracking-wider text-brand-primary/80 uppercase">
                        {t.rsvpPlusOnePlaceholder}
                      </label>
                      <input
                        type="text"
                        required={plusOne}
                        placeholder={t.rsvpPlusOnePlaceholder}
                        value={companionName}
                        onChange={(e) => setCompanionName(e.target.value)}
                        className="w-full bg-brand-parchment/60 border border-brand-accent/30 rounded-xl px-4 py-3 text-brand-primary placeholder:text-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300 font-sans"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={willAttend === null}
                className={`w-full py-3 px-6 rounded-xl font-medium tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                  willAttend === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-brand-primary to-brand-primary/95 text-brand-parchment hover:shadow-lg active:scale-[0.98]'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t.rsvpSubmitButton}
              </button>
            </form>
          )}
        </div>
      ) : (
        /* Admin RSVP Dashboard Panel */
        <div className="bg-brand-primary text-brand-parchment rounded-2xl p-6 shadow-2xl border border-brand-accent/50 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6 border-b border-brand-accent/20 pb-4">
            <div>
              <h3 className="font-serif text-xl font-bold tracking-wide text-brand-accent">
                Панель RSVP
              </h3>
              <p className="text-[10px] uppercase tracking-wider text-brand-parchment/60 mt-0.5">
                Контроль списка гостей
              </p>
            </div>
            <button
              onClick={() => {
                setShowAdmin(false);
                setIsAuthenticated(false);
                setAdminPasscode('');
              }}
              className="text-xs text-brand-accent hover:text-white border border-brand-accent/30 rounded-lg px-2.5 py-1 transition-colors"
            >
              Закрыть
            </button>
          </div>

          {!isAuthenticated ? (
            /* Simple passcode authentication to keep guest page safe */
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
                className="w-full py-2.5 bg-brand-accent text-brand-primary font-bold rounded-xl transition-transform hover:scale-[1.02]"
              >
                Войти
              </button>
            </form>
          ) : (
            /* Real Dashboard View */
            <div className="space-y-6">
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white/5 rounded-xl p-2.5 border border-brand-accent/10">
                  <div className="text-lg sm:text-2xl font-bold text-brand-accent">{rsvps.length}</div>
                  <div className="text-[9px] uppercase tracking-wider text-brand-parchment/60">Всего анкет</div>
                </div>
                <div className="bg-green-950/20 rounded-xl p-2.5 border border-green-800/20">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{totalAttendees}</div>
                  <div className="text-[9px] uppercase tracking-wider text-green-400/80">Придут</div>
                </div>
                <div className="bg-brand-accent/10 rounded-xl p-2.5 border border-brand-accent/20">
                  <div className="text-lg sm:text-2xl font-bold text-brand-accent">{plusOnesCount}</div>
                  <div className="text-[9px] uppercase tracking-wider text-brand-accent/80">Сопровож. (+1)</div>
                </div>
                <div className="bg-brand-burgundy/10 rounded-xl p-2.5 border border-brand-burgundy/20">
                  <div className="text-lg sm:text-2xl font-bold text-red-400">{notComingCount}</div>
                  <div className="text-[9px] uppercase tracking-wider text-red-400/80">Не придут</div>
                </div>
              </div>

              {/* Total Guest Sum info */}
              <div className="bg-brand-accent/15 rounded-xl py-3 px-4 flex items-center justify-between border border-brand-accent/20 text-xs font-semibold">
                <span>Общее ожидаемое количество людей на торжестве:</span>
                <span className="text-brand-accent font-bold text-base sm:text-lg">{totalGuestsComing} чел.</span>
              </div>

              {/* Actions & Search */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <input
                  type="text"
                  placeholder="Поиск по имени гости..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 bg-white/5 border border-brand-accent/30 rounded-xl px-3.5 py-2 text-xs placeholder:text-brand-parchment/30 focus:outline-none focus:ring-1 focus:ring-brand-accent"
                />
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyToClipboard}
                    disabled={rsvps.length === 0}
                    className="flex-1 sm:flex-none py-2 px-3 bg-brand-accent/20 hover:bg-brand-accent/30 border border-brand-accent/40 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Скопировать CSV
                  </button>
                  <button
                    onClick={handleClearAll}
                    disabled={rsvps.length === 0}
                    className="py-2 px-3 bg-brand-burgundy/20 hover:bg-brand-burgundy/30 border border-brand-burgundy/40 text-red-300 rounded-xl text-xs flex items-center justify-center transition-colors"
                    title="Очистить список"
                  >
                    Очистить
                  </button>
                </div>
              </div>

              {/* Guests List Scroll Table */}
              <div className="max-h-64 overflow-y-auto border border-brand-accent/20 rounded-xl bg-black/10">
                {filteredRsvps.length === 0 ? (
                  <p className="text-center py-8 text-xs text-brand-parchment/40">
                    Нет записей / Маалымат жок
                  </p>
                ) : (
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-white/5 border-b border-brand-accent/10 text-brand-accent/80 font-serif">
                        <th className="p-2.5">Имя</th>
                        <th className="p-2.5 text-center">Придет?</th>
                        <th className="p-2.5">Сопровождающий</th>
                        <th className="p-2.5 text-right">Управление</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredRsvps.map((item) => (
                        <tr key={item.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-2.5 font-medium">{item.name}</td>
                          <td className="p-2.5 text-center">
                            {item.willAttend ? (
                              <span className="bg-green-500/20 text-green-400 font-bold px-1.5 py-0.5 rounded text-[10px]">
                                Да
                              </span>
                            ) : (
                              <span className="bg-brand-burgundy/20 text-red-400 font-bold px-1.5 py-0.5 rounded text-[10px]">
                                Нет
                              </span>
                            )}
                          </td>
                          <td className="p-2.5 text-brand-parchment/80">
                            {item.plusOne ? (
                              <span className="text-brand-accent">
                                +1 ({item.companionName})
                              </span>
                            ) : (
                              <span className="text-brand-parchment/30">—</span>
                            )}
                          </td>
                          <td className="p-2.5 text-right">
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-red-400 hover:text-red-300 font-semibold p-1 transition-colors"
                              title="Удалить"
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
        </div>
      )}
    </div>
  );
};
