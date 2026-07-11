import React from 'react';
import { motion } from 'motion/react';

// ==========================================
// AUTHENTIC KYRGYZ ORNAMENTS (OIMO)
// Designed in accordance with traditional crafts 
// and the user's provided reference stickers.
// ==========================================

// 1. Kyrgyz Corner Ornament ("Oimo" - classic koshkar muyuz corner style)
export const CornerOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-16 h-16 text-brand-accent ${className}`}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* A highly elegant, authentic double-horn corner ornament */}
    <g transform="translate(10, 10)">
      <path d="M 0,0 C 15,0 25,8 25,18 C 25,25 20,30 15,26 C 10,22 13,16 16,18 C 19,20 18,12 10,12 C 4,12 0,6 0,0 Z" />
      <path d="M 0,0 C 0,15 8,25 18,25 C 25,25 30,20 26,15 C 22,10 16,13 18,16 C 20,19 12,18 12,10 C 12,4 6,0 0,0 Z" />
      <circle cx="2" cy="2" r="2" />
    </g>
  </svg>
);

// 2. Kyrgyz Tunduk / Yurt Crown Symbol
// Symmetrical intersecting chamgarak arches, perfectly matching traditional Kyrgyz tunduk
export const TundukOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`text-brand-accent ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Clip path to ensure intersecting arches end cleanly inside the rim */}
    <defs>
      <clipPath id="tunduk-inner-clip">
        <circle cx="50" cy="50" r="38" />
      </clipPath>
    </defs>

    {/* Double outer ring typical of handcrafted felt shyrdaks & yurt rims */}
    <circle cx="50" cy="50" r="44" strokeWidth="3" />
    <circle cx="50" cy="50" r="38" strokeWidth="1.5" />
    
    {/* Intersecting arches (chamgarak) clipped to the inner circle */}
    <g clipPath="url(#tunduk-inner-clip)">
      {/* 3 Horizontal-ish arches bowing downwards */}
      <path d="M 0 32 Q 50 54 100 32" strokeWidth="3" />
      <path d="M 0 45 Q 50 67 100 45" strokeWidth="3.2" />
      <path d="M 0 58 Q 50 80 100 58" strokeWidth="3" />

      {/* 3 Vertical-ish arches bowing rightwards */}
      <path d="M 32 0 Q 54 50 32 100" strokeWidth="3" />
      <path d="M 45 0 Q 67 50 45 100" strokeWidth="3.2" />
      <path d="M 58 0 Q 80 50 58 100" strokeWidth="3" />
      
      {/* Small wrapping thread crossings in the center to bind the arches */}
      <path d="M 43 45 L 53 55" strokeWidth="1.5" opacity="0.8" />
      <path d="M 53 45 L 43 55" strokeWidth="1.5" opacity="0.8" />
      <path d="M 40 48 L 56 48" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      <path d="M 48 40 L 48 56" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    </g>
  </svg>
);

// 3. Hanging Kyrgyz Ornaments (traditional tassels and beads from yurt interior band)
export const HangingOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 80 180"
    className={`w-14 h-32 text-brand-accent ${className}`}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hanging thread */}
    <line x1="40" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 3" />
    
    {/* Decorative beads */}
    <circle cx="40" cy="20" r="4" />
    <circle cx="40" cy="35" r="5" />
    
    {/* Central Diamond with Horn Ornaments ("Koshkar Muyuz") */}
    <g transform="translate(0, 45)">
      <path d="M40 0 L75 35 L40 70 L5 35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M40 10 L65 35 L40 60 L15 35 Z" fill="currentColor" opacity="0.15" />
      
      {/* Horn curves inside diamond */}
      <path d="M 40,15 C 32,15 28,22 28,30 C 28,37 34,42 40,36 C 46,42 52,37 52,30 C 52,22 48,15 40,15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Side horn extensions */}
      <path d="M5 35 C -5 25, -2 15, 5 15 C 10 15, 12 20, 10 25 C 8 28, 3 24, 5 35 Z" />
      <path d="M75 35 C 85 25, 82 15, 75 15 C 70 15, 68 20, 70 25 C 72 28, 77 24, 75 35 Z" />
    </g>

    {/* Tassel assembly */}
    <line x1="40" y1="115" x2="40" y2="135" stroke="currentColor" strokeWidth="2" />
    <circle cx="40" cy="125" r="3" />
    <path d="M40 135 L50 150 L40 170 L30 150 Z" />
    <circle cx="40" cy="175" r="2.5" />
  </svg>
);

