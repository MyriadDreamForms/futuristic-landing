import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg sm:text-xl font-display text-accent-blue mb-2">YAZILIM ÇÖZÜMLERİMİZ</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">AKILLI <span className="text-accent-blue">İŞ PLATFORMLARI</span></h3>
          <p className="text-gray-300 font-futuristic max-w-2xl mx-auto text-base sm:text-lg px-2">İşletmenizin ihtiyaçlarına özel geliştirilen ve kullanıma hazır yazılım çözümlerimizle verimliliği artırın.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
          {/* Product Navigation */}
          <motion.div 
            className="lg:col-span-1 flex flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-8 justify-center overflow-x-auto lg:overflow-visible mb-6 lg:mb-0 pb-2 lg:pb-0 no-scrollbar"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`text-left min-w-[120px] sm:min-w-[150px] lg:min-w-0 border-l-2 pl-2 sm:pl-4 py-1.5 sm:py-2 transition-all duration-300 ${
                  activeProduct === index 
                    ? "border-accent-blue font-display font-bold" 
                    : "border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                <h4 className="font-display text-sm sm:text-base">{product.name}</h4>
                {activeProduct === index && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="block text-xs sm:text-sm text-accent-blue mt-1"
                  >
                    {product.tagline}
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
          
          {/* Active Product Display */}
          <motion.div 
            className="lg:col-span-4 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 tech-card p-4 sm:p-6 md:p-8"
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-1/2 neon-border overflow-hidden rounded-md">
              <img 
                src={products[activeProduct].image} 
                alt={products[activeProduct].name}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 sm:px-4 py-4 md:py-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">{products[activeProduct].name}</h2>
              <h3 className="text-base sm:text-lg md:text-xl text-accent-blue font-futuristic mb-3 sm:mb-4">{products[activeProduct].tagline}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{products[activeProduct].description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                <span className="text-xl sm:text-2xl font-display font-bold text-white">{products[activeProduct].price}</span>
                <button className="futuristic-button text-sm sm:text-base py-1.5 sm:py-2 w-full sm:w-auto">DETAYLAR</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
