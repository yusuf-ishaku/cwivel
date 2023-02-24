import { useState } from 'react';
import SignUpUserImg from '../assets/img/SignUpUserImg.png';
import SignUpUserLIne from '../assets/img/SignUpUserLIne.png';


import SignUpUserTab from "../assets/img/SignUpImageTab.png"

import SignUpUserLineTab from '../assets/img/SignUpLineTab.png'
export const SignUpUser  = () =>{
    const [type, setType] = useState("text");
    // console.log(type)
    return (
        <>
         <div className='w-full h-full flex flex-col items-center sm:flex sm:flex-row'>
            <div className='sm:w-1/6 w-auto'>
                Hello World
            </div>
            <div className='w-[90%] sm:w-2/6 pt-10 sm:px-0 h-[100vh] text-center z-50'>
                <h2 className='text-cwivel font-semibold text-md'>Create Account</h2>
                <form className='flex flex-col items-center'>
                    <input type="text" placeholder='First Name' id='fname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required/>
                    <input type="text" placeholder='Last Name' id='lname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <input type = {type} onFocus={() =>{setType("date")}} onBlur= {() =>{setType("text");}} placeholder="Date of Birth" id='date' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <input type = "email" placeholder='Email' id='email' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10'required/>
                    <input type = "address" placeholder='Address' id='address' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' required />
                    <div className="flex w-[90%] items-center">
                        <span className="block text-cwivel">Back</span>
                        <button type='submit' className='text-white bg-cwivel-green p-2 px-5 ml-auto rounded-md z-50' >Continue</button>
                    </div>
                </form>
            </div>
            <div className="w-2/6 sm:w-3/6 sm:flex hidden h-full">
                <img className='object-contain w-inherit lg:absolute lg:top-0  lg:right-0 hidden lg:h-[100vh] lg:block' src={SignUpUserImg} alt="Signupuserimg" />
                <img className='w-inherit lg:absolute lg:right-36 md:-top-80 lg:rotate-12 hidden lg:h-inherit lg:block' src={SignUpUserLIne} alt="Sign up user line" />

                <img className='object-contain w-inherit sm:absolute sm:block lg:hidden sm:top-0 sm:bottom-0 hidden sm:h-full ' src={SignUpUserTab} alt="Signupuserimg" />
                <img className='w-inherit sm:absolute sm:block lg:hidden sm:right-16 sm:bottom-0 sm:top-0 sm:h-full' src={SignUpUserLineTab} alt="Sign up user line" />
            </div>
         </div>
        </>
    )
}