// 4. Suiuu Winged Heart Ornament (HIGHLY ACCURATE REPLICA of reference image 2 / input_file_1.png)
// Features a plump romantic heart with traditional koshkar muyuz inside and cute feathers/wings on the sides!
export const SuiuuHeart: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 110 }) => {
  return (
    <svg
      viewBox="0 0 160 110"
      className={`${className}`}
      style={{ width: size, height: size * (110 / 160) }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Left Wing (Puffy 3-feather layout, exactly as in input_file_1.png) */}
        <g id="puffy-wing-left">
          {/* Feather 1 (top) */}
          <path d="M 36,40 C 24,25 8,30 6,42 C 4,50 16,52 24,49 Z" fill="#FFF2F4" stroke="currentColor" strokeWidth="1" />
          {/* Feather 2 (middle) */}
          <path d="M 36,45 C 18,35 4,45 2,56 C 0,64 16,62 26,54 Z" fill="#FFE5EC" stroke="currentColor" strokeWidth="1" />
          {/* Feather 3 (bottom) */}
          <path d="M 36,50 C 20,50 8,62 10,72 C 12,78 22,70 30,60 Z" fill="#FFD2DF" stroke="currentColor" strokeWidth="1" />
        </g>
      </defs>

      {/* Wings on left and right */}
      <g className="text-brand-accent">
        <use href="#puffy-wing-left" />
        <use href="#puffy-wing-left" transform="translate(160, 0) scale(-1, 1)" />
      </g>

      {/* Styled Heart Container (Double layer for Sticker look) */}
      {/* Outer Heart with Brand Burgundy Border */}
      <path 
        d="M 80,95 C 80,95 40,68 40,44 C 40,24 56,14 80,32 C 104,14 120,24 120,44 C 120,68 80,95 80,95 Z" 
        fill="var(--color-brand-burgundy)" 
        stroke="var(--color-brand-parchment)"
        strokeWidth="2"
      />
      {/* Inner Heart Body in lighter contrast pink/rose */}
      <path 
        d="M 80,90 C 80,90 44,65 44,44 C 44,27 57,18 80,34 C 103,18 116,27 116,44 C 116,65 80,90 80,90 Z" 
        fill="#FF9EAF" 
      />

      {/* Traditional Kyrgyz Ram's Horns (Kochkor Muyuz) inside the heart (from reference 2) */}
      <g transform="translate(80, 52)" fill="none" stroke="var(--color-brand-burgundy)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Right branch curling inwards */}
        <path d="M 0,20 C 0,5 14,-5 20,-5 C 28,-5 32,2 26,10 C 20,16 12,8 16,2" />
        {/* Left branch curling inwards (symmetrical) */}
        <path d="M 0,20 C 0,5 -14,-5 -20,-5 C -28,-5 -32,2 -26,10 C -20,16 -12,8 -16,2" />
        
        {/* Tiny core accent */}
        <circle cx="0" cy="18" r="1.5" fill="var(--color-brand-burgundy)" stroke="none" />
      </g>

      {/* Cute small sparkle/heart over the wings */}
      <circle cx="28" cy="40" r="2.5" fill="var(--color-brand-accent)" />
      <circle cx="132" cy="40" r="2.5" fill="var(--color-brand-accent)" />
    </svg>
  );
};

