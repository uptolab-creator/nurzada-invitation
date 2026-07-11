import React, { useState, useEffect, useRef } from 'react';

interface AudioPlayerProps {
  playTrigger?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ playTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string>('/music.mp3');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We try to load /music.mp3 (the custom file placed in public/music.mp3)
    // If it fails (e.g. 404), we gracefully switch to the beautiful default oriental instrumental
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.25; // Gentle volume
    audioRef.current = audio;

    const handleAudioError = () => {
      // If /music.mp3 404s or fails, fallback to standard beautiful melody
      if (audioSrc === '/music.mp3') {
        console.log("Custom music.mp3 not found or failed to load. Falling back to default melody.");
        setAudioSrc('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      }
    };

    audio.addEventListener('error', handleAudioError);

    if (isPlaying) {
      audio.play().catch((err) => {
        console.log("Autoplay prevented", err);
        setIsPlaying(false);
      });
    }

    return () => {
      audio.removeEventListener('error', handleAudioError);
      audio.pause();
    };
  }, [audioSrc]);

  useEffect(() => {
    if (playTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play on trigger prevented", err);
        });
    }
  }, [playTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play prevented by browser policy", err);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* We removed the "Upload/Change" button as requested to prevent anybody else from changing it */}
      
      <button
        onClick={togglePlay}
        className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-brand-accent/30 text-brand-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
        title="Включить / Выключить музыку"
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            {/* Elegant sound wave pulses */}
            <span className="absolute -inset-1 rounded-full bg-brand-accent/20 animate-ping" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </div>
        ) : (
          <div className="relative">
            {/* Animated dot to grab attention for music */}
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </div>
        )}
      </button>

      {/* Floating subtle tooltip if not playing */}
      {!isPlaying && (
        <span className="hidden sm:inline-block bg-white/90 backdrop-blur-md text-[10px] uppercase font-semibold text-brand-primary border border-brand-accent/20 px-3 py-1.5 rounded-full shadow-md tracking-wider animate-bounce">
          🎵 Включить музыку
        </span>
      )}
    </div>
  );
};
