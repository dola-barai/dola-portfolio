import Tilt from 'react-parallax-tilt';

import './Projects.css'
const Projects = () => {
    return (
        <div className='mx-auto bgImageP py-12'>

            <div className="text-center mb-6">
                <h2 className="text-orange-500 font-semibold font-mono">Projects</h2>
                <h4 className="text-3xl pb-3 font-semibold text-white">My Recent Projects</h4>
            </div>

            <div className='grid md:grid-cols-3 gap-4 '>
                <div className="card w-96 lg:mx-8">
                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={900}
                        scale={1}
                        transitionSpeed={200}
                        gyroscope={true}
                    >
                        <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/ZdVjFVy/Screenshot-2023-06-29-123300.png" />
                    </Tilt>
                    
                    <div className="card-body">
                        <h2 className="text-orange-500 ">React JS Project</h2>
                        <p className='text-xl font-semibold text-white hover:text-orange-500'>JINGLE - Music Instrument Learning School</p>
                        
                    </div>
                </div>
                <div className="card w-96 lg:mx-8">
                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={900}
                        scale={1}
                        transitionSpeed={200}
                        gyroscope={true}
                    >
                        <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/QCRNfjq/Screenshot-2023-06-29-123611.png" />
                    </Tilt>
                    <div className="card-body">
                        <h2 className=" text-orange-500">React JS Project</h2>
                        <p className='text-xl font-semibold text-white hover:text-orange-500'>Twinkle - Kids Doll Store</p>
                        
                    </div>
                </div>
                <div className="card w-96 lg:mx-8">
                    <Tilt
                        className="tilt-img"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={900}
                        scale={1}
                        transitionSpeed={200}
                        gyroscope={true}
                    >
                        <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/VTKGYy8/Screenshot-2023-06-29-123438.png" />
                    </Tilt>
                    <div className="card-body">
                        <h2 className=" text-orange-500">React JS Project</h2>
                        <p className='text-xl font-semibold text-white hover:text-orange-500'>Best Vegans Food</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;