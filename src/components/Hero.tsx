import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export {};

const EarthGlobe = () => {
  // Three.js için referanslar
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Dünya için bir tekstür oluşturun - public klasöründen alıyoruz
  const earthTexture = useTexture('/earth.jpg');
  
  // Animasyon için useFrame hook'unu kullanacağız
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Dünya'yı gerçekçi hızda döndür (y ekseni etrafında)
      meshRef.current.rotation.y += delta * 0.1; // Daha yavaş ve gerçekçi dönüş
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
    >
      <sphereGeometry args={[1.8, 128, 128]} /> {/* Daha yüksek detay için segment sayısını artırdık */}
      <meshPhysicalMaterial 
        map={earthTexture}
        roughness={0.7}
        metalness={0.1}
        clearcoat={0.2} 
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
};

const Hero: React.FC = () => {    return (    <section id="ana-sayfa" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-bg z-0">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-accent-blue opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-purple opacity-5 blur-[150px] rounded-full"></div>
      </div>      {/* 3D Object */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <spotLight position={[5, 10, 15]} angle={0.25} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <EarthGlobe />
            <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade speed={0.3} />
            <OrbitControls 
              enableZoom={false} 
              autoRotate={true}
              autoRotateSpeed={0.8}
              enablePan={false}
              enableRotate={true}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.4}
              rotateSpeed={1.0}
              enableDamping={true}
              dampingFactor={0.08}
            />
          </Suspense>
        </Canvas>
      </div>      {/* Content */}
      <div className="container mx-auto px-4 xs:px-5 sm:px-6 z-20 relative pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 xs:mt-4 sm:mt-0">
          <div className="flex flex-col space-y-4 xs:space-y-5 sm:space-y-6 text-center md:text-left pointer-events-auto">
            <div>
              <h2 className="text-accent-blue text-lg sm:text-xl md:text-2xl font-display tracking-wider mb-2">
                YAZILIM ÇÖZÜMLERİ
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 leading-tight">
                İŞİNİZİ <br className="hidden xs:inline" />
                <span className="text-accent-blue">DİJİTALLEŞTİRİN</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto md:mx-0 font-futuristic">
              İşletmeniz için özel geliştirilen yazılım çözümleriyle verimliliğinizi artırın, maliyetlerinizi düşürün ve rekabet avantajı kazanın.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <button className="futuristic-button text-sm sm:text-base py-1.5 sm:py-2">
                ÇÖZÜMLERİMİZ
              </button>
              <button className="bg-accent-blue text-dark-bg hover:brightness-110 font-display uppercase text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-sm transition-all duration-300 tracking-wider">
                DEMO TALEP ET
              </button>
            </div>
          </div>          <div className="hidden md:block pointer-events-none">
            {/* Bu alan 3D dünya için boş - mouse etkileşimi dünyaya geçsin */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 font-futuristic text-xs sm:text-sm mb-1 sm:mb-2">ÇÖZÜMLERİMİZİ KEŞFEDİN</p>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent-blue rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
