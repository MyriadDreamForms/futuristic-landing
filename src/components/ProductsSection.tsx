import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/animationHelpers';

export {};

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
}

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState(0);
    const products: Product[] = [
    {
      id: 1,
      name: "SENKRON ERP",
      tagline: "Kurumsal Kaynak Planlaması",
      description: "Şirketinizin tüm süreçlerini entegre eden, finans, satış, stok, üretim ve insan kaynakları modülleriyle tam kapsamlı ERP çözümü.",
      image: "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+ERP",
      price: "Özel Fiyatlandırma"
    },
    {
      id: 2,
      name: "SENKRON CRM",
      tagline: "Müşteri İlişkileri Yönetimi",
      description: "Müşteri ilişkilerinizi güçlendiren, satış süreçlerinizi optimize eden ve pazarlama kampanyalarınızı analiz eden kapsamlı CRM platformu.",
      image: "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+CRM",
      price: "Aylık ₺999'dan başlayan"
    },
    {
      id: 3,
      name: "SENKRON ANALYTICS",
      tagline: "Veri Analizi Platformu",
      description: "Büyük veriyi anlamlandıran, gerçek zamanlı analizlerle işletmenize değer katan ve yapay zeka destekli tahminlerle geleceğe hazırlayan analitik çözümü.",
      image: "https://via.placeholder.com/500x300/0d0d0d/00a8ff?text=SENKRON+ANALYTICS",
      price: "Aylık ₺1,499'dan başlayan"
    },
  ];  return (
    <section id="cozumlerimiz" className="relative py-16 sm:py-20 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent-blue rounded-full filter blur-[150px] opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-accent-purple rounded-full filter blur-[150px] opacity-5"></div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6">        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base sm:text-lg md:text-xl font-display text-accent-blue mb-1 sm:mb-2 leading-tight">YAZILIM ÇÖZÜMLERİMİZ</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            AKILLI <span className="text-accent-blue">İŞ PLATFORMLARI</span>
          </h3>
          <p className="text-gray-300 font-futuristic max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2 leading-relaxed">
            İşletmenizin ihtiyaçlarına özel geliştirilen ve kullanıma hazır yazılım çözümlerimizle verimliliği artırın.
          </p>
        </motion.div><div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-start lg:items-center">
          {/* Product Navigation */}          <motion.div 
            className="lg:col-span-1 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobil için grid layout, masaüstü için flex column */}
            <div className="grid grid-cols-3 lg:flex lg:flex-col gap-1 sm:gap-2 lg:gap-6 mb-4 sm:mb-6 lg:mb-0">              {products.map((product, index) => (                <button
                  key={`product-${index}-${product.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Product button clicked: ${product.name}, index: ${index}`);
                    setActiveProduct(index);
                  }}
                  className={`w-full h-full min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] text-center lg:text-left p-2 sm:p-3 lg:p-4 border-2 lg:border-l-2 lg:border-t-0 lg:border-r-0 lg:border-b-0 rounded-lg lg:rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center lg:justify-start relative ${
                    activeProduct === index 
                      ? "border-accent-blue bg-accent-blue bg-opacity-10 font-display font-bold text-white shadow-lg lg:shadow-none" 
                      : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300 hover:bg-gray-800 hover:bg-opacity-20"
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="w-full h-full flex items-center justify-center lg:justify-start pointer-events-none absolute inset-0">
                    <h4 className="font-display text-xs sm:text-sm lg:text-base leading-tight pointer-events-none">{product.name}</h4>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
            {/* Active Product Display */}
          <motion.div 
            className="lg:col-span-4 flex flex-col items-center gap-4 sm:gap-6 tech-card p-3 sm:p-4 md:p-6 lg:p-8"
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mobile-first layout: Image first, then content */}
            <div className="w-full max-w-lg neon-border overflow-hidden rounded-lg">
              <img 
                src={products[activeProduct].image} 
                alt={products[activeProduct].name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="w-full text-center md:text-left px-2 sm:px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2 leading-tight">{products[activeProduct].name}</h2>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-blue font-futuristic mb-3 sm:mb-4 leading-tight">{products[activeProduct].tagline}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">{products[activeProduct].description}</p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-3 sm:gap-4">
                <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white text-center sm:text-left">{products[activeProduct].price}</span>                <button 
                  className="futuristic-button text-sm sm:text-base py-2 sm:py-2.5 px-6 sm:px-8 w-full sm:w-auto max-w-xs cursor-pointer"
                  onClick={() => {
                    console.log('DETAYLAR butonuna tıklandı, iletişim bölümüne yönlendiriliyor...'); // Debug
                    scrollToSection('iletisim');
                  }}
                >
                  <span className="pointer-events-none">DETAYLAR</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
