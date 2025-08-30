import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './App.css';

// Custom hooks
import { useScrollEffect } from './hooks/useScrollEffect';

// Critical components - immediate load
import { NavigationMenu, Hero } from './components';

// Non-critical components - lazy load
const FeaturesSection = lazy(() => import('./components/home/FeaturesSection'));
const ProductsSection = lazy(() => import('./components/home/ProductsSection'));
const ProjectsSection = lazy(() => import('./components/home/ProjectsSection'));
const ContactSection = lazy(() => import('./components/home/ContactSection'));
const FooterSection = lazy(() => import('./components/layout/FooterSection'));
const FeedbackButton = lazy(() => import('./components/layout/FeedbackButton'));

function App() {
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
    // Background image preload - ana sayfa açıldıktan sonra
    setTimeout(() => {
      const img = new Image();
      img.src = "/gezegenler/earth.jpg";
    }, 100);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <div ref={mainContentRef}>
        <NavigationMenu />
        <Hero />
        <Suspense fallback={<div className="w-full py-8 flex items-center justify-center"><div className="text-accent-blue animate-pulse">Yükleniyor...</div></div>}>
          <ProductsSection />
          <FeaturesSection />
          <ProjectsSection />
          <ContactSection />
          <FooterSection />
        </Suspense>
        
        {/* Scroll to top button */}
        {showScrollToTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[99997] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-blue text-dark-bg flex items-center justify-center shadow-lg hover:brightness-110 transition-all duration-300"
            aria-label="Yukarı çık"
            style={{ zIndex: 99997 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
        
        {/* Feedback button */}
        <Suspense fallback={null}>
          <FeedbackButton />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
