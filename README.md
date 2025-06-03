# Senkronsoft Landing Page

Modern ve futuristik bir tasarıma sahip olan Senkronsoft kurumsal landing page projesi.

## Stil ve Animasyonlar

Proje, TailwindCSS ile özelleştirilebilir bir tema kullanır:

```js
// tailwind.config.js
{
  colors: {
    'dark-bg': '#0a0a0a',
    'accent-blue': '#3a89c9',
    'accent-purple': '#7952a3',
    'neon-green': '#4caf50',
  },
  fontFamily: {
    'futuristic': ['Rajdhani', 'sans-serif'],
    'display': ['Orbitron', 'sans-serif'],
  }
}
```

Özel animasyonlar:
- `lightning` - Yıldırım çakması efekti
- `glow-pulse` - Neon parlaması efekti
- `float` - Yüzen element animasyonu
- `data-flow` - Veri akışı animasyonu
- `cyber-glitch` - Siber glitch efekti

## Özellikler

- Şık, karanlık bir tasarım ve modern tipografi
- React Three Fiber ile gerçekçi 3D dünya görseli
- Framer Motion ile gelişmiş animasyonlar
- TailwindCSS ile tamamen responsive tasarım
- Tüm cihaz boyutlarına uygun (mobil, tablet, masaüstü)
- Yüklenme ekranı ve giriş animasyonu
- Responsive navbar ve mobil cihazlar için optimizasyon
- Etkileyici ürün, özellik ve referans bölümleri
- Etkileşimli iletişim formu ve geri bildirim alanı

## Teknolojiler

- React 19
- TypeScript
- TailwindCSS 3.4.17
- Framer Motion
- React Three Fiber
- GSAP

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start

# Üretim sürümü için derleyin
npm run build
```

## Proje Yapısı

- `src/components/` - Tüm UI bileşenleri
  - `IntroAnimation.tsx` - Giriş animasyonu
  - `NavigationMenu.tsx` - Responsive navigasyon çubuğu
  - `MobileMenu.tsx` - Mobil cihazlar için menü
  - `Hero.tsx` - Ana giriş bölümü ve 3D dünya görseli
  - `FeaturesSection.tsx` - Ürün özellikleri listesi
  - `ProductsSection.tsx` - Ürün tanıtımları
  - `TestimonialsSection.tsx` - Müşteri referansları
  - `ContactSection.tsx` - İletişim formu
  - `FeedbackButton.tsx` - Popup geri bildirim formu
  - `FooterSection.tsx` - Alt bilgi alanı

- `src/hooks/` - Özel React Hooks
  - `useScrollEffect.ts` - Sayfa kaydırma efektleri
  - `useInView.ts` - Görünüm içi animasyonlar

- `src/utils/` - Yardımcı fonksiyonlar
  - `animationHelpers.ts` - Animasyon yardımcıları
  - `animationSettings.ts` - Animasyon ayarları
