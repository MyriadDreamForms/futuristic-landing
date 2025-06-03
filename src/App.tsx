import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Komponentleri import edelim
import NavigationMenu from './components/NavigationMenu';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ProductsSection from './components/ProductsSection';
import FooterSection from './components/FooterSection';
import LoadingScreen from './components/LoadingScreen';
import IntroAnimation from './components/IntroAnimation';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FeedbackButton from './components/FeedbackButton';

// Custom hooks
import { useScrollEffect } from './hooks/useScrollEffect';

function App() {
  const [loading, setLoading] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  // Sayfa scroll durumunu takip et
  useScrollEffect({
    threshold: 300,
    onScroll: (direction, scrollY) => {
      // Sayfa 500px'den fazla scroll edildiğinde yukarı çık butonunu göster
      setShowScrollToTop(scrollY > 500);
    }
  });
  
  useEffect(() => {
    // Ses ve diğer kaynakları preload et
    const preloadAssets = async () => {
      try {
        // Görselleri preload et - performans iyileştirmesi için
        const imageUrls = [
          "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+ERP",
          "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+CRM",
          "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+ANALYTICS"
        ];
        
        // Görselleri önbelleğe al
        imageUrls.forEach(src => {
          const img = new Image();
          img.src = src;
        });
        
        // Bu demo için burada kısa bir timeout kullanıyoruz
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
      } catch (error) {
        console.error("Assets yüklenirken hata:", error);
        setLoading(false);
      }
    };
    
    // Tarayıcı performans ölçümlerini başlat
    if ('performance' in window && 'mark' in window.performance) {
      performance.mark('app-start');
    }
    
    preloadAssets();
    
    return () => {
      // Cleanup
    };
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    
    // Performans ölçümleri
    if ('performance' in window && 'mark' in window.performance && 'measure' in window.performance) {
      performance.mark('loading-complete');
      performance.measure('loading-time', 'app-start', 'loading-complete');
    }
  };

  const handleIntroComplete = () => {
    setIntroComplete(true);
    // İntro tamamlandığında sayfa başına kaydır
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Ana içerik yüklendiğinde web hayati önemli metrikleri kaydet
    if ('performance' in window && 'mark' in window.performance) {
      performance.mark('content-visible');
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onLoadComplete={handleLoadComplete} />
        ) : !introComplete ? (
          <IntroAnimation key="intro" onIntroComplete={handleIntroComplete} />
        ) : (
          <div ref={mainContentRef} key="main-content">
            <NavigationMenu />
            <Hero />
            <ProductsSection />
            <FeaturesSection />
            {/* @ts-ignore */}
            <TestimonialsSection />
            {/* @ts-ignore */}
            <ContactSection />
            <FooterSection />
            
            {/* Scroll to top button */}
            {showScrollToTop && (
              <button 
                onClick={scrollToTop}
                className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-blue text-dark-bg flex items-center justify-center shadow-lg hover:brightness-110 transition-all duration-300"
                aria-label="Yukarı çık"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            )}
            
            {/* Feedback button */}
            <FeedbackButton />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