// 5. Symmetrical Kyrgyz Horizontal Oimo (HIGHLY ACCURATE REPLICA of reference image 1 / pink sticker)
// Made by using mathematically perfect mirrored symmetry (Traditional Felt Cutting fold-and-mirror logic)
export const KyrgyzHorizontalOimo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 160 60"
      className={`h-12 w-auto ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Half segment of the symmetrical horn wave (pink sticker) */}
        <path id="horizontal-oimo-half" d="M 0,40 C 15,40 28,52 38,52 C 48,52 56,44 54,34 C 52,24 40,24 36,32 C 32,40 38,44 42,42 C 46,40 45,34 40,34 M 0,40 C 15,40 25,24 35,24 C 48,24 58,12 68,12 C 78,12 82,20 78,26 C 74,32 66,28 68,22 C 70,16 76,18 74,22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </defs>
      
      {/* Render the folded symmetrical horn oimo */}
      <g className="text-brand-accent">
        <use href="#horizontal-oimo-half" transform="translate(80, 0)" />
        <use href="#horizontal-oimo-half" transform="translate(80, 0) scale(-1, 1)" />
        {/* Solid center bulb */}
        <path d="M 80,30 C 76,30 74,36 80,44 C 86,36 84,30 80,30 Z" />
        <circle cx="80" cy="24" r="3" />
      </g>
    </svg>
  );
};

// 6. Kyrgyz Diamond Medallion / Tört Muyuz (HIGHLY ACCURATE REPLICA of reference image 1 / cyan sticker)
// Traditional 4-fold radial symmetry. Mimics folding felt 4 times to cut a "Tabak Oimo" rug medallion.
export const KyrgyzDiamondOimo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-24 h-24 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* One of the four symmetrical horns (Kochkor Muyuz branch) */}
        <g id="tort-muyuz-branch" fill="currentColor" className="text-brand-accent">
          {/* Symmetrical left-and-right scroll branch pointing to the corner */}
          <path d="M 0,-10 C 6,-12 18,-18 18,-28 C 18,-35 11,-40 5,-40 C -1,-40 -3,-34 -1,-28 C 1,-22 6,-24 5,-18 C 4,-12 1,-10 0,-10 Z" />
          <path d="M 0,-10 C -6,-12 -18,-18 -18,-28 C -18,-35 -11,-40 -5,-40 C 1,-40 3,-34 1,-28 C -1,-22 -6,-24 -5,-18 C -4,-12 -1,-10 0,-10 Z" />
          {/* Inner accent diamond spear */}
          <path d="M 0,-10 L 4,-18 L 0,-24 L -4,-18 Z" fill="currentColor" />
        </g>
      </defs>

      {/* Radial 4-fold composition */}
      <g transform="translate(50, 50)">
        {/* Outer stylized diamond boundary stroke to mimic sticker cut contour */}
        <path 
          d="M 0,-46 L 46,0 L 0,46 L -46,0 Z" 
          fill="none" 
          stroke="var(--color-brand-accent)" 
          strokeWidth="1.5" 
          strokeDasharray="3 3"
          opacity="0.5"
        />

        {/* 4 Rotated branches */}
        <use href="#tort-muyuz-branch" />
        <use href="#tort-muyuz-branch" transform="rotate(90)" />
        <use href="#tort-muyuz-branch" transform="rotate(180)" />
        <use href="#tort-muyuz-branch" transform="rotate(270)" />

        {/* Traditional center cross intersection */}
        <g fill="var(--color-brand-burgundy)">
          <path d="M -8,0 L 8,0" stroke="var(--color-brand-burgundy)" strokeWidth="2.5" />
          <path d="M 0,-8 L 0,8" stroke="var(--color-brand-burgundy)" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="4.5" fill="var(--color-brand-parchment)" stroke="var(--color-brand-burgundy)" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
};

// 7. Kyrgyz Vertical Oimo (HIGHLY ACCURATE REPLICA of reference image 1 / red/brown sticker)
// Elegant asymmetric scrolling vine typical of Kyrgyz wall carvings and dress margins
export const KyrgyzVerticalOimo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 60 160"
      className={`h-40 w-auto ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="text-brand-burgundy">
        {/* Top scroll segment */}
        <path d="M 30,10 C 15,10 8,20 8,32 C 8,42 16,48 24,44 C 30,41 28,34 23,34 C 18,34 16,38 18,42 C 14,46 4,38 8,28 C 12,16 25,8 35,12 C 45,16 42,30 32,44 C 22,58 14,72 18,88 C 22,102 38,98 38,110 C 38,120 28,128 20,124 C 15,120 18,113 23,113 C 27,113 29,118 26,122" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        {/* Connected middle scroll segment */}
        <path d="M 30,70 C 45,70 52,80 52,92 C 52,102 44,108 36,104 C 30,101 32,94 37,94 C 42,94 44,98 42,102 C 46,106 56,98 52,88 C 48,76 35,68 25,72 C 15,76 18,90 28,104 C 38,118 46,132 42,148 C 38,162 22,158 22,170" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        
        {/* Solid leaf elements */}
        <path d="M 30,35 L 34,25 L 30,18 L 26,25 Z" />
        <path d="M 30,95 L 34,85 L 30,78 L 26,85 Z" />
      </g>
    </svg>
  );
};

