import { useState, useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import  Axios from "axios";
import { Users } from "./users";
export const ArtisanSignUp = () =>{
    const [type, setType] = useState("text");
    const liner = useRef();
    const initCountry = useRef();
    const firstPage = useRef();
    const secondPage = useRef();
    const thirdPage = useRef();
    const [updatedCountries, setUpdatedCountries ] = useState([]);
    const {data} = useQuery(["countries"], () =>{
        return Axios.get("https://restcountries.com/v3.1/all").then((res) => res.data);
    });
    const [countryList, setCountryList] = useState([]);
    
    const pickCountry = (e) =>{
        initCountry.current.value = e;
        liner.current.classList.add("hidden")
    }
    const dropDownCountry =() =>{
       liner.current.classList.remove("hidden")
    //    console.log(data)
    setCountryList(data);
    //    console.log(countryList)
    }
    const sendupCountry = (e) =>{
        if(!liner.current.classList.contains("hidden"))return
        liner.current.classList.add("hidden");
    }
    const nextPage = (e) =>{
        e.preventDefault();
        firstPage.current.classList.remove("translate-x-[100vw]")
        firstPage.current.classList.add("translate-x-0");
        secondPage.current.classList.add("translate-x-[-100vw]");
    }
    const previousPage = (e)=>{
        e.preventDefault();
        firstPage.current.classList.remove("translate-x-0")
        firstPage.current.classList.add("translate-x-[100vw]");
        
        secondPage.current.classList.remove("translate-x-[-100vw]");
        secondPage.current.classList.add("translate-x-0");
    }
    const findCountry = (e) =>{
        // set the data to filter the content of the original data field here
        // console.log(e.target.value);
        let query = e.target.value ;
        setCountryList(data);
        setUpdatedCountries( data.filter(country =>{
           let countryName = country.name.common;
           return countryName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        }))
        // console.log(updatedCountries)
        setCountryList(updatedCountries)

    }
    return(
        <>
        <section className="flex flex-row w-[100vw] fixed md:h-[100vh] h-fit overflow-y-scroll overflow-x-hidden">
            <section ref={secondPage} className="w-[100vw] relative  md:h-[100vh] flex flex-col p-8">
                    <div className="flex items-center justify-center h-10">
                        <h2>
                            Cwivel
                        </h2>
                    </div>
                    <div className="w-full flex flex-col items-center text-center h-10">
                        <h2 className="text-cwivel sm:text-sm md:text-2xl font-semibold">
                            Partner with us today and grow your business!
                        </h2>
                        <h3 className="mt-2 text-gray-600 text-base">
                            Fill the form to get started!
                        </h3>
                        <form className="w-[75%]  mt-8 text-left">
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Email
                                </label>
                                <input placeholder="example@gmail.com"  type="email" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Type of Business
                                </label>
                                <select className="border-[1px] focus:outline-none border-gray-200 p-2 rourrrnded-md" id="cars" name="cars">
                                    <option className="border-[1px]" value="volvo">Cleaner</option>
                                    <option value="saab"></option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                Select Country
                                </label>
                                <input ref={initCountry}  onFocus={dropDownCountry} onBlur={(e)=>sendupCountry(e)} onChange={(e)=>findCountry(e)} className="border-[1px] focus:outline-none border-gray-200 p-2 rounded-md" type="text"  defaultValue={"Nigeria"} readOnly={false}></input>
                                <div ref={liner} className="h-[10rem] bg-white  w-auto relative bottom-0 z-50 hidden overflow-y-scroll border-[1px]">
                                    <ul className="list-none ">
                                        { //set a variable detector that will check if the value of the "Nigeria" tagged element is empty or not, if not, search, if it is, map the elements available
                                            // initCountry.length === 0?
                                            
                                            
                                            countryList.map((element, x) =>{
                                                return(
                                                    <li onClick={(e) =>pickCountry(element.name.common)} className={"border-b-[1px] cursor-pointer list-none p-2"}>{element.name.common}</li>
                                                )
                                            })
                                        
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-row left-[60%] bottom-10 flex mt-2 justify-end my-4">
                                <button onClick={(e)=> nextPage(e)} className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">Continue</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section  ref={firstPage} className="w-[100vw] h-full flex flex-col p-8 absolute translate-x-[100vw]">
                    <div className="flex items-center justify-center h-10">
                        <h2>
                            Cwivel
                        </h2>
                    </div>
                    <div className="w-full flex flex-col items-center text-center h-10">
                        <h2 className="text-cwivel sm:text-sm md:text-2xl font-semibold">
                            Partner with us today and grow your business!
                        </h2>
                        <h3 className="mt-2 text-gray-600 text-base">
                            Fill the form to get started!
                        </h3>
                        <form className="w-[75%]  mt-8 text-left">
                            <h4 className="text-gray-800 text-base mb-2 ml-2">Name</h4>
                            <div className="flex flex-row w-full justify-between">
                                <div className="flex flex-col  w-1/2 mr-2">
                                    <input placeholder="Enter your first name"  type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                                    <label htmlFor="email" className="mb-2 text-sm text-gray-800 ml-2">
                                        First Name
                                    </label>
                                </div>
                                <div className="flex flex-col w-1/2 ml-2">
                                    <input placeholder="Enter your last name"  type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                                    <label htmlFor="email" className="mb-2 text-sm text-gray-800 ml-2">
                                        Last Name
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Address of the Store
                                </label>
                                <input placeholder="Enter store address"  type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                Name of Store
                                </label>
                                <input placeholder="Enter store name"  type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                Phone
                                </label>
                                <input placeholder="Enter store name"  type="number" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                 Where did you hear about Cwivel?
                                </label>
                                <div className="my-4">
                                    <input type="radio" id="age1" name="age" value="30"></input>
                                    <label className="ml-3" for="age1">Contacted By Cwivel Agent</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age2" name="age" value="60"></input>
                                    <label className="ml-3" for="age2">Google Search</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" for="age3">Twitter/Twitter Ad.</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" for="age3">Referral</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" for="age3">Other</label><br></br>
                                </div>
                            </div>
                            <div className="flex-row left-[60%] bottom-10 flex mt-2 justify-between my-4">
                                <button onClick={(e)=> previousPage(e)} className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">Previous</button>
                                <button  className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">Continue</button>
                            </div>
                        </form>
                    </div>
                </section>
        </section>
        </>
    )
}