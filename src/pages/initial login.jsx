import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import SignupImage from '../assets/img/login-img.png';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import Cwivel from '../assets/img/cwivel.png';
import SignupLine from '../assets/img/login-line.png';
import SignUpLineTab from '../assets/img/LoginLineTab.png';
import SignupImageTab from '../assets/img/LoginImageTab.png'
import { useForm } from 'react-hook-form';
import  Axios  from 'axios';
import {yupResolver} from "@hookform/resolvers/yup";
import { BiErrorCircle } from "react-icons/bi";
import * as yup from "yup";
/*
The initial login form written by CHIEF YUSUF! 
*/
export const Login = () =>{
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is invalid"),
        password: yup.string().required("Password is invalid")
    })
    const submitData = async(data) =>{
        console.log(data);
        try{
           const response = await Axios.post("https://cwivel.pythonanywhere.com/api/login/", data);
            console.log(response)
        }catch(error){
            console.error(error)
        }
    };
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <>
        <div className='w-full h-full flex flex-col-reverse items-center sm:flex sm:flex-row sm:justify-center sm:items-start'>
            <div className='w-4/6 sm:w-3/6 hidden sm:block h-full'>
                <img className='w-auto hidden lg:block  absolute h-[100vh]' src={SignupImage} alt=''></img>
                <img className='w-auto hidden sm:block lg:hidden absolute h-[100vh]' src={SignupImageTab} alt=''></img>

                <img className='w-auto hidden lg:block absolute ml-60 h-[100vh]' src={SignupLine} alt=""></img>
                <img className='w-auto hidden sm:block lg:hidden absolute ml-40 h-[100vh]' src={SignUpLineTab} alt=""></img>
            </div>
            <div className='sm:w-2/6 w-full lg:h-[100vh] md:h-[100vh] sm:h-[auto] px-5 flex flex-col justify-center'>
                <div className="w-auto h-fit my-auto">
                    <h3 className='text-cwivel text-2xl font-semibold'>Welcome back</h3>
                    <h4 className='text-slate-600 text-md block my-3'>Please enter your details to continue</h4>
                    <div className={errors.email || errors.password ? 'w-full  rounded-md border-gray-300 border-[1px] p-2': "hidden"}>
                        <span className='flex mx-1'>{errors.email? <h3 className='text-red-500 flex items-center'><BiErrorCircle style={{marginRight: '2px'}}></BiErrorCircle>Email is invalid</h3>  : ""}</span>
                        <span className='flex items-center mx-1 '>{errors.password? <h3 className='text-red-500 flex items-center'><BiErrorCircle style={{marginRight: '2px'}}></BiErrorCircle>{errors.password.message}</h3>   : ""}</span>
                        {/* <span className='flex mx-1'><h3 className='text-red-500'></h3></span> */}
                    </div>
                    <form onSubmit={handleSubmit(submitData)} className=''>
                        <label htmlFor="email" className='text-slate-700'>Email</label>
                        <input {...register("email")} className='w-full block p-2 my-1 mb-3 text-sm placeholder-gray-400  border-gray-400 bg-transparent border-me rounded-md focus:outline-none' type="text" placeholder = "example@gmail.com" required/>
                        <label htmlFor="password" className='text-slate-700'>Password</label>
                        <IconContext.Provider value={{size: "20", className: "text-gray-400" }}>
                            <div className="flex items-center">
                                <input {...register("password")} className='w-full block p-2 my-1 text-sm placeholder-gray-400  border-gray-400 bg-transparent border-me rounded-md focus:outline-none' type="password" placeholder = "******" required/>
                                <AiOutlineEyeInvisible className='-ml-8'></AiOutlineEyeInvisible>
                            </div>
                        </IconContext.Provider>
                        <div className="flex my-3 w-auto ">
                            <input type="checkbox" name="remember me" id="remember-me" /> <span className='text-slate-500 ml-1'>Remember me</span>
                            <span className="inline-block ml-auto text-cwivel font-semibold">Forgot Password?</span>
                        </div>
                        <button type='submit' className='bg-cwivel-green text-white w-full p-3 rounded-md'>Continue</button>
                    </form>
                    <IconContext.Provider value={{ color: "rgba(37, 190, 90, 1)", size: "26", className: "global-class-name" }}>
                        <div className='w-full border-gray-400 border-me p-3 my-4 rounded-md flex items-center justify-center'>
                            <div className='flex items-center'><FcGoogle></FcGoogle><button className='pl-3'>Sign in with Google</button></div>
                        </div>
                    </IconContext.Provider>
                    <span className="block">
                        Don't have an account?
                        <Link to="/signup" className='text-cwivel font-semibold ml-1'>Sign up</Link>
                    </span>
                </div>
               
            </div>
            <div className="cwivel sm:w-1/6">
                <img src={Cwivel} alt='Cwivel'></img>
            </div>
        </div>
        </>
        
    )
}