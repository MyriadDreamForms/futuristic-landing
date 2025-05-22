# Senkronsoft Landing Page

Huawei reklamların## Stil ve Animasyonlar

Proje, TailwindCSS ile özelleştirilebilir bir tema kullanır:

```js
// tailwind.config.js
{
  colors: {
    'dark-bg': '#000000',
    'accent-blue': '#00a8ff',
    'accent-purple': '#9c27b0',
    'neon-green': '#39ff14',
  },
  fontFamily: {
    'futuristic': ['Rajdhani', 'sans-serif'],
    'display': ['Orbitron', 'sans-serif'],
  }
}
```

Özel animasyonlar:
- `lightning` - Yıldırım çakması efekti
- `glow-pulse` - Neon parlaması efekti şekilde tasarlanmış futuristik bir landing page projesi.

## Özellikler

- Yıldırım efekti ve ses ile etkileyici bir giriş animasyonu
- Şık, karanlık bir tasarım ve modern tipografi
- React Three Fiber ile 3D görselleştirmeler
- Framer Motion ile gelişmiş animasyonlar
- TailwindCSS ile tamamen responsive tasarım
- Özelleştirilebilir ürün ve özellik bölümleri

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
  - `IntroAnimation.tsx` - Yıldırım efekti ve giriş animasyonu
  - `NavigationMenu.tsx` - Navigasyon çubuğu
  - `Hero.tsx` - Ana giriş bölümü ve 3D görselleştirme
  - `FeaturesSection.tsx` - Ürün özellikleri listesi
  - `ProductsSection.tsx` - Ürün tanıtımları
  - `FooterSection.tsx` - Alt bilgi alanı

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
