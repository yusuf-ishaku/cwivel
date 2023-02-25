import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
export const ArtisanSignUp = () =>{
    const [type, setType] = useState("text");
    let milo = true;
    let nextPage = () =>{
        let pro = document.querySelector(".sl");
        let con = document.querySelector('.tl');
        con.classList.remove("hidden");
        con.classList.add("block");
        con.classList.add("w-full")
        pro.classList.add("hidden")
    }
    let backPage = () =>{
        let pro = document.querySelector(".sl");
        let con = document.querySelector('.tl');
        con.classList.add("hidden");
        pro.classList.remove("hidden")
    }
    return(
        <>
            <div className="w-[100vw] h-full flex flex-col">
                <div className="flex h-10">Cwivel</div>
                <div className="w-full text-center h-10">
                    <span className="text-cwivel sm:text-md:text-sm font-semibold">
                        Create Account
                    </span>
                    <form className="w-full">
                        <div className="w-full flex px-10 sm:mt-6">
                            <div className="w-full sl sm:w-1/2">
                                <input type="text" name="fname" placeholder="Full name" className="w-[60%] border-gray-300 p-6 my-5 h-10 rounded-md mx-10 border-me placeholder-gray-400 focus:outline-none" required/>
                                <input type="text" name="lname" placeholder="Username" className="w-[60%] border-gray-300 p-6 my-5 h-10  rounded-md mx-10 border-me placeholder-gray-400 focus:outline-none" required/>
                                <input type = {type} name="date" onFocus={() =>{setType("date")}} onBlur= {() =>{setType("text");}} placeholder="Date of Birth" id='date' className='my-5 placeholder-gray-400 focus:outline-none p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[60%] h-10' required />
                                <IconContext.Provider value={{ size: "20", className: "text-gray-400" }}>
                                    <div className="flex flex-row items-center justify-center w-[100%]">
                                        <input type="email" name="email" placeholder='Email' id='email' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm -ml-5 border-gray-300 rounded-md border-me w-[60%] h-10 focus:outline-none' required />
                                        <AiOutlineMail className='-ml-10'></AiOutlineMail>
                                    </div>
                                </IconContext.Provider>
                                <input type = "address" name="address" placeholder='Address' id='address' className='my-5 placeholder-gray-400 p-6 text-gray-400 text-sm border-gray-300 rounded-md border-me w-[60%] h-10 focus:outline-none' required />
                                <div className="flex sm:hidden w-[70%] mx-20 sm:w-[60%] sm:mx-10 items-center">
                                    <Link to="/signup" className="block"><span className="block text-cwivel">Back</span></Link>
                                    <button onClick={nextPage} className='text-white bg-cwivel-green p-2 px-5 ml-auto rounded-md z-50' >Next</button>
                                </div>
                            </div>
                            <div className="sm:w-1/2 tl sm:flex flex-col hidden" >
                                <input type="text" name="service" placeholder="Services offered" className="w-[60%] mx-10 rounded-md p-6 my-5 h-10 border-me border-gray-300 placeholder-gray-400 focus:outline-none" required/>
                                <input type="text" name="service" placeholder="" className="w-[60%] mx-10 rounded-md p-6 my-5 h-10 border-me border-gray-300 placeholder-gray-400 focus:outline-none" required/>
                                <textarea type="text" name="bio" placeholder="Bio" rows="5" className="w-[60%] mx-10 rounded-md p-3 my-5 h-10 border-me border-gray-300 placeholder-gray-400 focus:outline-none" required/>
                                <input type="text" name="em" placeholder="" className="w-[60%] mx-10 rounded-md p-6 my-5 h-10 border-me border-gray-300 placeholder-gray-400 focus:outline-none" required/>
                                <div className="flex w-[70%] mx-20 sm:w-[60%] sm:mx-10 items-center">
                                    <Link to="/signup" className="hidden sm:block"><span className="block text-cwivel">Back</span></Link>
                                    <span className="block text-cwivel sm:hidden" onClick={backPage}>Back</span>
                                    <button type='submit' className='text-white bg-cwivel-green p-2 px-5 ml-auto rounded-md z-50' >Continue</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}