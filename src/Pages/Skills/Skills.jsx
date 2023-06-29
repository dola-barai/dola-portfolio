import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'

import './Skills.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div>

            <div className="bgImageS py-8">
            <div className="text-center mb-6">
                <h2 className="text-orange-500 font-semibold font-mono">Skills</h2>
                <h4 className="text-3xl pb-3 font-semibold text-white">I Develop Skills Regularly to Keep Me Update</h4>
            </div>

            <div className='grid md:grid-cols-2'>
            <div className="mx-20">
                <h5 className='text-center text-3xl mb-2 text-white'>Fronted</h5>
                <span className="block text-sm font-medium text-white">HTML</span>
                <ProgressBar completed={90} bgColor="purple" animateOnRender={true} />
                <br></br>
                <span className="block text-sm font-medium text-white">CSS</span>
                <ProgressBar completed={85} bgColor="green" isLabelVisible={true} />
                <br></br>
                <span className="block text-sm font-medium text-white">JS</span>
                <ProgressBar completed={70} bgColor="red" animateOnRender={true} isLabelVisible={true} />
                <br></br>
                <span className="block text-sm font-medium text-white">React JS</span>
                <ProgressBar completed={85} bgColor="blue" animateOnRender={true} isLabelVisible={true} />
                <br />
                <span className="block text-sm font-medium text-white">Bootstrap</span>
                <ProgressBar completed={85} bgColor="gray" isLabelVisible={true} />
                <br></br>
            
                <h5 className='text-center text-3xl mb-2 text-white'>Backend</h5>
                <span className="block text-sm font-medium text-white">Node JS</span>
                <ProgressBar completed={70} bgColor="blue" animateOnRender={true} />
                <br></br>
                <span className="block text-sm font-medium text-white">MongoDB</span>
                <ProgressBar completed={75} bgColor="red" isLabelVisible={true} />
                <br></br>
            </div>
            <div className='grid grid-cols-2 gap-5 mx-20 my-20'>
                <img className='h-28 w-28 rounded-xl animate-pulse' src={html} />
                <img className='h-28 w-28 rounded-xl animate-pulse' src={css} />
                <img className='h-28 w-28 rounded-xl mx-16 animate-pulse' src={js} />
                <img className='h-28 w-28 rounded-xl -mx-16 animate-pulse' src={react} />
                <img className='h-28 w-28 rounded-xl animate-pulse' src={node} />
                <img className='h-28 w-28 rounded-xl animate-pulse' src={mongo} />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;