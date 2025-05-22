// filepath: c:\Users\89429\Desktop\senkronsoft\futuristic-landing\src\components\FeaturesSection.tsx
import React from 'react';

export {};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="tech-card h-full flex flex-col p-4 sm:p-5 md:p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className="text-accent-blue text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="font-display text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base font-futuristic mt-auto">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {  
  const features = [
    {
      icon: '💻',
      title: 'ÖZEL YAZILIM GELİŞTİRME',
      description: 'İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve yüksek performanslı yazılım çözümleri.'
    },
    {
      icon: '🔮',
      title: 'YAPAY ZEKA ENTEGRASYONLARı',
      description: 'İş süreçlerinizi otomatikleştiren ve veri analitiğiyle stratejik kararlar almanızı sağlayan AI çözümleri.'
    },
    {
      icon: '🔐',
      title: 'SİBER GÜVENLİK',
      description: 'Gelişmiş güvenlik protokolleri ile verilerinizi koruyun ve iş sürekliliğinizi garanti altına alın.'
    },
    {
      icon: '📱',
      title: 'MOBİL UYGULAMA GELİŞTİRME',
      description: 'iOS ve Android platformlarında modern, hızlı ve kullanıcı dostu mobil uygulamalar.'
    },
    {
      icon: '🌐',
      title: 'WEB GELİŞTİRME',
      description: 'Responsive tasarım, SEO uyumlu ve yüksek performanslı web siteleri ve web uygulamaları.'
    },
    {
      icon: '⚙️',
      title: 'ENTEGRASYON ÇÖZÜMLERİ',
      description: 'Mevcut sistemlerinizle kusursuz entegrasyon sağlayan API ve middleware geliştirme hizmetleri.'
    },
  ];  
  return (
    <section id="hizmetlerimiz" className="relative py-16 sm:py-20 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full filter blur-[120px] opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple rounded-full filter blur-[120px] opacity-5"></div>
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-display text-accent-blue mb-2">HİZMETLERİMİZ</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">PROFESYONEL <span className="text-accent-blue">YAZILIM ÇÖZÜMLERİ</span></h3>
          <p className="text-gray-300 font-futuristic max-w-2xl mx-auto text-base sm:text-lg px-2">İşletmenizin dijital dönüşümünü sağlayacak kapsamlı yazılım hizmetleri ve teknoloji çözümleri.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
