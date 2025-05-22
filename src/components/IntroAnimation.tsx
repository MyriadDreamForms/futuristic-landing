import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onIntroComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onIntroComplete }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Ses için bir AudioContext kullanıyoruz
    const playThunderSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1.5);
      } catch (error) {
        console.error("Ses efekti oynatılamadı:", error);
      }
    };
    
    // Set a timeout for the animation to complete
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      onIntroComplete();
    }, 4000);

    // Play lightning sound effect
    const playSound = setTimeout(() => {
      playThunderSound();
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(playSound);
    };
  }, [onIntroComplete]);

  return (
    <AnimatePresence>
      {!isAnimationComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
          exit={{ 
            opacity: 0,
            transition: { duration: 1 }
          }}
        >
          <div className="relative w-full h-full overflow-hidden">
            {/* Daha yumuşak ve göz dostu animasyon - parlama efekti azaltıldı */}
            <motion.div 
              className="absolute inset-0 bg-slate-200"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0.2, 0.4, 0.2, 0.3, 0.1, 0],
              }}
              transition={{ 
                duration: 3,
                times: [0, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.25],
                ease: "easeInOut"
              }}
            />

            {/* Lightning content that appears during the flash */}            <motion.div 
              className="absolute inset-0 flex items-center justify-center px-4 xs:px-5 sm:px-6 md:px-8"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.5, 1, 0.7, 1, 0],
              }}
              transition={{ 
                duration: 3,
                times: [0, 0.1, 0.12, 0.14, 0.16, 0.18, 0.5],
                ease: "easeInOut"
              }}
            ><motion.div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
                <motion.h1 
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-dark-bg tracking-widest opacity-80 text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [0.8, 1.1, 1],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ duration: 3, times: [0, 0.2, 0.5] }}
                >
                  GELECEK ŞİMDİ
                </motion.h1>
                <motion.div
                  className="h-0.5 xs:h-1 sm:h-1.5 w-16 xs:w-24 sm:w-32 md:w-40 lg:w-48 bg-dark-bg opacity-60 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: ["0%", "80%", "60%", "100%", "0%"] }}
                  transition={{ duration: 2.5, times: [0, 0.2, 0.3, 0.4, 0.5] }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
