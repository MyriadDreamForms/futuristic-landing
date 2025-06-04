import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { scrollToSection } from '../utils/animationHelpers';

export {};

// Yıldız arka planı için küre
const Starfield = () => {
  const starTexture = useTexture('/gezegenler/stars_milky_way.jpg');
  
  return (
    <mesh scale={[-1, 1, 1]}> {/* Negatif scale ile içten görünümü sağlıyoruz */}
      <sphereGeometry args={[50, 64, 64]} />
      <meshBasicMaterial map={starTexture} side={THREE.BackSide} />
    </mesh>
  );
};

// Güneş - Merkez, kendi etrafında döner
const Sun = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const sunTexture = useTexture('/gezegenler/sun.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // Kendi ekseni etrafında döner
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2.0, 64, 64]} />
      <meshBasicMaterial map={sunTexture} />
      {/* Güneş ışığı */}
      <pointLight position={[0, 0, 0]} intensity={2} distance={50} />
    </mesh>
  );
};

// Dünya - Güneş etrafında orbit ile (365 gün periyot - referans)
const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture('/gezegenler/earth.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * 0.1; // Güneş etrafında orbit (referans hız)
    }
  });

  return (
    <group ref={orbitRef}>
      <group position={[7, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.0, 128, 128]} />
          <meshPhysicalMaterial 
            map={earthTexture}
            roughness={0.7}
            metalness={0.1}
            clearcoat={0.2} 
            clearcoatRoughness={0.2}
          />
        </mesh>
        {/* Ay - Dünya'nın etrafında döner */}
        <Moon />
      </group>
    </group>
  );
};

// Mars gezegeni - Güneş etrafında orbit ile (687 gün periyot)
const Mars = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const marsTexture = useTexture('/gezegenler/mars.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 687/365 = 1.88 kat yavaş
      orbitRef.current.rotation.y += delta * 0.053; // Güneş etrafında orbit
    }
  });
  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[10, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial 
          map={marsTexture}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

// Venüs gezegeni - Güneş etrafında orbit ile (225 gün periyot)
const Venus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const venusTexture = useTexture('/gezegenler/venus.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/225 = 1.62 kat hızlı
      orbitRef.current.rotation.y += delta * 0.162; // Güneş etrafında orbit
    }
  });
  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[5.5, -1, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshPhysicalMaterial 
          map={venusTexture}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};

// Jüpiter - Güneş etrafında orbit ile (4,333 gün periyot)
const Jupiter = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const jupiterTexture = useTexture('/gezegenler/jupiter.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/4333 = 0.084 kat yavaş
      orbitRef.current.rotation.y += delta * 0.0084; // Güneş etrafında orbit
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[15, -2, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshPhysicalMaterial 
          map={jupiterTexture}
          roughness={0.8}
          metalness={0.0}
        />
      </mesh>
    </group>
  );
};

// Satürn - Güneş etrafında orbit ile (10,759 gün periyot)
const Saturn = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const saturnTexture = useTexture('/gezegenler/saturn.jpg');
  const ringTexture = useTexture('/gezegenler/saturn_ring_alpha.png');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // Kendi ekseni etrafında dönüş
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.05; // Halka dönüşü
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/10759 = 0.034 kat yavaş
      orbitRef.current.rotation.y += delta * 0.0034; // Güneş etrafında orbit
    }
  });

  return (
    <group ref={orbitRef}>
      <group position={[18, 3, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshPhysicalMaterial 
            map={saturnTexture}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
        {/* Satürn'ün halkaları */}
        <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.0, 1.4, 32]} />
          <meshBasicMaterial 
            map={ringTexture}
            transparent 
            opacity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
};

// Merkür - Güneş etrafında orbit ile (88 gün periyot)
const Mercury = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const mercuryTexture = useTexture('/gezegenler/mercury.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/88 = 4.15 kat hızlı
      orbitRef.current.rotation.y += delta * 0.415; // Güneş etrafında orbit (en hızlı)
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[3.5, 0.5, 0]}>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshPhysicalMaterial 
          map={mercuryTexture}
          roughness={0.9}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};

