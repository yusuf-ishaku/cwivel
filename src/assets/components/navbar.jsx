import { Link } from "react-router-dom"
export const Navbar = () => {
    return(
        <div className="w-100 py-4 px-16 flex justify-between items-center">
            <div className="text-cwivel text-lg block p-2">Cwivel</div>
            <div className="w-fit flex">
                <Link to="/">.</Link>
                <Link to="/chat" className="text-lg block p-2">Chat</Link>
                <Link to="/bookings" className="text-lg block p-2">Bookings</Link>
                <Link to="/users" className="text-lg block p-2"> Users </Link>
                <Link to="/dashboard" className="text-lg block p-2"> Dashboard</Link>
            </div>
            <div className="w-fit flex">
                <Link to="/login" className="text-cwivel p-2">Login</Link>
                <Link to="/signup">
                    <button className="bg-cwivel-green rounded-3xl text-white p-1 px-4 mx-2">
                        Sign up
                    </button>
                </Link>
            </div>
        </div>
    )
}