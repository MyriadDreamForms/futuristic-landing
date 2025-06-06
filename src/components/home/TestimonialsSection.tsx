import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG, staggerContainer } from '../../utils/animationSettings';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, image }) => {
  return (
    <motion.div 
      className="tech-card h-full flex flex-col p-4 sm:p-6 md:p-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 } 
        }
      }}
    >
      <div className="mb-4 sm:mb-6 text-accent-blue">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.1.248-.73.168-1.04.237-.93.206l.83-2.773c.47.3 1.01.45 1.62.45.81 0 1.46-.181 1.96-.544.82-.598 1.22-1.494 1.22-2.687 0-1.11-.38-2.014-1.14-2.71-.76-.696-1.71-1.045-2.85-1.045-1.07 0-2.01.358-2.83 1.075-.81.717-1.35 1.65-1.62 2.8-.06.267-.1.506-.12.717-.06.429-.11.928-.13 1.498-.03.566-.04 1.051-.04 1.454 0 1.182.19 2.262.56 3.24.37.978.89 1.76 1.56 2.348.67.587 1.49.88 2.45.88.74 0 1.47-.223 2.19-.669.72-.446 1.14-1.12 1.26-2.022h-1.48c-.28.11-.55.168-.8.174-.25.006-.51-.046-.79-.157-.52-.201-.83-.486-.93-.855zm9.94 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.823-.56-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.1.248-.73.168-1.04.237-.93.206l.83-2.773c.47.3 1.01.45 1.62.45.81 0 1.46-.181 1.96-.544.82-.598 1.22-1.494 1.22-2.687 0-1.11-.38-2.014-1.14-2.71-.76-.696-1.71-1.045-2.85-1.045-1.07 0-2.01.358-2.83 1.075-.81.717-1.35 1.65-1.62 2.8-.06.267-.1.506-.12.717-.06.429-.11.928-.13 1.498-.03.566-.04 1.051-.04 1.454 0 1.182.19 2.262.56 3.24.37.978.89 1.76 1.56 2.348.67.587 1.49.88 2.45.88.74 0 1.47-.223 2.19-.669.72-.446 1.14-1.12 1.26-2.022h-1.48c-.28.11-.55.168-.8.174-.25.006-.51-.046-.79-.157-.52-.201-.83-.486-.93-.855z" />
        </svg>
      </div>
      <p className="text-gray-300 font-futuristic text-sm sm:text-base md:text-lg mb-6 flex-grow">{quote}</p>
      <div className="flex items-center mt-4">
        <img src={image} alt={author} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border border-accent-blue" />
        <div>
          <h4 className="text-white font-display text-sm sm:text-base">{author}</h4>
          <p className="text-gray-400 text-xs sm:text-sm">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Senkronsoft ile çalışmak, işletmemizi dijital geleceğe taşımak için attığımız en stratejik adım oldu. Geliştirdikleri ERP çözümü sayesinde operasyonel verimliliğimiz %40 arttı.",
      author: "Ayşe Yılmaz",
      position: "Yönetici Direktör",
      company: "Mega Holding",
      image: "https://randomuser.me/api/portraits/women/40.jpg"
    },
    {
      quote: "Müşteri ilişkilerini yönetmekte zorlanıyorduk. Senkronsoft'un CRM platformu sayesinde müşteri memnuniyeti skorlarımız %35 yükseldi ve satış dönüşüm oranlarımız belirgin şekilde arttı.",
      author: "Mehmet Kaya",
      position: "Satış Direktörü",
      company: "Nova Teknoloji",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Yapay zeka destekli analitik platformları, işletme kararlarımızı veriye dayalı hale getirmemizi sağladı. Artık pazardaki trendleri öngörebiliyor ve proaktif stratejiler geliştirebiliyoruz.",
      author: "Zeynep Demir",
      position: "Veri Analisti",
      company: "Future Tech",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  return (
    <section id="referanslar" className="relative py-16 sm:py-20 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-blue rounded-full filter blur-[120px] opacity-5"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-purple rounded-full filter blur-[120px] opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={ANIMATION_CONFIG.SLIDE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl font-display text-accent-blue mb-2">REFERANSLARIMIZ</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            MÜŞTERİ <span className="text-accent-blue">YORUMLARI</span>
          </h3>
          <p className="text-gray-300 font-futuristic max-w-2xl mx-auto text-base sm:text-lg">
            Çözümlerimiz ile işletmelerin dijital dönüşüm yolculuğunda elde ettiği sonuçları keşfedin.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
            />
          ))}
        </motion.div>

        {/* Müşteri logoları */}
        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20"
          variants={ANIMATION_CONFIG.SLIDE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h4 className="text-center text-gray-400 font-futuristic mb-6 sm:mb-8">GÜVENİLİR İŞ ORTAKLARIMIZ</h4>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-70">
            {/* Placeholder için şirket logoları */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 flex items-center justify-center">
                <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center border border-gray-700">
                  <span className="text-xs text-gray-600 font-display">LOGO {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
