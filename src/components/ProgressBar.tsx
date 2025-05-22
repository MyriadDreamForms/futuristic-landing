import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ProgressBarProps {
  isLoading: boolean;
  onLoadComplete?: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ isLoading, onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (isLoading) {
      // Gerçek bir yüklemede, bu değerler gerçek ilerlemeye göre güncellenir
      // Burada sadece animasyon için yapay bir ilerleme gösteriyoruz
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 15;
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setProgress(100);
          
          // Yükleme animasyonunun tamamlanması için kısa bir gecikme
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 300);
        } else {
          setProgress(currentProgress);
        }
      }, 300);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadComplete]);

  useEffect(() => {
    controls.start({
      width: `${progress}%`,
      transition: { duration: 0.3, ease: "easeInOut" }
    });
  }, [progress, controls]);
  return (
    <div className="w-full h-0.5 xs:h-1 sm:h-1.5 md:h-2 bg-gray-800 mt-4 sm:mt-6 md:mt-8 rounded-full overflow-hidden shadow-inner">
      <motion.div 
        className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue rounded-full"
        animate={controls}
        initial={{ width: "0%" }}
        style={{
          boxShadow: "0 0 10px rgba(58, 137, 201, 0.7)"
        }}
      />
    </div>
  );
};

export default ProgressBar;
