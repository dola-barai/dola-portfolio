import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bgImage px-28">
                <div className="hero-content  flex-col lg:flex-row-reverse gap-12">
                    <div className="flex-shrink-0 max-w-sm">
                        <img src="https://i.ibb.co/PxVhq1Q/doladola.png" />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-semibold text-orange-700">Hello, I'm</h2>
                        <h4 className="text-6xl font-bold font-mono text-sky-200 py-4">Dola Barai</h4>
                        <h1 className="text-2xl text-white">A <span className="text-sky-600">Web Developer</span> From <span className="text-amber-500">Bangladesh</span></h1>
                        <p className="py-4 text-white">I'm Web Developer based in Bangladesh, and I'm very passionate and dedicated to my work.</p>
                        <Link to='/about'><AwesomeButton type="danger" >About Me</AwesomeButton></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;