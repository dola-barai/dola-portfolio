import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { RxDownload } from "react-icons/rx";

const Navbar = () => {
    const navOptions = <>
        <li><Link className="hover:text-orange-500" to='/'>Home</Link></li>
        <li><Link className="hover:text-orange-500" to='/about'>About</Link></li>
        <li><Link className="hover:text-orange-500" to='/skills'>Skills</Link></li>
        <li><Link className="hover:text-orange-500" to='/projects'>Projects</Link></li>
        <li><Link className="hover:text-orange-500" to='/contact'>Contact</Link></li>
        <li><Link className="btn btn-sm normal-case btn-outline btn-error border-2 rounded-2xl "><RxDownload></RxDownload>Download Resume</Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-0 bg-slate-700 md:px-32">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 bg-slate-200  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="rounded" src={logo} />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-white px-1">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;