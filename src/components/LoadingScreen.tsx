import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleLoadComplete = () => {
    if (onLoadComplete) {
      onLoadComplete();
    }
  };
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-dark-bg">
      <div className="text-center max-w-md w-full px-4 sm:px-6 md:px-8">
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 mx-auto border-2 border-t-accent-blue border-r-accent-purple border-b-neon-green border-l-white rounded-full shadow-lg shadow-accent-blue/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.h3
          className="font-display text-base xs:text-lg sm:text-xl md:text-2xl text-white tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          YÜKLENİYOR
        </motion.h3>
          <motion.div
          className="mt-3 sm:mt-4 flex justify-center space-x-1.5 sm:space-x-2 md:space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-accent-blue shadow-sm shadow-accent-blue/50"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
          <div className="px-2 xs:px-4 sm:px-6 md:px-8">
          <ProgressBar isLoading={loading} onLoadComplete={handleLoadComplete} />
        </div>
        
        <motion.p
          className="mt-4 sm:mt-5 md:mt-6 text-gray-400 text-xs xs:text-sm sm:text-base font-futuristic px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Geleceğin teknolojilerini yüklüyoruz...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