// Uranüs - Güneş etrafında orbit ile (30,687 gün periyot)
const Uranus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const uranusTexture = useTexture('/gezegenler/uranus.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06; // Kendi ekseni etrafında dönüş
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x += delta * 0.03; // Halka dönüşü
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/30687 = 0.012 kat yavaş
      orbitRef.current.rotation.y += delta * 0.0012; // Güneş etrafında orbit
    }
  });

  return (
    <group ref={orbitRef}>
      <group position={[22, 4, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshPhysicalMaterial 
            map={uranusTexture}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
        {/* Uranüs'ün dikey halkaları */}
        <mesh ref={ringsRef} rotation={[0, 0, Math.PI / 2]}>
          <ringGeometry args={[0.8, 1.0, 24]} />
          <meshBasicMaterial 
            color="#66ccdd" 
            transparent 
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </group>
  );
};

// Neptün - Güneş etrafında orbit ile (60,190 gün periyot)
const Neptune = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const neptuneTexture = useTexture('/gezegenler/neptune.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/60190 = 0.006 kat yavaş
      orbitRef.current.rotation.y += delta * 0.0006; // Güneş etrafında orbit
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[25, -4, 0]}>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshPhysicalMaterial 
          map={neptuneTexture}
          roughness={0.5}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};

// Plüton - Güneş etrafında orbit ile (90,553 gün periyot)
const Pluto = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const plutoTexture = useTexture('/gezegenler/pluto.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya'ya göre 365/90553 = 0.004 kat yavaş
      orbitRef.current.rotation.y += delta * 0.0004; // Güneş etrafında orbit (en yavaş)
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={meshRef} position={[28, -6, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial 
          map={plutoTexture}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

// Ay - Dünya'nın etrafında dönen uydu (27.3 gün periyot)
const Moon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const moonTexture = useTexture('/gezegenler/moon.jpg');
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // Kendi ekseni etrafında dönüş
    }
    if (orbitRef.current) {
      // Dünya referansıyla 365/27.3 = 13.37 kat hızlı
      orbitRef.current.rotation.y += delta * 1.337; // Dünya etrafında orbit
    }
  });

  return (
    <group ref={orbitRef} position={[0, 0, 0]}>
      <mesh ref={meshRef} position={[2.5, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhysicalMaterial 
          map={moonTexture}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};

const Hero: React.FC = () => {return (    <section id="ana-sayfa" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-bg z-0">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-accent-blue opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-purple opacity-5 blur-[150px] rounded-full"></div>
      </div>{/* 3D Object */}
      <div className="absolute inset-0 z-10 pointer-events-auto">        <Canvas camera={{ position: [3, 2, 8], fov: 50 }}>          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <spotLight position={[5, 10, 15]} angle={0.25} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />
            
            {/* Gezegenler için ek ışıklar */}
            <pointLight position={[10, 5, -5]} intensity={0.3} color="#ff6b6b" />
            <pointLight position={[-8, -2, -8]} intensity={0.2} color="#4ecdc4" />            {/* Ana gezegen - Dünya */}
            <Earth />
            
            {/* Diğer gezegenler - arka planda */}
            <Sun />
            <Mercury />
            <Venus />
            <Mars />
            <Jupiter />
            <Saturn />
            <Uranus />
            <Neptune />
            <Pluto />
            
            {/* Yıldızlı arka plan */}
            <Starfield />
            
            <OrbitControls 
              target={[0, 0, 0]}
              enableZoom={true}
              minDistance={5}
              maxDistance={15}
              autoRotate={true}
              autoRotateSpeed={0.5}
              enablePan={false}
              enableRotate={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 4}
              rotateSpeed={0.8}
              enableDamping={true}
              dampingFactor={0.05}
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
            </p>            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <button 
                className="futuristic-button text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6"
                onClick={() => scrollToSection('cozumlerimiz')}
              >
                ÇÖZÜMLERİMİZ
              </button>
              <button 
                className="bg-accent-blue text-dark-bg hover:brightness-110 font-display uppercase text-sm sm:text-base py-1.5 sm:py-2 px-4 sm:px-6 rounded-sm transition-all duration-300 tracking-wider"
                onClick={() => scrollToSection('iletisim')}
              >
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
