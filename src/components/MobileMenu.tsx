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

  console.log('MobileMenu render - isOpen:', isOpen); // Debug
  
  // Body scroll'unu engelle/serbest bırak
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);
  
  if (!isOpen) {
    console.log('MobileMenu: isOpen false, returning null'); // Debug
    return null;
  }
  
  console.log('MobileMenu: Rendering menu...'); // Debug
  
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          opacity: '1',
          visibility: 'visible',
          zIndex: '9998',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          position: 'fixed'
        }}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div
        id={id || 'mobile-menu'}
        className="fixed top-0 right-0 h-full w-[85%] sm:w-[320px]"
        style={{ 
          backgroundColor: '#0a0a0a', 
          borderLeft: '2px solid #00a8ff',
          opacity: '1',
          visibility: 'visible',
          transform: 'translateX(0)',
          transition: 'transform 0.3s ease-in-out',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.8)',
          zIndex: '9999',
          top: '0',
          right: '0',
          position: 'fixed',
          maxWidth: '320px',
          minHeight: '100vh'
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex flex-col h-full p-6" style={{ 
          paddingTop: '3rem', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: '#0a0a0a',
          overflow: 'auto'
        }}>
          <div className="flex justify-between items-center mb-8">
            <a href="#ana-sayfa" className="flex items-center" onClick={(e) => {
               e.preventDefault();
               scrollToSection('ana-sayfa');
               onClose();
            }}>
              <span className="text-2xl font-bold text-blue-400" style={{ color: '#00a8ff' }}>SENKRON</span>
              <span className="text-2xl font-bold text-white">SOFT</span>
            </a>
            <button 
              className="text-white p-2 hover:text-blue-400 transition-colors duration-300"
              style={{ fontSize: '1.5rem' }}
              onClick={onClose}
              aria-label="Menüyü kapat"
            >
              ✕
            </button>
          </div>

          <nav className="flex-1" aria-label="Mobil gezinme" style={{ flex: '1', display: 'block' }}>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {menuItems.map((item, index) => (
                <li key={item} style={{ marginBottom: '1.5rem', display: 'block' }}>
                  <a 
                    href={`#${getAsciiId(item)}`} 
                    style={{ 
                      color: '#ffffff', 
                      fontSize: '1.125rem', 
                      display: 'block', 
                      padding: '0.75rem 0',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      borderBottom: index < menuItems.length - 1 ? '1px solid #333' : 'none'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = getAsciiId(item);
                      console.log('Clicking:', item, sectionId); // Debug için
                      scrollToSection(sectionId);
                      onClose();
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = '#00a8ff';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = '#ffffff';
                    }}
                  >
                    <span style={{ pointerEvents: 'none' }}>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 mt-6 border-t border-gray-800">
            <button 
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors"
              style={{ 
                width: '100%', 
                backgroundColor: '#00a8ff', 
                color: '#ffffff', 
                padding: '0.75rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer'
              }}
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
