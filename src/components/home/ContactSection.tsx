import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '../../utils/animationSettings';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'Yazılım Geliştirme'
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validatePhone = (phone: string): boolean => {
    // Boş bırakılabilir olduğu için boş değer true döndürür
    if (!phone) return true;
    
    // Basit bir telefon numarası doğrulaması (en az 10 karakter ve sadece rakam, +, - ve parantez içerebilir)
    const re = /^[0-9+\-()\s]{10,}$/;
    return re.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form doğrulama
    let errors = [];
    
    if (!formData.name) {
      errors.push('İsim alanı zorunludur.');
    }
    
    if (!formData.email) {
      errors.push('E-posta alanı zorunludur.');
    } else if (!validateEmail(formData.email)) {
      errors.push('Lütfen geçerli bir e-posta adresi girin.');
    }
    
    if (!validatePhone(formData.phone)) {
      errors.push('Lütfen geçerli bir telefon numarası girin.');
    }
    
    if (!formData.message) {
      errors.push('Mesaj alanı zorunludur.');
    }
    
    if (errors.length > 0) {
      setFormStatus({
        submitted: true,
        success: false,
        message: errors.join(' ')
      });
      return;
    }

    // Gönderim durumunu göster
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Mesajınız gönderiliyor...'
    });
    
    // Gerçek uygulamada burada bir API çağrısı yapılır
    // Bu örnekte sadece başarılı bir gönderim simülasyonu yapıyoruz
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.'
      });
      
      // Formu sıfırla
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'Yazılım Geliştirme'
      });
    }, 1000);
  };
  return (    <section id="iletisim" className="relative py-12 xs:py-16 sm:py-20 md:py-24 bg-dark-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-accent-blue rounded-full filter blur-[150px] opacity-5"></div>
      <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-accent-purple rounded-full filter blur-[150px] opacity-5"></div>
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={ANIMATION_CONFIG.SLIDE_UP}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl font-display text-accent-blue mb-2">İLETİŞİM</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            BİZE <span className="text-accent-blue">ULAŞIN</span>
          </h3>
          <p className="text-gray-300 font-futuristic max-w-2xl mx-auto text-base sm:text-lg">
            Projeleriniz için teknoloji çözümleri sunmamızı isterseniz bizimle iletişime geçin. Size özel çözümler için hazırız.
          </p>
        </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-start">
          {/* İletişim Bilgileri */}
          <motion.div 
            variants={ANIMATION_CONFIG.SLIDE_UP}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-2 lg:order-1 mt-8 lg:mt-0"
          >            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 xs:space-x-4">
                <div className="bg-black bg-opacity-70 p-2 xs:p-2.5 sm:p-3 rounded-lg border border-accent-blue text-accent-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>                <div>
                  <h4 className="font-display text-white text-base xs:text-lg sm:text-xl mb-0.5 xs:mb-1">Ofis Adresimiz</h4>
                  <p className="text-gray-300 font-futuristic text-xs xs:text-sm sm:text-base">Teknoloji Vadisi, 34000, İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-black bg-opacity-70 p-2 sm:p-3 rounded-lg border border-accent-blue text-accent-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>                <div>
                  <h4 className="font-display text-white text-base xs:text-lg sm:text-xl mb-0.5 xs:mb-1">Telefon</h4>
                  <p className="text-gray-300 font-futuristic text-xs xs:text-sm sm:text-base">+90 212 555 1234</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-black bg-opacity-70 p-2 sm:p-3 rounded-lg border border-accent-blue text-accent-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>                <div>
                  <h4 className="font-display text-white text-base xs:text-lg sm:text-xl mb-0.5 xs:mb-1">E-posta</h4>
                  <p className="text-gray-300 font-futuristic text-xs xs:text-sm sm:text-base">info@senkronsoft.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-black bg-opacity-70 p-2 sm:p-3 rounded-lg border border-accent-blue text-accent-blue flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>                <div>
                  <h4 className="font-display text-white text-base xs:text-lg sm:text-xl mb-0.5 xs:mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-300 font-futuristic text-xs xs:text-sm sm:text-base">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* İletişim Formu */}          <motion.div
            variants={ANIMATION_CONFIG.SLIDE_UP}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="tech-card p-3 xs:p-4 sm:p-6 md:p-8 order-1 lg:order-2 shadow-lg shadow-accent-blue/10"
          >
            <form onSubmit={handleSubmit}>              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-4 xs:mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-display text-xs xs:text-sm mb-1 xs:mb-2">
                    İsim Soyisim <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 text-white outline-none transition-colors duration-300 text-xs xs:text-sm sm:text-base"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>                <div>
                  <label htmlFor="email" className="block text-white font-display text-xs xs:text-sm mb-1 xs:mb-2">
                    E-posta <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 text-white outline-none transition-colors duration-300 text-xs xs:text-sm sm:text-base"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-white font-display text-sm mb-2">
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-3 sm:px-4 py-2 text-white outline-none transition-colors duration-300 text-sm sm:text-base"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-display text-sm mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-3 sm:px-4 py-2 text-white outline-none transition-colors duration-300 text-sm sm:text-base"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-white font-display text-sm mb-2">
                  İlgilendiğiniz Hizmet <span className="text-accent-blue">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-3 sm:px-4 py-2 text-white outline-none transition-colors duration-300 text-sm sm:text-base"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
                  <option value="Yapay Zeka Çözümleri">Yapay Zeka Çözümleri</option>
                  <option value="Siber Güvenlik">Siber Güvenlik</option>
                  <option value="Mobil Uygulama">Mobil Uygulama</option>
                  <option value="Web Geliştirme">Web Geliştirme</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-display text-sm mb-2">
                  Mesajınız <span className="text-accent-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-gray-900 border border-gray-800 focus:border-accent-blue rounded-md px-3 sm:px-4 py-2 text-white outline-none transition-colors duration-300 text-sm sm:text-base"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {formStatus.submitted && (
                <div className={`mb-6 p-3 sm:p-4 rounded-md ${formStatus.success ? 'bg-green-900 bg-opacity-20 border border-green-700 text-green-300' : 'bg-red-900 bg-opacity-20 border border-red-700 text-red-300'} text-sm sm:text-base`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="text-center sm:text-right">
                <button
                  type="submit"
                  className="bg-accent-blue hover:brightness-110 font-display uppercase py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 tracking-wider text-dark-bg text-sm sm:text-base w-full sm:w-auto"
                >
                  GÖNDER
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
