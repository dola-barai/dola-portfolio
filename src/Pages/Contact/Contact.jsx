import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall, MdEmail } from 'react-icons/md';
import './Contact.css'
const Contact = () => {
    return (
        <div className='bg-slate-700 bgImage py-16'>
            <div className="text-center mb-12">
                <h3 className="text-orange-500 font-semibold font-mono">Contact Me</h3>
                <h2 className='text-3xl pb-3 font-semibold text-white'>I Want To Here From You</h2>
                <p className='text-gray-400'>Please fill out the form on this section to contact with me. <br /> Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className="ms-10 md:ms-56">
                    <div className="flex ">
                      <div>
                         <FaMapMarkerAlt className="bg-white h-12 w-12 rounded-full text-amber-700"></FaMapMarkerAlt>
                      </div>
                      <div className="ms-6">
                        <h3 className="text-white text-2xl font-semibold">Address</h3>
                        <p className="text-slate-400">Gopalganj, Dhaka, Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex py-12">
                      <div>
                         <MdEmail className="bg-white h-12 w-12 rounded-full text-amber-700"></MdEmail>
                      </div>
                      <div className="ms-6">
                        <h3 className="text-white text-2xl font-semibold">Email</h3>
                        <p className="text-slate-400">dolabarai43@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                         <MdCall className="bg-white h-12 w-12 rounded-full text-amber-700"></MdCall>
                      </div>
                      <div className="ms-6">
                        <h3 className="text-white text-2xl font-semibold">Phone</h3>
                        <p className="text-slate-400">+880172-564-1804</p>
                      </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 mb-2">
                    <input type="text" placeholder="Your Name" className="input input-bordered bg-opacity-10 text-white" />
                    <input type="email" placeholder="Your Email" className="input input-bordered bg-opacity-10 text-white" />
                    </div>
                    <div className="flex gap-2 mb-2">
                    <input type="number" placeholder="Your Phone" className="input input-bordered bg-opacity-10 text-white" />
                    <input type="text" placeholder="Subject" className="input input-bordered bg-opacity-10 text-white" />
                    </div>
                    <input type="text" placeholder="Message" className="input input-bordered md:w-4/6 h-24 bg-opacity-10 mb-2 text-white" />
                    <div>
                    <input className="btn btn-error text-white md:w-4/6 " type="submit" value="Submit Now" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;