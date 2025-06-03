// Animasyon çözümleri için yardımcı fonksiyonlar

// Sayfa içi link tıklamasında yumuşak kaydırma
export const scrollToSection = (sectionId: string) => {
  console.log(`scrollToSection çağrıldı: ${sectionId}`); // Debug
  const section = document.getElementById(sectionId);
  if (section) {
    console.log(`${sectionId} elementi bulundu, scroll ediliyor...`); // Debug
    section.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    console.error(`${sectionId} elementi bulunamadı!`); // Debug
  }
};

// Animasyon varyantları 
export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};

export const fadeInDownVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};

export const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Element görünürlüğü ve ekrandan ayrılması için geçiş animasyonu
export const smoothTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5
};

// Paralax Efekti için hesaplama
export const getParallaxStyles = (scrollY: number, strength = 0.1) => {
  return {
    transform: `translateY(${scrollY * strength}px)`
  };
};
