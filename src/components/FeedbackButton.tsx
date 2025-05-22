import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada gerçek bir API çağrısı yapılabilir
    console.log('Geri bildirim gönderildi:', { rating, feedback });
    setSubmitted(true);
    
    // 3 saniye sonra formu kapat
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFeedback('');
      setRating(null);
    }, 3000);
  };

  return (
    <>
      {/* Feedback button */}      <motion.button
        className="fixed left-3 xs:left-4 sm:left-6 md:left-8 bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 z-30 w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-accent-purple text-white flex items-center justify-center shadow-lg hover:brightness-110 transition-all duration-300 touch-target safe-area-inset-bottom"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Geri bildirim gönder"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </motion.button>

      {/* Feedback modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal */}            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] xs:w-[90%] max-w-md z-50 bg-dark-bg rounded-lg border border-accent-blue p-4 xs:p-5 sm:p-6 md:p-8 shadow-xl shadow-accent-blue/10 max-h-[90vh] overflow-y-auto no-scrollbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 15 }}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%)" }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-accent-blue transition-colors"
                aria-label="Kapat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-display text-white mb-2">Geri Bildirim</h2>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-30 mb-4"></div>
                <p className="text-gray-300 text-xs sm:text-sm">Sitemizle ilgili düşüncelerinizi bizimle paylaşın.</p>
              </div>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-accent-blue mb-2 text-xs sm:text-sm font-medium">Puanlama</label>
                    <div className="flex space-x-2 sm:space-x-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            rating && star <= rating 
                              ? 'text-accent-blue scale-110' 
                              : 'text-gray-600 hover:text-gray-400'
                          }`}
                          aria-label={`${star} yıldız`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-accent-blue mb-2 text-xs sm:text-sm font-medium">Mesajınız</label>
                    <textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full bg-gray-900 bg-opacity-60 border border-gray-800 focus:border-accent-blue text-white rounded-md p-2.5 sm:p-3 focus:outline-none text-sm resize-none"
                      rows={3}
                      placeholder="Düşüncelerinizi yazın..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md font-display uppercase text-sm tracking-wider transition-all duration-300 ${
                      !rating && !feedback 
                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        : 'bg-accent-blue text-dark-bg hover:brightness-110'
                    }`}
                    disabled={!rating && !feedback}
                  >
                    GÖNDER
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 sm:py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-accent-blue bg-opacity-20 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-accent-blue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <p className="text-white font-display text-lg sm:text-xl mb-1">Teşekkürler!</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Geri bildiriminiz için teşekkür ederiz.</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackButton;
