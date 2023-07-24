import { useState, useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Axios from "axios";
import Cwivel from '../assets/img/cwivel.png';
import { Users } from "./users";
import countriesData from "../assets/jsons/countries.json";
import artisanJobTitlesData from "../assets/jsons/artisanJobTitles.json";

export const ArtisanSignUp = () => {
    // const liner = useRef();
    const initCountry = useRef();
    const firstPage = useRef();
    const secondPage = useRef();
    const [countries, setCountries] = useState([]);
    const [artisanJobTitles, setArtisanJobTitles] = useState([]);
    const [countryInput, setCountryInput] = useState("Nigeria");
    // const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        setCountries(countriesData);
        setArtisanJobTitles(artisanJobTitlesData);
    }, []);

    const pickCountry = (countryName) => {
        setCountryInput(countryName);
        // liner.current.classList.add("hidden");
      };

    // const dropDownCountry = () => {
    //     liner.current.classList.remove("hidden");
    //     setCountryList(countriesData);
    // };

    // const sendupCountry = (e) => {
    //     if (!liner.current.classList.contains("hidden")) return;
    //     liner.current.classList.add("hidden");
    // };

    const nextPage = (e) => {
        e.preventDefault();
        firstPage.current.classList.remove("translate-x-[100vw]");
        firstPage.current.classList.add("translate-x-0");
        secondPage.current.classList.add("translate-x-[-100vw]");
    };

    const previousPage = (e) => {
        e.preventDefault();
        firstPage.current.classList.remove("translate-x-0");
        firstPage.current.classList.add("translate-x-[100vw]");

        secondPage.current.classList.remove("translate-x-[-100vw]");
        secondPage.current.classList.add("translate-x-0");
    };

    // const findCountry = (e) => {
    //     let query = e.target.value;
    //     setCountryList(countriesData);
    //     setUpdatedCountries(
    //         countriesData.filter((country) => {
    //             let countryName = country.name.common;
    //             return countryName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    //         })
    //     );
    //     setCountryList(updatedCountries);
    // };

    return (
        <>
            <section className="flex flex-row w-[100vw] fixed h-[100vh] overflow-y-scroll overflow-x-hidden">
                <section ref={secondPage} className="w-[100vw] relative md:h-[100vh] flex flex-col p-8">
                    <div className="flex items-center justify-center h-10">
                        <img src={Cwivel} alt="Cwivel" className="cwivel max-w-[150px] pb-10" />
                    </div>
                    <div className="w-full flex flex-col items-center text-center h-10">
                        <h2 className="text-cwivel sm:text-sm md:text-2xl font-semibold">
                            Partner with us today and grow your business!
                        </h2>
                        <h3 className="mt-2 text-gray-600 text-base">Fill the form to get started!</h3>
                        <form className="w-[75%] mt-8 text-left">
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Email
                                </label>
                                <input
                                    placeholder="example@gmail.com"
                                    type="email"
                                    className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]"
                                    required
                                ></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="jobtitles" className="my-2 ml-2">
                                    Type of Business
                                </label>
                                <select
                                    className="border-[1px] focus:outline-none border-gray-200 p-2 rounded-md"
                                    id="jobtitles"
                                    name="jobtitles"
                                >
                                    {artisanJobTitles.map((jobTitle) => (
                                        <option key={jobTitle.id} value={jobTitle.name}>
                                            {jobTitle.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col my-4">
                                <label className="my-2 ml-2">
                                    Select Country
                                </label>
                                <select
                                    ref={initCountry}
                                    onChange={(e) => pickCountry(e.target.value)}
                                    value={countryInput}
                                    className="border-[1px] focus:outline-none border-gray-200 p-2 rounded-md"
                                >
                                    {countriesData.map((country) => (
                                        <option key={country.id} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-row left-[60%] bottom-10 flex mt-2 justify-end my-4">
                                <button onClick={(e) => nextPage(e)} className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                <section ref={firstPage} className="w-[100vw] h-full flex flex-col p-8 absolute translate-x-[100vw]">
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
                                    <input placeholder="Enter your first name" type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                                    <label htmlFor="email" className="mb-2 text-sm text-gray-800 ml-2">
                                        First Name
                                    </label>
                                </div>
                                <div className="flex flex-col w-1/2 ml-2">
                                    <input placeholder="Enter your last name" type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                                    <label htmlFor="email" className="mb-2 text-sm text-gray-800 ml-2">
                                        Last Name
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Address of the Store
                                </label>
                                <input placeholder="Enter store address" type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Name of Store
                                </label>
                                <input placeholder="Enter store name" type="text" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Phone
                                </label>
                                <input placeholder="Enter store name" type="number" className="focus:outline-none p-2 placeholder-gray-500 rounded-md border-[1px]" required></input>
                            </div>
                            <div className="my-4">
                                <label htmlFor="email" className="my-2 ml-2">
                                    Where did you hear about Cwivel?
                                </label>
                                <div className="my-4">
                                    <input type="radio" id="age1" name="age" value="30"></input>
                                    <label className="ml-3" htmlFor="age1">Contacted By Cwivel Agent</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age2" name="age" value="60"></input>
                                    <label className="ml-3" htmlFor="age2">Google Search</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" htmlFor="age3">Twitter/Twitter Ad.</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" htmlFor="age3">Referral</label><br></br>
                                </div>
                                <div className="my-4">
                                    <input type="radio" id="age3" name="age" value="100"></input>
                                    <label className="ml-3" htmlFor="age3">Other</label><br></br>
                                </div>
                            </div>
                            <div className="flex-row left-[60%] bottom-10 flex mt-2 gap-2 justify-between my-4">
                                <button onClick={(e) => previousPage(e)} className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">Previous</button>
                                <button className="p-2 rounded-md px-6 bg-cwivel-green text-white text-xl">Continue</button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}