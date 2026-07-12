import React from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  mode?: 'char' | 'word' | 'scatter' | 'reveal' | 'fade-slide' | 'slide-right';
  stagger?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = "", 
  delay = 0, 
  once = true,
  mode = 'char',
  stagger
}) => {
  const words = text.split(" ");
  
  const defaultStagger = mode === 'word' ? 0.15 : (mode === 'scatter' ? 0.04 : (mode === 'slide-right' ? 0.07 : 0.05));
  const finalStagger = stagger !== undefined ? stagger : defaultStagger;

  // Golden shimmer glow animation for maximum visual "wow"
  const shimmerAnimation = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: finalStagger,
        delayChildren: delay,
      },
    },
  };

  // Spectacular 3D scatter and assemble variants
  const getVariants = (charIdx: number) => {
    switch (mode) {
      case 'scatter':
        // Alternating initial rotations and translate depths
        const randomX = (charIdx % 3 - 1) * 20;
        const randomY = ((charIdx % 2) === 0 ? 25 : -25);
        const randomRotate = (charIdx % 3 === 0 ? 45 : (charIdx % 3 === 1 ? -45 : 15));
        return {
          hidden: { 
            opacity: 0, 
            x: randomX,
            y: randomY,
            z: -100,
            rotate: randomRotate,
            scale: 0.3,
            filter: "blur(6px)"
          },
          visible: { 
            opacity: 1, 
            x: 0,
            y: 0,
            z: 0,
            rotate: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { 
              type: "spring",
              stiffness: 140,
              damping: 12,
              mass: 0.8
            } 
          }
        };

      case 'reveal':
        return {
          hidden: { 
            opacity: 0, 
            y: "110%",
            rotateX: 60,
            skewY: 7
          },
          visible: { 
            opacity: 1, 
            y: "0%",
            rotateX: 0,
            skewY: 0,
            transition: { 
              duration: 0.7, 
              ease: [0.16, 1, 0.3, 1] 
            } 
          }
        };

      case 'fade-slide':
        return {
          hidden: { 
            opacity: 0, 
            x: charIdx % 2 === 0 ? -15 : 15,
            y: 10,
            filter: "blur(4px)"
          },
          visible: { 
            opacity: 1, 
            x: 0,
            y: 0,
            filter: "blur(0px)",
            transition: { 
              type: "spring",
              stiffness: 110,
              damping: 14
            } 
          }
        };

      case 'slide-right':
        return {
          hidden: { 
            opacity: 0, 
            x: -20,
            filter: "blur(2px)"
          },
          visible: { 
            opacity: 1, 
            x: 0,
            filter: "blur(0px)",
            transition: { 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] // Beautiful ultra-smooth easeOutExpo curve
            } 
          }
        };

      case 'word':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 8,
            filter: "blur(4px)" 
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { 
              duration: 0.5, 
              ease: [0.34, 1.56, 0.64, 1]
            } 
          }
        };

      case 'char':
      default:
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.6,
            y: 6,
            filter: "blur(2px)" 
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { 
              duration: 0.35, 
              ease: [0.34, 1.56, 0.64, 1]
            } 
          }
        };
    }
  };

  return (
    <motion.span
      // Remount on text change (e.g. language switch) so the reveal animation
      // always restarts cleanly instead of getting stuck mid-transition with
      // stale "hidden"/"visible" state from the previous language's text.
      key={text}
      className={`inline-block select-none ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      style={{ perspective: 1000 }}
    >
      {mode === 'word' ? (
        words.map((word, wordIdx) => (
          <motion.span 
            key={wordIdx} 
            variants={getVariants(wordIdx)}
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              textShadow: "0 0 8px rgba(197,168,128,0.4)",
              transition: { duration: 0.2 }
            }}
            className="inline-block mr-[0.25em] cursor-default"
          >
            {word}
          </motion.span>
        ))
      ) : (
        words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden py-1">
            {Array.from(word).map((char, charIdx) => {
              const uniqueIdx = wordIdx * 10 + charIdx;
              return (
                <motion.span
                  key={charIdx}
                  className="inline-block"
                  variants={getVariants(uniqueIdx)}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.25, 
                    color: "#C5A880",
                    transition: { type: "spring", stiffness: 300, damping: 8 }
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))
      )}
    </motion.span>
  );
};
