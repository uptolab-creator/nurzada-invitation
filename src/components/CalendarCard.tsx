import React from 'react';
import { Translation } from '../types';

interface CalendarCardProps {
  t: Translation;
  targetDay: number; // 3
}

export const CalendarCard: React.FC<CalendarCardProps> = ({ t, targetDay }) => {
  // September 2026 starts on Tuesday (index 1 of standard 0-6 mon-sun grid)
  // Let's build a grid. In September 2026, there are 30 days.
  // Tuesday is the 1st day of September.
  // Monday is empty.
  const emptyDaysBefore = 1; 
  const totalDays = 30;
  
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const gridItems = [
    ...Array.from({ length: emptyDaysBefore }, () => null),
    ...daysArray
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-brand-primary text-brand-parchment rounded-2xl p-6 shadow-xl border border-brand-accent/30 relative overflow-hidden">
      {/* Decorative background ornament subtle watermark */}
      <div className="absolute -right-10 -bottom-10 opacity-5 text-brand-accent">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      {/* Month Header */}
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl tracking-widest text-brand-accent font-medium uppercase">
          {t.calendarMonth}
        </h3>
        <div className="w-12 h-[2px] bg-brand-accent mx-auto mt-2 rounded-full" />
      </div>

      {/* Weekdays Row */}
      <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-brand-accent/80 mb-4 tracking-wider">
        <div>{t.calendarDays.mon}</div>
        <div>{t.calendarDays.tue}</div>
        <div>{t.calendarDays.wed}</div>
        <div>{t.calendarDays.thu}</div>
        <div>{t.calendarDays.fri}</div>
        <div>{t.calendarDays.sat}</div>
        <div>{t.calendarDays.sun}</div>
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center text-sm font-sans">
        {gridItems.map((day, idx) => {
          if (day === null) {
            return <div key={`empty-${idx}`} className="h-9 w-9" />;
          }

          const isTarget = day === targetDay;

          return (
            <div
              key={`day-${day}`}
              className="relative h-9 w-9 flex items-center justify-center mx-auto"
            >
              {isTarget ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Hearts / Ornaments wrapper */}
                  <span className="absolute h-9 w-9 bg-brand-accent/25 rounded-full animate-ping" />
                  {/* Beautiful gold frame heart enclosing the date */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-10 h-10 text-brand-accent fill-brand-burgundy/90 filter drop-shadow-md"
                  >
                    <path d="M50 85 C50 85, 15 60, 15 35 C15 18, 28 10, 42 18 C46 20, 48 23, 50 26 C52 23, 54 20, 58 18 C72 10, 85 18, 85 35 C85 60, 50 85, 50 85 Z" />
                  </svg>
                  <span className="relative z-10 font-bold text-white text-base">
                    {day}
                  </span>
                </div>
              ) : (
                <span className={`text-brand-parchment/90 ${day === 5 || day === 6 || day === 12 || day === 13 || day === 19 || day === 20 || day === 26 || day === 27 ? 'text-brand-accent' : ''}`}>
                  {day}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
