import { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar.jsx';
import MainCube from './sections/MainCube.jsx';

// Lazy load other components
const About = lazy(() => import('./sections/About.jsx'));
const Footer = lazy(() => import('./sections/Footer.jsx'));
const Contact = lazy(() => import('./sections/Contact.jsx'));
const CurrentProject = lazy(() => import('./sections/CurrentProject.jsx'));
const AllProjects = lazy(() => import('./sections/AllProjects.jsx'));

const App = () => {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <MainCube />
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <About />
          <CurrentProject />  
          <AllProjects />
          <Contact /> 
          <Footer />
        </Suspense>
      </div>
    </main>
  );
};

export default App;
