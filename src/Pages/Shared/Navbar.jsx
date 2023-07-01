import logo from '../../assets/logo.png';
import { RxDownload } from "react-icons/rx";
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Navbar = () => {
    const handleDownload = () => {
      const filePath = '/Resume-Dola-Barai.pdf'; // Replace with the path to your PDF file
  
      const link = document.createElement('a');
      link.href = filePath;
      link.download = 'Resume-Dola-Barai.pdf'; // Replace with the desired filename and extension
      link.click();
    };
  
    const handleScrollTo = (sectionName) => {
        scroller.scrollTo(sectionName, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -70,
        });
      };
  
    const navOptions = (
      <>
        <li>
          <ScrollLink
            className="hover:text-orange-500"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleScrollTo("home")}
            duration={500}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="hover:text-orange-500"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleScrollTo("about")}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="hover:text-orange-500"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleScrollTo("skills")}
            duration={500}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="hover:text-orange-500"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleScrollTo("projects")}
            duration={500}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="hover:text-orange-500"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            onClick={() => handleScrollTo("contact")}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <button
            onClick={handleDownload}
            className="btn btn-sm btn-active btn-error normal-case rounded-xl hover:text-white"
          >
            <RxDownload />
            Download Resume
          </button>
        </li>
      </>
    );
  
    return (
      <div>
        <div className="navbar fixed z-10 bg-opacity-30 bg-slate-700 md:px-32">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-2 bg-slate-200  rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <img className="rounded" src={logo} alt="Logo" />
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal text-white px-1">
              {navOptions}
            </ul>
          </div>
        </div>
        <Element name="home" className="element">
          {
            <Home></Home>
          }
        </Element>
        <Element name="about" className="element">
          {
            <About></About>
          }
        </Element>
        <Element name="skills" className="element">
          {
            <Skills></Skills>
          }
        </Element>
        <Element name="projects" className="element">
          {
            <Projects></Projects>
          }
        </Element>
        <Element name="contact" className="element">
          {
            <Contact></Contact>
          }
        </Element>
      </div>
    );
  };
  
  export default Navbar;
  