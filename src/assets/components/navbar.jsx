import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DisplayNavContext } from "../../App";
// You'll require a good understanding of how Tail;wind CSS tackles responsiveneess to understand the basic hides and shows on this page.
export const Navbar = (props) => {
    const { display, setDisplay, displayNav } = useContext(DisplayNavContext);
    // console.log(display)
    return(
        <div className={displayNav ? "w-full bg-cwivel-green px-2 md:px-5 flex md:py-2 flex-row sticky justify-between items-center" : "hidden"}>
            <div className=" text-white px-0 sm:px-6 text-sm sm:text-xs p-2">
                <h1 className="text-white text-sm sm:text-base inline ">Cwivel</h1>
                <span className="text-teal-600 inline text-xs sm:text-sm">.com</span>
            </div>
            <div className="hidden w-[50%]"><input type="search" name="Search" id="search" placeholder="Search"  className="placeholder-current w-full p-3 bg-white text-cwivel placeholder-black rounded-md focus:outline-none" /></div>
            <div className="w-full hidden sm:flex ml-auto">
                <div className="w-fit flex flex-row items-center ml-auto">
                    <NavLink to="/"  className={
                        ({isActive, isPending}) =>
                        isPending ? "pending" : isActive?"border-b-2 text-white " : "text-white text-xs lg:mr-6 font-medium sm:text-base block sm:p-2"
                        
                    }>Home</NavLink>
                    <NavLink to="/bookings" className={props.cl ? " text-xs lg:mr-6 text-gray-200 sm:text-base block p-2" : "hidden text-xs lg:mr-6 text-gray-200 sm:text-base p-2"}>Explore</NavLink>
                    <NavLink to="/signupuser" className="text-xs text-gray-200 sm:text-base block p-2">Sign Up</NavLink>
                </div>
                <div className={props.cl ? "w-fit flex items-center ml-auto" : "w-fit hidden items-center ml-auto"}>
                    <NavLink to="/login" className="text-xs sm:text-lg text-white p-2">Login</NavLink>
                    <NavLink to="/signup">
                        <button className="text-xs sm:text-lg w-32 bg-white rounded-md text-cwivel p-1 md:px-3 md:w-24 mx-2">
                            Sign up
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="block sm:hidden">
                    <GiHamburgerMenu color="white" onClick={() => setDisplay(!display)}></GiHamburgerMenu>
            </div>
        </div>
    )
}