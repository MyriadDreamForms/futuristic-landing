// MobileMenu.tsx
import React from 'react';
import { scrollToSection } from '../utils/animationHelpers';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

// Türkçe karakterleri ASCII'ye dönüştürmek için helper
const getAsciiId = (item: string): string => {
  if (item === 'Ana Sayfa') return 'ana-sayfa';
  else if (item === 'Çözümlerimiz') return 'cozumlerimiz';
  else if (item === 'Hizmetlerimiz') return 'hizmetlerimiz';
  else if (item === 'Referanslar') return 'referanslar';
  else if (item === 'İletişim') return 'iletisim';
  else return item.toLowerCase().replace(/\s+/g, '-');
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, id }) => {
  const menuItems = ["Ana Sayfa", "Çözümlerimiz", "Hizmetlerimiz", "Referanslar", "İletişim"];

  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div
        id={id || 'mobile-menu'}
        className="fixed top-0 right-0 z-50 h-full w-[85%] xs:w-[80%] sm:w-[320px] bg-dark-bg border-l border-accent-blue border-opacity-30 shadow-lg cyber-box safe-area-inset-bottom"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex flex-col h-full p-4 xs:p-5 sm:p-6">
          <div className="flex justify-between items-center mb-6 sm:mb-10">
            <a href="#ana-sayfa" className="flex items-center" onClick={(e) => {
               e.preventDefault();
               scrollToSection('ana-sayfa');
               onClose();
            }}>
              <span className="text-lg xs:text-xl sm:text-2xl font-display font-bold text-accent-blue logo-bright-glow mr-1">SENKRON</span>
              <span className="text-lg xs:text-xl sm:text-2xl font-display font-bold text-white">SOFT</span>
            </a>
            <button 
              className="text-white p-1 hover:text-accent-blue transition-colors duration-300 touch-target"
              onClick={onClose}
              aria-label="Menüyü kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="flex-1" aria-label="Mobil gezinme">
            <ul className="space-y-3 xs:space-y-4 sm:space-y-6">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="hover:translate-x-1 transition-transform duration-200"
                >
                  <a 
                    href={`#${getAsciiId(item)}`} 
                    className="font-futuristic text-sm xs:text-base sm:text-lg md:text-xl text-white hover:text-accent-blue transition-colors duration-300 flex items-center py-2 touch-target"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = getAsciiId(item);
                      scrollToSection(sectionId);
                      onClose();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 mt-2 xs:mt-4 sm:mt-6 border-t border-gray-800">
            <button 
              className="w-full futuristic-button py-2.5 xs:py-3 touch-target"
              onClick={(e) => {
                scrollToSection('iletisim');
                onClose();
              }}
            >
              İLETİŞİME GEÇ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
