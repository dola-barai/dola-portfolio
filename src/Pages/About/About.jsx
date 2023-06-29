import { Link } from 'react-router-dom';
import './About.css'
import { AwesomeButton } from 'react-awesome-button';
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bgImageA">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="transition ease-in-out delay-0 hover:scale-110 duration-300 h-96" src="https://i.ibb.co/PDYmzzH/ddbb-removebg-preview.png" />
                    <div className='mx-10'>
                        <h1 className="text-orange-500 font-semibold font-mono">About Me</h1>
                        <h3 className="text-3xl pb-3 font-semibold text-white">Custom Project Creator to Your Needs</h3>
                        <p className="py-6 text-white text-justify"><span>Hello, there! </span>I'm a passionate Web Developer with a keen eye for detail and a drive for excellence who focuses on creating impactful and memorable projects and is motivated by solving complex problems and finding innovative solutions. I have completed various personal projects that demonstrate my ability to create responsive and interactive web applications using HTML, CSS, JavaScript, React.js, Firebase, MongoDB, Node.js, and Next.js. These projects have allowed me to gain hands-on experience in component-based development and integrating APIs. Besides, I am a highly organized and hard-working person with effective communication skills, and collaborative teamwork.</p>
                        <Link to='/contact'><AwesomeButton type="danger" >Hire Me</AwesomeButton></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;