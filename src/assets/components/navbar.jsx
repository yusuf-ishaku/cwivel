import { Link } from "react-router-dom"
export const Navbar = () => {
    return(
        <div className="w-full px-4 md:px-14 flex py-4 flex-row justify-between items-center">
            <div className="text-cwivel m-1 text-xs sm:text-lg block p-2">Cwivel</div>
            <div className="w-full sm:flex hidden ml-auto">
                <div className="w-fit flex ml-auto">
                    <Link to="/">.</Link>
                    <Link to="/chat" className="text-xs sm:text-lg block sm:p-2">Chat</Link>
                    <Link to="/bookings" className="text-xs sm:text-lg block p-2">Bookings</Link>
                    <Link to="/users" className="text-xs sm:text-lg block p-2"> Users </Link>
                    <Link to="/dashboard" className="text-xs sm:text-lg block p-2"> Dashboard</Link>
                </div>
                <div className="w-fit flex items-center ml-auto">
                    <Link to="/login" className="text-xs sm:text-lg text-cwivel p-2">Login</Link>
                    <Link to="/signup">
                        <button className="text-xs sm:text-lg w-20 bg-cwivel-green rounded-3xl text-white p-1 md:px-3 md:w-24 mx-2">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}