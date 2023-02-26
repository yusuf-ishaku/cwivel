import { Link } from "react-router-dom"
export const Navbar = () => {
    return(
        <div className="w-100 md:py-4 px-4 sm:px-10 md:px-16 flex justify-between items-center">
            <div className="text-cwivel text-xs sm:text-lg block p-2">Cwivel</div>
            <div className="w-[100vw] sm:flex hidden">
                <div className="w-fit flex">
                    <Link to="/">.</Link>
                    <Link to="/chat" className="text-xs sm:text-lg block sm:p-2">Chat</Link>
                    <Link to="/bookings" className="text-xs sm:text-lg block p-2">Bookings</Link>
                    <Link to="/users" className="text-xs sm:text-lg block p-2"> Users </Link>
                    <Link to="/dashboard" className="text-xs sm:text-lg block p-2"> Dashboard</Link>
                </div>
                <div className="w-fit flex items-center">
                    <Link to="/login" className="text-xs sm:text-lg text-cwivel p-2">Login</Link>
                    <Link to="/signup">
                        <button className="text-xs sm:text-lg w-20 bg-cwivel-green rounded-3xl text-white p-1 md:px-4 mx-2">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}