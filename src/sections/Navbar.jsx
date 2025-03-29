import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, activeSection }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a 
          href={item.href} 
          className={`nav-li_a ${activeSection === item.href.replace('#', '') ? 'text-white' : ''}`} 
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Set transparency based on scroll position
      setIsTransparent(scrollY < 100);
      
      // Find the current section
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          // Update URL hash without triggering scroll
          history.replaceState(null, null, `#${sectionId}`);
        }
      });

      // Check if we're at the top of the page
      if (scrollY < 100) {
        setActiveSection('home');
        history.replaceState(null, null, ' ');
      }
    };

    // Add smooth scrolling for anchor links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Listen for the custom event to show navbar
    const handleShowNavbar = () => {
      setTimeout(() => {
        setIsVisible(true);
      }, 300); // Slight delay to sync with the scroll animation
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    window.addEventListener('showNavbar', handleShowNavbar);

    // Initial check
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('showNavbar', handleShowNavbar);
    };
  }, []);

  if (hideNavbar) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      isTransparent 
        ? 'bg-transparent' 
        : 'bg-[#222831] bg-opacity-90 backdrop-blur-sm'
    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Sharib Masum
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeSection={activeSection} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} activeSection={activeSection} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
