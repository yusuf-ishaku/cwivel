import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import SignupImage from '../assets/img/signup-img.png';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import SignupLine from '../assets/img/signup-line.png'
export const Login = () =>{
    return (
        <>
        <div className='w-full h-full flex flex-row'>
            <div className='w-3/6 h-full'>
                <img className='w-auto absolute h-[100vh]' src={SignupImage} alt=''></img>
                <img className='w-auto absolute ml-60 h-[100vh]' src={SignupLine} alt=""></img>
            </div>
            <div className='w-2/6 h-[100vh] px-5 flex flex-col justify-center'>
                <div className="w-auto h-fit my-auto">
                    <h3 className='text-cwivel text-2xl font-semibold'>Welcome back</h3>
                    <h4 className='text-slate-600 text-md block my-3'>Please enter your details to continue</h4>
                    <form className=''>
                        <label htmlFor="email" className='text-slate-700'>Email</label>
                        <input className='w-full block p-2 my-1 mb-3 text-sm  border-gray-400 bg-transparent border-me rounded-md focus:outline-none' type="text" placeholder = "j" required/>
                        <label htmlFor="password" className='text-slate-700'>Password</label>
                        <input className='w-full block p-2 my-1 text-sm  border-gray-400 bg-transparent border-me rounded-md focus:outline-none' type="password" placeholder = "j" required/>

                        <div className="flex my-3 w-auto ">
                            <input type="checkbox" name="remember me" id="remember-me" /> <span className='text-slate-500 ml-1'>Remember me</span>
                            <span className="inline-block ml-auto text-cwivel font-semibold">Forgot Password?</span>
                        </div>
                        <button type='submit' className='bg-cwivel-green text-white w-full p-3 rounded-md'>Continue</button>
                    </form>
                    <IconContext.Provider value={{ color: "rgba(37, 190, 90, 1)", size: "26", className: "global-class-name" }}>
                        <div className='w-full border-gray-400 border-me p-3 my-4 rounded-md flex items-center justify-center'>
                            <div className='flex items-center'><FcGoogle></FcGoogle><span className='pl-3'>Sign in with Google</span></div>
                        </div>
                    </IconContext.Provider>
                    <span className="block">
                        Don't have an account?
                        <Link to="/signup" className='text-cwivel font-semibold ml-1'>Sign up</Link>
                    </span>
                </div>
               
            </div>
            <div className="cwivel w-1/6">
                <h1>Cwivel</h1>
            </div>
        </div>
        </>
    )
}