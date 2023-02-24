import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import SignUpUserImg from '../assets/img/SignUpUserImg.png';
import SignUpUserLIne from '../assets/img/SignUpUserLIne.png';
import SignUpUserTab from "../assets/img/SignUpImageTab.png"
import {AiOutlineMail} from 'react-icons/ai'
import SignUpUserLineTab from '../assets/img/SignUpLineTab.png'
export const SignUpUser  = () =>{
    const [type, setType] = useState("text");
    // console.log(type)
    return (
        <>
         <div className='w-[100vw] h-full flex flex-col items-center sm:items-start sm:flex sm:flex-row'>
            <div className='sm:w-1/12 w-auto'>
                Hello World
            </div>
            <div className='w-[90%] sm:w-5/12 pt-10 sm:px-0 h-[100vh] text-center z-50'>
                <h2 className='text-cwivel font-semibold text-md md:text-lg'>Create Account</h2>
                <form className='flex flex-col items-center justify-center'>
                    <input type="text" placeholder='First Name' id='fname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required/>
                    <input type="text" placeholder='Last Name' id='lname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <input type = {type} onFocus={() =>{setType("date")}} onBlur= {() =>{setType("text");}} placeholder="Date of Birth" id='date' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <IconContext.Provider value={{ size: "20", className: "text-gray-400" }}>
                        <div className="flex flex-row items-center justify-center w-[90%]">
                            <input type = "email" placeholder='Email' id='email' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm -ml-5 border-gray-300 rounded-md border-me w-[100%] h-10'required/>
                            <AiOutlineMail className='-ml-10'></AiOutlineMail>
                        </div>
                    </IconContext.Provider>
                        
                    
                    <input type = "address" placeholder='Address' id='address' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <div className="flex w-[90%] items-center">
                        <span className="block text-cwivel">Back</span>
                        <button type='submit' className='text-white bg-cwivel-green p-2 px-5 ml-auto rounded-md z-50' >Continue</button>
                    </div>
                </form>
            </div>
            <div className="w-2/6 sm:w-6/12 sm:flex hidden h-[100vh]">
                <img className='object-contain w- lg:absolute lg:top-0 bottom-0  lg:right-0 hidden lg:h-[100vh] lg:block' src={SignUpUserImg} alt="Signupuserimg" />
                <img className='w-inherit lg:absolute lg:right-64 lg:-top-10 bottom-0 lg:rotate-12 hidden lg:h-full lg:block' src={SignUpUserLIne} alt="Sign up user line" />

                <img className='object-contain w-auto sm:absolute bottom-0 sm:block lg:hidden sm:top-0 sm:bottom-0 hidden sm:h-[100vh] ' src={SignUpUserTab} alt="Signupuserimg" />
                <img className='w-auto sm:absolute sm:block bottom-0 lg:hidden sm:right-24 sm:bottom-0 sm:-top-10 sm:h-[100vh]' src={SignUpUserLineTab} alt="Sign up user line" />
            </div>
         </div>
        </>
    )
}