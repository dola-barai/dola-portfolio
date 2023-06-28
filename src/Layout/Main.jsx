import Navbar from "../Pages/Shared/Navbar";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div className="">
           <Navbar></Navbar>
           <Home></Home>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Main;