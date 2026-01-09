import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import RubiksCube from '../components/RubiksCube.jsx'

// Custom hook for typing animation
const useTypingAnimation = (staticText, alternatingTexts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000, shouldStop = false) => {
  const [firstTextComplete, setFirstTextComplete] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayTexts, setDisplayTexts] = useState(['', ''])

  useEffect(() => {
    if (shouldStop) return; // Stop animation if shouldStop is true

    if (!firstTextComplete) {
      // Typing the first (static) text
      if (currentCharIndex < staticText.length) {
        const timer = setTimeout(() => {
          setDisplayTexts(prev => {
            const newTexts = [...prev]
            newTexts[0] = staticText.slice(0, currentCharIndex + 1)
            return newTexts
          })
          setCurrentCharIndex(currentCharIndex + 1)
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        // First text complete, start alternating second text
        setFirstTextComplete(true)
        setCurrentCharIndex(0)
      }
    } else {
      // Handle alternating second text
      const currentText = alternatingTexts[currentTextIndex]
      
      if (!isDeleting) {
        // Typing phase
        if (currentCharIndex < currentText.length) {
          const timer = setTimeout(() => {
            setDisplayTexts(prev => {
              const newTexts = [...prev]
              newTexts[1] = currentText.slice(0, currentCharIndex + 1)
              return newTexts
            })
            setCurrentCharIndex(currentCharIndex + 1)
          }, typingSpeed)
          return () => clearTimeout(timer)
        } else {
          // Finished typing, wait then start deleting
          const timer = setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
          return () => clearTimeout(timer)
        }
      } else {
        // Deleting phase
        if (currentCharIndex > 0) {
          const timer = setTimeout(() => {
            setDisplayTexts(prev => {
              const newTexts = [...prev]
              newTexts[1] = currentText.slice(0, currentCharIndex - 1)
              return newTexts
            })
            setCurrentCharIndex(currentCharIndex - 1)
          }, deletingSpeed)
          return () => clearTimeout(timer)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % alternatingTexts.length)
        }
      }
    }
  }, [firstTextComplete, currentTextIndex, currentCharIndex, isDeleting, staticText, alternatingTexts, typingSpeed, deletingSpeed, pauseTime, shouldStop])

  return displayTexts
}

const MainCube = () => {
  const cubeRef = useRef()
  const controlsRef = useRef()
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Typing animation texts
  const firstText = "Hello, my name is Sharib. I'm a engineer."
  const secondText = "I like solving problems, one step at a time. Just like solving a rubik's cube."
  const thirdText = "Well, what are you waiting for? Click the button below to see my work!"
  
  const displayTexts = useTypingAnimation(firstText, [secondText, thirdText], 53, 27, 3000, hasAnimated)

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
    <section id="home" className='relative min-h-screen bg-[#141414] flex flex-col justify-start pt-10 sm:pt-20 gap-6 sm:gap-10'> 
      <div className='relative z-10 w-full mx-auto flex flex-col space-y-2 sm:space-y-3'>
        <div className="sm:text-3xl text-lg font-medium text-white text-center font-generalsans min-h-[1.5em]">
          {displayTexts[0]}
          <span className="animate-pulse">|</span>
        </div>
        <div className="sm:text-xl text-base text-white/80 text-center font-generalsans min-h-[1.5em]">
          {displayTexts[1]}
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <div className='w-full h-[45vh] sm:h-[60vh] flex items-center justify-center'>
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

      <div className='relative bottom-8 left-0 right-0 z-50 flex justify-center px-4 mt-8 mb-8'>
        <button 
          onClick={handleAnimate}
          disabled={hasAnimated || isAnimating}
          className={`px-4 sm:px-6 py-3 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 
            border-2 border-green-500/70 shadow-2xl shadow-black-200
            text-sm sm:text-lg md:text-xl font-medium text-white text-center font-generalsans 
            transition-all duration-300 hover:scale-105 hover:border-green-500
            ${(hasAnimated || isAnimating) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${!hasAnimated && !isAnimating ? 'animate-pulse hover:animate-none' : ''}
            relative overflow-hidden group max-w-[90vw] sm:max-w-none`}
        > 
          <span className="relative z-10">
            Click here to find out more about my work
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>
    </section>
  )
}

export default MainCube