import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import RubiksCube from '../components/RubiksCube.jsx'

const MainCube = () => {
  const cubeRef = useRef()
  const controlsRef = useRef()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible')
      if (controlsRef.current) {
        controlsRef.current.autoRotate = document.visibilityState === 'visible'
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    if (!hasAnimated) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [hasAnimated])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#home' && !hasAnimated) {
        window.location.hash = '#home';
      }
    }

    // Set initial hash if not present
    if (!window.location.hash) {
      window.location.hash = '#home';
    }

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [hasAnimated]);

  const handleAnimate = async () => {
    if (cubeRef.current && !hasAnimated && !isAnimating) {
      setIsAnimating(true);
      try {
        const success = await cubeRef.current.playAnimation('Animation');
        
        if (success) {
          setHasAnimated(true);
          setIsAnimating(false);
          localStorage.setItem('navbarVisible', 'true');
          window.dispatchEvent(new CustomEvent('showNavbar'));
          window.location.hash = '#about';
        } else {
          console.error('Animation failed to play');
          setIsAnimating(false);
        }
      } catch (error) {
        console.error('Animation error:', error);
        setIsAnimating(false);
      }
    }
  };

  return (
    <section id="home" className='relative h-screen bg-[#141414] flex flex-col justify-between py-10 sm:py-20'> 
      <div className='relative z-10 w-full mx-auto flex flex-col space-y-2 sm:space-y-3'>
        <div className="sm:text-3xl text-lg font-medium text-white text-center font-generalsans">
          Hello, I am Sharib. A software engineer.
        </div>
        <div className="sm:text-xl text-base text-white/80 text-center font-generalsans">
          I like solving problems, one step at a time. Just like solving a rubik's cube.
        </div>
      </div>

      <div className='flex-1 w-full flex items-center justify-center min-h-[45vh] sm:min-h-[50vh]'>
        <div style={{ 
          width: '100%',
          height: '100%',
          background: '#141414',
          touchAction: 'none',
          position: 'relative'
        }}>
          <Canvas 
            camera={{ 
              position: [7.5, 6, 7.5],
              fov: 45
            }}
          >
            <color attach="background" args={['#141414']} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <RubiksCube ref={cubeRef} scale={0.7} position={[0, 0, 0]} />
            <OrbitControls 
              ref={controlsRef}
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              rotateSpeed={0.5}
              target={[1.4, 1.4, 1.4]}
              autoRotate={isVisible}
              autoRotateSpeed={5}
            />
          </Canvas>
        </div>
      </div>

      <div className='relative z-50 flex justify-center px-4 mt-8'>
        <button 
          onClick={handleAnimate}
          disabled={hasAnimated || isAnimating}
          className={`w-full max-w-[400px] px-6 py-4 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 
            border-2 border-green-500/70 shadow-2xl shadow-black-200
            sm:text-xl text-base font-medium text-white text-center font-generalsans 
            transition-all duration-300 hover:scale-105 hover:border-green-500
            ${(hasAnimated || isAnimating) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        > 
          Find out more about me and my work
        </button>
      </div>
    </section>
  )
}

export default MainCube