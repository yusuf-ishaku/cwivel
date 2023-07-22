import { FaToolbox } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { IconContext } from "react-icons";
import Cwivel from '../assets/img/cwivel.png';
import { useEffect, useContext } from 'react';
// import { DisplayNavContext } from '../App';
import { Link } from "react-router-dom";

export const Signup = () =>{
    // const {setDisplayNav, displayNav} = useContext(DisplayNavContext);
    // useEffect(()=>{
    //     setDisplayNav(false)
    //     console.log(displayNav)
    //     // return setDisplayNav(true)
    // }, [])
    return (
        <>
            <div className="w-full">
                <div className="w-[90%] sm:w-[60%] lg:w-[40%] flex flex-col items-center pt-16 mx-auto h-[100vh]">
                    <img src = {Cwivel} alt = "Logo" className='max-w-[150px]'/>
                    <div className="w-full my-2">
                        <h1 className='text-cwivel text-xl p-2 my-2'>Sign Up </h1>
                        <p className="text-md font-light p-2">
                            Sign up to get premium service from Cwivel at low rate and enjoy exclusive offer as an artisan
                        </p>
                    </div>
                    <IconContext.Provider value={{ color: "rgba(37, 190, 90, 1)", className: "global-class-name" }}>
                        <Link to="/signupuser" className = 'w-full'>
                            <div className='w-full cn h-20 my-4 p-4 items-center rounded-lg flex border-cwivel border-me cursor-pointer'>
                                <FaUser></FaUser>
                                <span className='text-md ml-4'>Sign up as a user</span>
                            </div>
                        </Link>
                        <Link to="/artisansignup" className='w-full'>
                            <div className='w-full cn h-20 my-4 p-4 items-center rounded-lg flex border-cwivel border-me cursor-pointer'>
                                <FaToolbox></FaToolbox>
                                <span className='text-md ml-4'>Sign up as an artisan</span>
                            </div>
                        </Link>
                    </IconContext.Provider>
                    <div className="flex w-full items-center justify-between">
                        <Link to= "/"><span className="block p-4 text-md text-cwivel">Back</span></Link>    
                        <button className="bg-cwivel-green cn p-2 px-6 rounded-md text-white">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}