import { Link } from "react-router-dom";
// You'll require a good understanding of how Tailwind CSS tackles responsiveneess to understand the basic hides and shows on this page.
export const Navbar = (props) => {
    return(
        <div className="w-full bg-cwivel-green px-4 md:px-14 flex py-4 flex-row justify-between items-center">
            <div className="text-white m-1 px-6 text-xs sm:text-lg block p-2">
                <h1 className="text-white sm:text-xl text-lg">Cwivel</h1>
                <span className="text-teal-600">.com</span></div>
            <div className="hidden w-[50%]"><input type="search" name="Search" id="search" placeholder="Search"  className="placeholder-current w-full p-3 bg-white text-cwivel placeholder-black rounded-md focus:outline-none" /></div>
            <div className="w-full sm:flex flex ml-auto">
                <div className="w-fit flex flex-row items-center ml-auto">
                    <Link to="/"  className="text-xs activepage lg:mr-6 font-medium sm:text-xl block sm:p-2">Home</Link>
                    <Link to="/bookings" className={props.cl ? " text-xs lg:mr-6 text-gray-200 sm:text-base block p-2" : "hidden text-xs lg:mr-6 text-gray-200 sm:text-base p-2"}>Explore</Link>
                    <Link to="/signupuser" className="text-xs text-gray-200 sm:text-base block p-2">Sign Up</Link>
                </div>
                <div className={props.cl ? "w-fit flex items-center ml-auto" : "w-fit hidden items-center ml-auto"}>
                    <Link to="/login" className="text-xs sm:text-lg text-white p-2">Login</Link>
                    <Link to="/signup">
                        <button className="text-xs sm:text-lg w-32 bg-white rounded-md text-cwivel p-1 md:px-3 md:w-24 mx-2">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}