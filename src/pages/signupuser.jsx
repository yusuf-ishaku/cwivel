import { useState } from 'react';
import SignUpUserImg from '../assets/img/SignUpUserImg.png';

import SignUpUserLIne from '../assets/img/SignUpUserLIne.png';
export const SignUpUser  = () =>{
    const [type, setType] = useState("text");
    // console.log(type)
    return (
        <>
         <div className='w-full h-full flex flex-col items-center'>
            <div className='sm:w-1/6 w-auto'>
                Hello World
            </div>
            <div className='w-[90%] mt-10 text-center'>
                <h2 className='text-cwivel font-semibold text-md'>Create Account</h2>
                <form>
                    <input type="text" placeholder='First Name' id='fname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' />
                    <input type="text" placeholder='Last Name' id='lname' className='my-5 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' />
                    <input type = {type} onFocus={() =>{setType("date")}} onBlur= {() =>{setType("text")}} placeholder='Date of Birth' id='email' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[90%] h-10' />

                </form>
            </div>
         </div>
        </>
    )
}