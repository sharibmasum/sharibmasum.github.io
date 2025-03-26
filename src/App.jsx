import MainCube from './sections/MainCube.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import CurrentProject from './sections/CurrentProject.jsx';
import AllProjects from './sections/AllProjects.jsx';

const App = () => {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <MainCube />
        <About />
        <CurrentProject />  
        <AllProjects />
        <Contact /> 
        <Footer />
      </div>
    </main>
  );
};

export default App;