// 8. Kyrgyz Repeating Vertical Border (using pattern with mathematically mirrored Kochkor Muyuz motifs)
export const KyrgyzVerticalBorder: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      className={`w-12 h-full text-brand-accent ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 60 800"
    >
      <defs>
        <pattern id="kyrgyz-vertical-authentic" width="60" height="80" patternUnits="userSpaceOnUse">
          {/* Mirror-cut traditional border module */}
          <g transform="translate(30, 40)" className="text-brand-accent">
            {/* Top horn curl */}
            <path d="M 0,-15 C 10,-17 20,-24 20,-32 C 20,-38 14,-42 8,-42 C 2,-42 0,-37 2,-32 C 4,-27 9,-28 8,-22 C 7,-16 0,-14 0,-15 Z" fill="currentColor" />
            <path d="M 0,-15 C -10,-17 -20,-24 -20,-32 C -20,-38 -14,-42 -8,-42 C -2,-42 0,-37 -2,-32 C -4,-27 -9,-28 -8,-22 C -7,-16 0,-14 0,-15 Z" fill="currentColor" />
            
            {/* Bottom horn curl */}
            <path d="M 0,15 C 10,17 20,24 20,32 C 20,38 14,42 8,42 C 2,42 0,37 2,32 C 4,27 9,28 8,22 C 7,16 0,14 0,15 Z" fill="currentColor" />
            <path d="M 0,15 C -10,17 -20,24 -20,32 C -20,38 -14,42 -8,42 C -2,42 0,37 -2,32 C -4,27 -9,28 -8,22 C -7,16 0,14 0,15 Z" fill="currentColor" />
            
            {/* Symmetrical connection diamond */}
            <path d="M 0,-8 L 8,0 L 0,8 L -8,0 Z" fill="var(--color-brand-burgundy)" />
          </g>
          {/* Side guides */}
          <line x1="2" y1="0" x2="2" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.15" />
          <line x1="58" y1="0" x2="58" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="60" height="100%" fill="url(#kyrgyz-vertical-authentic)" />
    </svg>
  );
};

// 9. Elegant dividing line using the highly accurate Horizontal Oimo
export const DividingOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-brand-accent/40" />
    <KyrgyzHorizontalOimo className="text-brand-accent scale-90" />
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-brand-accent/40" />
  </div>
);

// 10. Symmetrical Winged Heart Ornament used as the romantic love seal (matches input_file_1.png)
export const HeartOrnament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <SuiuuHeart className={`inline-block ${className}`} size={75} />
);

// 11. Kyrgyz Circular Seal Ornament (Osh / Tunduk styling with koshkar muyuz curves)
export const KyrgyzCircularOrnament: React.FC<{ className?: string; spin?: boolean }> = ({ className = "", spin = false }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`text-brand-accent ${spin ? 'animate-spin-slow' : ''} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="41" strokeDasharray="2 3" strokeWidth="1" />
      <circle cx="50" cy="50" r="37" strokeWidth="1" />
      
      {/* 4 radial scrolls */}
      <g transform="translate(50, 50)">
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 90})`}>
            {/* Horn curl extending out */}
            <path d="M 0,-5 C 8,-5 15,-12 15,-20 C 15,-26 11,-30 6,-30 C 1,-30 0,-26 2,-22 C 4,-18 8,-19 8,-14 C 8,-9 0,-7 0,-5" fill="none" strokeWidth="2.2" />
            <path d="M 0,-5 C -8,-5 -15,-12 -15,-20 C -15,-26 -11,-30 -6,-30 C -1,-30 0,-26 -2,-22 C -4,-18 -8,-19 -8,-14 C -8,-9 0,-7 0,-5" fill="none" strokeWidth="2.2" />
            <path d="M 0,-5 L 3,-10 L 0,-15 L -3,-10 Z" fill="currentColor" />
          </g>
        ))}
      </g>
      <circle cx="50" cy="50" r="5" fill="var(--color-brand-burgundy)" stroke="none" />
    </svg>
  );
};

// 12. Traditional Kyrgyz Sun (recreates the sun with elegant radiating heatwaves from input_file_2.png)
export const EthnicSun: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-14 h-14 text-brand-accent ${className}`}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="10" fill="var(--color-brand-burgundy)" />
    
    {/* Sunrays styled gracefully */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 360) / 12;
      const angleRad = (angle * Math.PI) / 180;
      const x1 = 50 + 20 * Math.cos(angleRad);
      const y1 = 50 + 20 * Math.sin(angleRad);
      const x2 = 50 + 32 * Math.cos(angleRad);
      const y2 = 50 + 32 * Math.sin(angleRad);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      );
    })}
  </svg>
);

