import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { scrollToSection } from '../utils/animationHelpers';

export {};

const NavigationMenu: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('ana-sayfa');
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
        // Görünür bölümü tespit et
      const sections = ['ana-sayfa', 'cozumlerimiz', 'hizmetlerimiz', 'referanslar', 'iletisim'];
      // Navbar'ın yüksekliği (mobil ve masaüstü için farklılık gösterebilir)
      const navbarHeight = scrolled ? 64 : 80; 
      const currentPosition = window.scrollY + navbarHeight; 
      
      // Son olarak bulunan aktif bölümü saklayalım
      let activeFound = false;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            activeFound = true;
            break;
          }
        }
      }
      
      // Eğer hiçbir aktif bölüm bulunamadıysa ve sayfanın en üstündeyse ana sayfayı aktif et
      if (!activeFound && window.scrollY < 100) {
        setActiveSection('ana-sayfa');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Sayfa yüklendiğinde bir kez çalıştırılır
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Mobil menü açıkken vücut kaydırmasını devre dışı bırak
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);  return (    
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-dark-bg bg-opacity-80 shadow-lg px-4 sm:px-6 py-3 sm:py-4' : 'bg-transparent px-4 sm:px-6 py-5 sm:py-6'
      }`}
      role="navigation"
      aria-label="Ana gezinme"
    >      <div className="container mx-auto flex justify-between items-center"><a href="#ana-sayfa" className="flex items-center" aria-label="Ana sayfaya git" onClick={(e) => {
          e.preventDefault();
          scrollToSection('ana-sayfa');
        }}>
          <span className={`text-lg xs:text-xl sm:text-2xl font-display font-bold text-accent-blue logo-bright-glow mr-1 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>SENKRON</span>
          <span className={`text-lg xs:text-xl sm:text-2xl font-display font-bold text-white transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>SOFT</span>
        </a><ul className="hidden md:flex space-x-4 lg:space-x-8">
          {['Ana Sayfa', 'Çözümlerimiz', 'Hizmetlerimiz', 'Referanslar', 'İletişim'].map((item) => {
            // Türkçe karakterleri ASCII karakterlere dönüştür
            let sectionId = '';
            if (item === 'Ana Sayfa') sectionId = 'ana-sayfa';
            else if (item === 'Çözümlerimiz') sectionId = 'cozumlerimiz';
            else if (item === 'Hizmetlerimiz') sectionId = 'hizmetlerimiz';
            else if (item === 'Referanslar') sectionId = 'referanslar';
            else if (item === 'İletişim') sectionId = 'iletisim';
            else sectionId = item.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeSection === sectionId;
            
            return (
              <li
                key={item}
                className="relative"
              >
                <a 
                  href={`#${sectionId}`} 
                  className={`font-futuristic transition-colors duration-300 ${isActive ? 'text-accent-blue' : 'text-white hover:text-accent-blue'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item}
                  <span className="sr-only">{isActive ? '(mevcut sayfa)' : ''}</span>
                </a>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-accent-blue"
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            );
          })}
        </ul>
          <button
          className={`md:hidden text-white hover:text-accent-blue transition-all duration-300 ${scrolled ? 'bg-dark-bg bg-opacity-50 p-1.5 rounded-md' : ''}`}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Menüyü aç"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        
        {/* Mobil Menü */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} id="mobile-menu" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
