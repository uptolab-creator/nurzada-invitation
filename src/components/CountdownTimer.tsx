import React, { useState, useEffect } from 'react';
import { Translation } from '../types';

interface CountdownTimerProps {
  t: Translation;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ t }) => {
  // Target date: September 3, 2026, 16:00
  const targetDate = new Date('2026-09-03T16:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.isCompleted) {
    return (
      <div className="text-center py-4 px-6 bg-brand-accent/10 border border-brand-accent/20 rounded-xl max-w-xs mx-auto">
        <p className="font-serif text-xl text-brand-primary font-semibold tracking-wider">
          {t.countdownCompleted}
        </p>
      </div>
    );
  }

  const timeBlocks = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds },
  ];

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <p className="font-serif text-sm uppercase tracking-widest text-brand-primary/70 mb-4 font-medium">
        {t.countdownTitle}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 justify-center">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-sm border border-brand-accent/20 rounded-2xl p-3 sm:p-4 shadow-sm relative overflow-hidden"
          >
            {/* Elegant tiny line background accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-accent/30 via-brand-accent to-brand-accent/30" />
            
            <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary tracking-tight">
              {String(block.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-brand-accent font-semibold mt-1">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