// 13. Symmetrical Repeating Horizontal Border Band
export const KyrgyzHorizontalBorder: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      className={`w-full h-8 text-brand-accent/70 ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 800 32"
    >
      <defs>
        <pattern id="kyrgyz-horizontal-authentic" width="80" height="32" patternUnits="userSpaceOnUse">
          <g transform="translate(40, 16)">
            {/* Mirrored Kochkor Muyuz element */}
            <path d="M 0,0 C -5,-5 -15,-8 -22,-8 C -28,-8 -32,-4 -32,1 C -32,6 -28,8 -25,7 C -22,6 -22,1 -18,3 C -14,5 -10,0 0,0 Z" />
            <path d="M 0,0 C 5,-5 15,-8 22,-8 C 28,-8 32,-4 32,1 C 32,6 28,8 25,7 C 22,6 22,1 18,3 C 14,5 10,0 0,0 Z" />
            <path d="M 0,0 C -5,5 -15,8 -22,8 C -28,8 -32,4 -32,-1 C -32,-6 -28,-8 -25,-7 C -22,-6 -22,-1 -18,-3 C -14,-5 -10,0 0,0 Z" />
            <path d="M 0,0 C 5,5 15,8 22,8 C 28,8 32,4 32,-1 C 32,-6 28,-8 25,-7 C 22,-6 22,-1 18,-3 C 14,-5 10,0 0,0 Z" />
            <circle cx="0" cy="0" r="3.5" fill="var(--color-brand-burgundy)" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="32" fill="url(#kyrgyz-horizontal-authentic)" />
    </svg>
  );
};

// 14. Infinite scrolling seamless traditional Kyrgyz "Basyk" (Kyal) running border
export const KyrgyzRunningBorder: React.FC<{ className?: string, color?: string }> = ({
  className = "",
  color = "text-brand-burgundy/80" // Warm burgundy default to suit the elegance of the invitation
}) => {
  return (
    <div className={`w-full h-[22px] overflow-hidden relative select-none pointer-events-none ${className}`}>
      <motion.div
        className={`absolute inset-y-0 flex ${color}`}
        style={{ width: "200%" }}
        animate={{ x: ["-50%", "0%"] }} // Endlessly moves left-to-right
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {/* First identical half */}
        <div className="w-1/2 h-full flex">
          {Array.from({ length: 18 }).map((_, idx) => (
            <svg
              key={idx}
              viewBox="0 0 120 30"
              className="h-full w-auto shrink-0"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ aspectRatio: "120/30" }}
            >
              {/* Top horizontal border bar */}
              <rect x="0" y="2" width="120" height="1.8" />
              
              {/* Bottom horizontal border bar */}
              <rect x="0" y="26.2" width="120" height="1.8" />
              
              {/* Downward triangle/V-shaped frame */}
              <path d="M 10,4 L 60,24 L 110,4 L 102,4 L 60,20.8 L 18,4 Z" />
              
              {/* Left scroll/horn at the top corner */}
              <path d="M 10,4 C 4,4 -2,9 -2,15 C -2,19 1,22 5,22 C 9,22 11,19 9,16 C 7,13 2,15 3,18 C 4,20 6,20 6,18 C 6,14 1,11 5,7 C 7,5 9,4 10,4 Z" />
              
              {/* Right scroll/horn at the top corner (mirrored) */}
              <path d="M 110,4 C 116,4 122,9 122,15 C 122,19 119,22 115,22 C 111,22 109,19 111,16 C 113,13 118,15 117,18 C 116,20 114,20 114,18 C 114,14 119,11 115,7 C 113,5 111,4 110,4 Z" />
              
              {/* Center flower inside the V-shape */}
              {/* Central vertical bud */}
              <path d="M 60,20.8 C 58,15 54,10 60,5 C 66,10 62,15 60,20.8 Z" />
              {/* Left bud petal */}
              <path d="M 60,20.8 C 56,18 52,18 50,14 C 50,11 53,9 56,12 C 59,15 59,18 60,20.8 Z" />
              {/* Right bud petal */}
              <path d="M 60,20.8 C 64,18 68,18 70,14 C 70,11 67,9 64,12 C 61,15 61,18 60,20.8 Z" />
            </svg>
          ))}
        </div>
        
        {/* Second identical half for flawless seamless looping */}
        <div className="w-1/2 h-full flex">
          {Array.from({ length: 18 }).map((_, idx) => (
            <svg
              key={idx}
              viewBox="0 0 120 30"
              className="h-full w-auto shrink-0"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ aspectRatio: "120/30" }}
            >
              {/* Top horizontal border bar */}
              <rect x="0" y="2" width="120" height="1.8" />
              
              {/* Bottom horizontal border bar */}
              <rect x="0" y="26.2" width="120" height="1.8" />
              
              {/* Downward triangle/V-shaped frame */}
              <path d="M 10,4 L 60,24 L 110,4 L 102,4 L 60,20.8 L 18,4 Z" />
              
              {/* Left scroll/horn at the top corner */}
              <path d="M 10,4 C 4,4 -2,9 -2,15 C -2,19 1,22 5,22 C 9,22 11,19 9,16 C 7,13 2,15 3,18 C 4,20 6,20 6,18 C 6,14 1,11 5,7 C 7,5 9,4 10,4 Z" />
              
              {/* Right scroll/horn at the top corner (mirrored) */}
              <path d="M 110,4 C 116,4 122,9 122,15 C 122,19 119,22 115,22 C 111,22 109,19 111,16 C 113,13 118,15 117,18 C 116,20 114,20 114,18 C 114,14 119,11 115,7 C 113,5 111,4 110,4 Z" />
              
              {/* Center flower inside the V-shape */}
              {/* Central vertical bud */}
              <path d="M 60,20.8 C 58,15 54,10 60,5 C 66,10 62,15 60,20.8 Z" />
              {/* Left bud petal */}
              <path d="M 60,20.8 C 56,18 52,18 50,14 C 50,11 53,9 56,12 C 59,15 59,18 60,20.8 Z" />
              {/* Right bud petal */}
              <path d="M 60,20.8 C 64,18 68,18 70,14 C 70,11 67,9 64,12 C 61,15 61,18 60,20.8 Z" />
            </svg>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
