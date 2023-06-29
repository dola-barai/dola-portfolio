import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { Link } from "react-router-dom";
import { BiLogoLinkedin } from 'react-icons/bi'
import { MdCall, MdOutlineEmail } from 'react-icons/md';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.png'
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bgImageH px-28">
                <div className="hero-content  flex-col lg:flex-row-reverse gap-12">
                    <div className="flex-shrink-0 max-w-sm">
                        <div className="image">
                            <img className="transition ease-in-out delay-0 hover:scale-110 duration-300" src="https://i.ibb.co/PxVhq1Q/doladola.png" />
                            <span className="anim_moveBottom">
                                <img className="h-8 rounded absolute top-52 animate-bounce" src={html} />
                            </span>
                            <span className="anim_moveBottom">
                                <img className="h-8 rounded absolute top-40 right-40 animate-bounce" src={css} />
                            </span>
                            <span className="anim_moveBottom">
                                <img className="h-8 rounded absolute right-80 mt-4 animate-bounce" src={react} />
                            </span>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold text-orange-700">Hello, I'm</h2>
                        <h4 className="text-6xl font-bold font-mono text-sky-200 py-4">Dola Barai</h4>
                        <h1 className="text-2xl text-white">A <span className="text-sky-600">Web Developer</span> From <span className="text-amber-500">Bangladesh</span></h1>
                        <p className="py-4 text-white">I'm Web Developer based in Bangladesh, and I'm very passionate and dedicated to my work.</p>
                        <div className="md:flex items-center sm:mx-auto">
                        <Link to='/about'><AwesomeButton type="danger" >About Me</AwesomeButton></Link>
                        <div className="ms-6 flex ">
                            <MdCall className="h-6 w-6 me-3 text-white"></MdCall>
                            <MdOutlineEmail className=" h-6 w-6 me-3 text-white"></MdOutlineEmail>
                            <BiLogoLinkedin className=" h-6 w-6 me-3 text-white"></BiLogoLinkedin>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;