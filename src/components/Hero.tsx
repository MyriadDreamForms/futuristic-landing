import React, { useRef, Suspense } from 'react';
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
      <sphereGeometry args={[1.8, 128, 128]} />
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

// Mars gezegeni
const Mars = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[6, 1, -4]}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshPhysicalMaterial 
        color="#cd5c5c"
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  );
};

// Venüs gezegeni
const Venus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[-4, -2, -3]}>
      <sphereGeometry args={[0.7, 16, 16]} />
      <meshPhysicalMaterial 
        color="#ffc649"
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
};

// Jüpiter (uzakta, büyük)
const Jupiter = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={[12, -3, -12]}>
      <sphereGeometry args={[1.1, 16, 16]} />
      <meshPhysicalMaterial 
        color="#d8ca9d"
        roughness={0.8}
        metalness={0.0}
      />
    </mesh>
  );
};

// Satürn (çok uzakta, halkalı)
const Saturn = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group position={[-10, 3, -16]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshPhysicalMaterial 
          color="#fab273"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      {/* Satürn'ün halkaları */}
      <mesh ref={ringsRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.0, 1.4, 16]} />
        <meshBasicMaterial 
          color="#888888" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Merkür gezegeni (en küçük)
const Mercury = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15; // En hızlı dönüş
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 0.5, -2]}>
      <sphereGeometry args={[0.25, 12, 12]} />
      <meshPhysicalMaterial 
        color="#8c7853"
        roughness={0.9}
        metalness={0.2}
      />
    </mesh>
  );
};

// Uranüs (mavi-yeşil, halkalı)
const Uranus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <group position={[15, 4, -20]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshPhysicalMaterial 
          color="#4fd0e4"
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>
      {/* Uranüs'ün dikey halkaları */}
      <mesh ref={ringsRef} rotation={[0, 0, Math.PI / 2]}>
        <ringGeometry args={[0.8, 1.0, 12]} />
        <meshBasicMaterial 
          color="#66ccdd" 
          transparent 
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Neptün (koyu mavi)
const Neptune = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <mesh ref={meshRef} position={[-16, -4, -24]}>
      <sphereGeometry args={[0.55, 16, 16]} />
      <meshPhysicalMaterial 
        color="#4b70dd"
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
};

// Plüton (cüce gezegen, en küçük)
const Pluto = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[20, -6, -28]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshPhysicalMaterial 
        color="#a0826d"
        roughness={0.9}
        metalness={0.1}
      />
    </mesh>
  );
};

// Güneş (uzakta, ışık kaynağı)
const Sun = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03;
    }
    if (glowRef.current) {
      // Güneş'in parlaklığını zamanla değiştir
      const time = state.clock.getElapsedTime();
      const glow = 0.7 + Math.sin(time * 2) * 0.1;
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = glow;
    }
  });

  return (
    <group position={[-25, 10, -40]}>
      {/* Ana Güneş */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial 
          color="#ffaa00"
        />
      </mesh>
      {/* Güneş'in parıltısı */}
      <mesh ref={glowRef} scale={1.2}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial 
          color="#ff6600"
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  );
};

const Hero: React.FC = () => {    return (    <section id="ana-sayfa" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark-bg z-0">
        <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-accent-blue opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-purple opacity-5 blur-[150px] rounded-full"></div>
      </div>      {/* 3D Object */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <spotLight position={[5, 10, 15]} angle={0.25} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />
            
            {/* Gezegenler için ek ışıklar */}
            <pointLight position={[10, 5, -5]} intensity={0.3} color="#ff6b6b" />
            <pointLight position={[-8, -2, -8]} intensity={0.2} color="#4ecdc4" />
              {/* Ana gezegen - Dünya */}
            <EarthGlobe />
            
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
            
            <Stars radius={120} depth={80} count={5000} factor={5} saturation={0} fade speed={0.2} />
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
