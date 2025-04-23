import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' }
];

const NavItems = ({ onClick = () => {}, activeSection }) => (
  <ul className="flex items-center gap-8">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a 
          href={item.href} 
          className={`text-neutral-400 hover:text-white transition-colors ${
            activeSection === item.href.replace('#', '') ? 'text-white' : ''
          }`} 
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
  const [activeSection, setActiveSection] = useState('home');
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

    const handleClick = (e) => {
      if (e.target.tagName === 'A') {
        const href = e.target.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    // Initial check
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      isTransparent 
        ? 'bg-transparent' 
        : 'bg-[#222831] bg-opacity-90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Sharib Masum
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? './assets/close.svg' : './assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeSection={activeSection} />
          </nav>
        </div>
      </div>

      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[200px]' : 'max-h-0'
      }`}>
        <nav className="p-5 bg-[#222831] bg-opacity-90 backdrop-blur-sm">
          <NavItems onClick={closeMenu} activeSection={activeSection} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 