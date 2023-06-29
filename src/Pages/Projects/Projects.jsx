import Tilt from 'react-parallax-tilt';

import './Projects.css'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>

            <div className='mx-auto bgImageP py-12'>

                <div className="text-center mb-6">
                    <h2 className="text-orange-500 font-semibold font-mono">Projects</h2>
                    <h4 className="text-3xl pb-3 font-semibold text-white">My Recent Projects</h4>
                </div>

                <div className='grid md:grid-cols-3 gap-4 '>
                    {/* First */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_3.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/rmWpY1h/Screenshot-2023-06-29-162004.png" />
                            </Tilt>

                            <div className="card-body">
                                <h2 className="text-orange-500 ">React JS Project</h2>
                                <p className='text-xl font-semibold text-white hover:text-orange-500'>JINGLE - Music Instrument Learning School</p>
                            </div>
                        </div>

                        <dialog id="my_modal_3" className="modal">
                            <form method="dialog" className="modal-box bg-purple-950 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-950">
                                    <figure><img className='rounded-xl' src="https://i.ibb.co/rmWpY1h/Screenshot-2023-06-29-162004.png" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>JINGLE - Music Instrument Learning School</p>
                                        <h2 className="text-orange-500 ">React JS Project</h2>
                                        <div className='flex gap-4 mb-5'>
                                            <Link className="btn btn-sm btn-outline btn-info" to="https://jingle-mis-project.web.app/">Live Website Link</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/jingle-mis-client">Client</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/jingle-mis-server">Server</Link>
                                        </div>
                                        <h3 className='text-xl text-white font-semibold mb-2'>Technologies:</h3>
                                        <div className='grid grid-cols-5 gap-3'>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-info">React</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Tailwind</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">AOS</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">TanStack Query</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-info">Axios</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Helmet</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Express JS</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">MongoDB</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Firebase</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">Vercel</button>
                                        </div>
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Project Details:</h1>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>User roles and access levels:</span> The system allows for different user roles, including instructors, students, and admins. Each role has specific privileges and access levels. Instructors and students can access the homepage, instructor page, and classes pages without login, while booking a class requires login. Admins have the highest level of access and can manage all users and pending classes.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>Class management and approval:</span>Instructors can add classes, and these classes will be saved under their profile until they are approved by the admin. The admin has the authority to review and approve classes added by instructors. This ensures that only valid and appropriate classes are available for students to book.</h2>
                                            <h2 className='text-white text-justify'><span className='font-semibold'>Booking and enrollment:</span>Students have the ability to browse and book classes. Once they select their desired classes, they can proceed to enroll by making payments for the selected classes. This functionality allows students to secure their spot in the classes they wish to attend, ensuring a smooth enrollment process.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'></span></h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Second */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_2.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/mNH4D2d/doll-store.png" />
                            </Tilt>

                            <div className="card-body">
                                <h2 className="text-orange-500 ">React JS Project</h2>
                                <p className='text-xl font-semibold text-white hover:text-orange-500'>Twinkle - Kids Doll Store</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_2" className="modal">
                            <form method="dialog" className="modal-box bg-purple-950 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-950">
                                    <figure><img className='rounded-xl' src="https://i.ibb.co/mNH4D2d/doll-store.png" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Twinkle - Kids Doll Store</p>
                                        <h2 className="text-orange-500 ">React JS Project</h2>
                                        <div className='flex gap-4 mb-5'>
                                            <Link className="btn btn-sm btn-outline btn-info" to="https://twinkle-kids-doll-store.web.app/">Live Website Link</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/twinkle-kids-doll-store-client">Client</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/twinkle-kids-doll-store-server">Server</Link>
                                        </div>
                                        <h3 className='text-xl text-white font-semibold mb-2'>Technologies:</h3>
                                        <div className='grid grid-cols-4 gap-3'>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-info">React</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Tailwind</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">AOS</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Helmet</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Express JS</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">MongoDB</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Firebase</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">Vercel</button>
                                        </div>
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Project Details:</h1>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>User Account Functionality: </span>The project incorporates user accounts, allowing sellers to create personal accounts through a Register and Login page. This feature enables individual sellers to manage their own profiles and perform various actions.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>Adding Doll Toys: </span>Users, after creating an account, can add doll toys to the platform using an Add Toy page. This feature allows sellers to showcase their products and make them available for purchase on the website.</h2>
                                            <h2 className='text-white text-justify'><span className='font-semibold'>Show, Update, and Delete Data: </span>Sellers who have logged into their accounts can view, update, and delete their own data. This functionality gives sellers control over the products they have listed on the platform. They can make changes to product details, prices, availability, or remove listings altogether.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>Public Access to All Toys: </span> The platform allows everyone, including buyers and visitors, to access a page where they can view all the available toys. This feature provides transparency and allows potential buyers to browse through the entire inventory.</h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    {/* Third */}
                    <div>
                        <div className="card w-96 lg:mx-8" onClick={() => window.my_modal_1.showModal()}>
                            <Tilt
                                className="tilt-img"
                                tiltMaxAngleX={20}
                                tiltMaxAngleY={20}
                                perspective={900}
                                scale={1}
                                transitionSpeed={200}
                                gyroscope={true}
                            >
                                <img className='h-96 w-96 rounded-xl inner-element' src="https://i.ibb.co/pb6dp0Q/best-food.png" />
                            </Tilt>

                            <div className="card-body">
                                <h2 className="text-orange-500 ">React JS Project</h2>
                                <p className='text-xl font-semibold text-white hover:text-orange-500'>Best Vegans Food</p>
                            </div>
                        </div>
                        {/* You can open the modal using ID.showModal() method */}

                        <dialog id="my_modal_1" className="modal">
                            <form method="dialog" className="modal-box bg-purple-950 max-w-2xl">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-orange-600">✕</button>
                                <div className=" lg:card-side bg-purple-950">
                                    <figure><img className='rounded-xl' src="https://i.ibb.co/pb6dp0Q/best-food.png" alt="Album" /></figure>
                                    <div className="card-body">
                                        <p className='text-xl font-semibold text-white'>Best Vegans Food</p>
                                        <h2 className="text-orange-500 ">React JS Project</h2>
                                        <div className='flex gap-4 mb-5'>
                                            <Link className="btn btn-sm btn-outline btn-info" to="https://best-vegans-food.web.app/">Live Website Link</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/best-vegans-food-client">Client</Link>
                                            <Link className="btn btn-sm btn-outline btn-warning " to="https://github.com/dola-barai/best-vegans-food-server">Server</Link>
                                        </div>
                                        <h3 className='text-xl text-white font-semibold mb-2'>Technologies:</h3>
                                        <div className='grid grid-cols-4 gap-3'>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-info">React</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Tailwind</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-success">Helmet</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Express JS</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">MongoDB</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-warning">Firebase</button>
                                            <button className="btn btn-sm normal-case text-orange-950 font-bold btn-error">Vercel</button>
                                        </div>
                                        <div className=' py-3'>
                                            <h1 className='text-white text-xl font-semibold'>Project Details:</h1>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>User Registration and Login:</span> The website allows users to register and create an account. Once registered and logged in, users gain easy access to view food items and chef details. This feature provides a personalized experience for users.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>Food Item and Chef Details: </span>Registered users can browse through a variety of food items on the website. Each food item is accompanied by details about the chef who created it. This allows users to learn more about the culinary expertise behind the dishes.</h2>
                                            <h2 className='text-white text-justify'><span className='font-semibold'>Adding Food Items to Cart: </span>Users who find their favorite food items can add them to their cart for easy ordering. This feature enables users to create a selection of items they wish to purchase.</h2>
                                            <h2 className='text-white text-justify py-3'><span className='font-semibold'>Contacting the Team: </span>The website provides a means for users to get in touch with the team behind the platform. Users can reach out for inquiries, assistance, or any other needs they may have.</h2>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;