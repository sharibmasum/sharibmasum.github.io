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
      const hash = window.location.hash
      if (hash && hash !== '#home' && !hasAnimated) {
        window.location.hash = '#home'
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [hasAnimated])

  const handleAnimate = async () => {
    if (cubeRef.current && !hasAnimated && !isAnimating) {
      setIsAnimating(true)
      try {
        const success = await cubeRef.current.playAnimation('Animation')
        
        if (success) {
          setHasAnimated(true)
          setIsAnimating(false)
          window.dispatchEvent(new CustomEvent('showNavbar'))
          window.location.href = '/#about'
        } else {
          console.error('Animation failed to play')
          setIsAnimating(false)
        }
      } catch (error) {
        console.error('Animation error:', error)
        setIsAnimating(false)
      }
    }
  }

  return (
    <section id="home" className='relative min-h-screen bg-[#141414] flex flex-col justify-start pt-10 sm:pt-20 gap-6 sm:gap-10'> 
      <div className='relative z-10 w-full mx-auto flex flex-col space-y-2 sm:space-y-3'>
        <div className="sm:text-3xl text-lg font-medium text-white text-center font-generalsans">
          Hello, I am Sharib. A software engineer.
        </div>
        <div className="sm:text-xl text-base text-white/80 text-center font-generalsans">
          I like solving problems, one step at a time. Just like solving a rubik's cube.
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

      <div className='absolute bottom-8 left-0 right-0 z-20 flex justify-center'>
        <button 
          onClick={handleAnimate}
          disabled={hasAnimated || isAnimating}
          className={`w-[280px] sm:w-[400px] px-6 py-3 rounded-lg bg-gradient-to-br from-black-200 via-black-300 to-green-900/20 
            border border-green-500/50 shadow-2xl shadow-black-200
            sm:text-xl text-base font-medium text-white text-center font-generalsans 
            transition-all duration-300 hover:scale-105 
            ${(hasAnimated || isAnimating) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        > 
          Find out more about me and my work
        </button>
      </div>
    </section>
  )
}

export default MainCube