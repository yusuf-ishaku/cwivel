import React, {useEffect, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay} from "swiper";

import { Navbar } from "../assets/components/navbar";
import { ArtisanSelect } from "../assets/components/artisanSelect";
import { ArtisanBulletins } from "../assets/components/artisanBulletins";
import { ArtisanCards } from "../assets/components/artisanCards";
import Sitting from "../assets/img/sitting.png";
import Carpenter from "../assets/img/Carpenter.png";
import Cleaner from "../assets/img/Cleaner.png";
import Cleaneragain from "../assets/img/Cleaneragain.png";
import Driver from "../assets/img/Driver.png";
import Electronics from "../assets/img/Electronics.png";
import Laundry from "../assets/img/Laundry.png";
import Mechanic from "../assets/img/Mechanic.png";
import Plumber from "../assets/img/Plumber.png";

import BarberImage from "../assets/img/barber.png";
import SauveImage from "../assets/img/sauve.png";

import Spiral from "../assets/img/spiral (1).png";
import Spiral2 from "../assets/img/spiral.png";

import PChef from "../assets/img/chef (1).png";
import Eleco from "../assets/img/eleco.png";
import Cleaner2 from "../assets/img/cleaner2.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Group from "../assets/img/Group.png"
import { NavBar2 } from "../assets/components/nav2";
import { DisplayNavContext } from "../App";
export const Home = () => {
    AOS.init();
    const {display, setDisplay, displayNav, setDisplayNav} = useContext(DisplayNavContext);

    useEffect(() => {
        setDisplayNav(true)
        console.log(displayNav)
    }, [])
    return(
        <>
            
            {/* <Navbar cl={true}/>
            <NavBar2></NavBar2> */}
            <div className="w-full px-0 sm:px-10 md:px-14">
                <div  data-aos="fade-down" data-aos-easing="linear"
                        data-aos-duration="1000"  className="hero px-4 sm:px-0 w-full py-12 flex flex-row justify-between items-center">
                    <div className="block h-fit w-full sm:w-3/5 ">
                        <h1 className="text-lg w-4/6 sm:w-full md:text-5xl font-bold block text-cwivel leading-11">
                            Find The Perfect Artisan Best Suited For Your needs
                        </h1>
                    </div>
                    <div className="sm:block hidden sm:w-auto pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
                <div className="px-4 sm:px-0 grid grid-cols-4 justify-around md:flex md:flex-row md:justify-between h-fit w-full">
                    <ArtisanSelect image = {Cleaner} craft = "Cleaner"/>
                    <ArtisanSelect image = {Mechanic} craft = "Mechanic"/>
                    <ArtisanSelect image = {Plumber} craft = "Plumber"/>
                    <ArtisanSelect image = {Carpenter} craft = "Carpenter"/>
                    <ArtisanSelect image = {Laundry} craft = "Laundry"/>
                    <ArtisanSelect image = {Driver} craft = "Shifter"/>
                    <ArtisanSelect image = {Electronics} craft = "Electronics"/>
                    <ArtisanSelect image = {Cleaneragain} craft = "Cleaner"/>
                </div>
                <div className="flex  flex-col h-fit w-full py-3 mt-16">
                    <div className="intros px-4 sm:px-0 flex flex-row justify-between w-full">
                        <div className="">
                            <h1 className="text-2xl font-bold">Top Artisans in Lekki</h1>
                            <h2 className="text-gray-400 text-lg font-normal">Hire top artisans around you</h2>
                        </div>
                        <div className="flex justify-center items-center ml-auto">
                            <a href="#" className="text-cwivel text-md font-semibold">See all</a>
                        </div>
                    </div>
                    <div className="w-full">
                            <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                spaceBetween={170}
                                grabCursor={false}
                                breakpoints={{
                                    640: {
                                      slidesPerView: 2,
                                      spaceBetween: 200,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 80,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 180,
                                    },
                                    1433:{
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    }
                                  }}
                                autoplay={{
                                    delay:3000,
                                    disableOnInteraction: true
                                }}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ArtisanCards image = {SauveImage} craft = "Carpentry" artisanName = "Sauve Contractors" location = "Sauve Estate, Lekki Phase 1" rating = "4,100"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image = {SauveImage} craft = "Carpentry" artisanName = "Sauve Contractors" location = "Sauve Estate, Lekki Phase 1" rating = "4,100"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image ={BarberImage} craft = "Barber" artisanName = "Big John Home Barbing Service" location = "No 3 Bankole Oki, Ikoyi" rating = "4,355"></ArtisanCards>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                                </SwiperSlide>
                            </Swiper>
                    </div>
                </div>
                <div className="flex flex-col h-fit w-full p-3 mt-16">
                    <div className="intros flex flex-row justify-between w-full">
                        <div className="">
                            <h1 className="text-2xl font-bold">Top Deals and Offers</h1>
                            <h2 className="text-gray-400 text-lg font-normal">Top Hire Discount for the week.</h2>
                        </div>
                        <div className="flex justify-center items-center ml-auto">
                            <a href="#" className="text-cwivel text-md font-semibold">See all</a>
                        </div>
                    </div>
                    <div className="w-full py-10">
                    <Swiper
                                slidesPerView={1}
                                centeredSlides={true}
                                spaceBetween={170}
                                grabCursor={false}
                                breakpoints={{
                                    640: {
                                      slidesPerView: 2,
                                      spaceBetween: 200,
                                    },
                                    768: {
                                      slidesPerView: 2,
                                      spaceBetween: 80,
                                    },
                                    1024: {
                                      slidesPerView: 3,
                                      spaceBetween: 180,
                                    },
                                    1433:{
                                        slidesPerView: 4,
                                        spaceBetween: 300,
                                    }
                                  }}
                                autoplay={{
                                    delay:3000,
                                    disableOnInteraction: true
                                }}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                // navigation={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <ArtisanBulletins image = {PChef} craft = "Private Chef" stName = "Chef and Sauce" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Cleaner2} craft = "Cleaner" stName = "Pro Cleaner" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                                </SwiperSlide>
                            </Swiper>
                    </div>
                </div>
                <div className="w-full px-4 py-32 pb-8 h-fit flex items-center">
                    <div className="mr-auto">
                        <h1 className="font-semibold text-2xl">Why choose us?</h1>
                        <ul className="list pt-1">
                            <li className="p-1">
                                <h2>Get connected with clients across Nigeria</h2>
                            </li>
                            <li className="p-1">
                                <h2>Meet with client, negotiate your rate and get paid immediatly after services</h2>
                            </li>
                            <li className="p-1"> 
                                <h2>Get connected with artisans across Nigeria, Distance is no longer a barrier</h2>
                            </li>
                            <li className="p-1">
                                <h2>Power within your reach</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden sm:block">
                        <img src={Spiral} alt="First Square" />
                        <img className="absolute -ml-28 -mt-32" src={Spiral2} alt="Second square" />
                    </div>
                </div>
            </div>
            <div className="w-fuller flex justify-around items-center my-32 w-full bg-cwivel-green h-256">
                    <img src={Group} className="hidden md:block" alt="Monkey wrench" />
                    <div className="p-4 md:py-10">
                        <h1 className="text-white text-lg">Too much job on your hand?</h1>
                        <h1 className="text-white text-lg">You can outsource here.</h1>
                        <h1 className="text-white text-lg">Hire artisans and sub-contract your projects to them.</h1>
                        <button className="bg-white text-cwivel p-2 mt-5 rounded-full"><h3>Find Artisans</h3></button>
                    </div>
            </div>
            <div className="w-full flex h-fit">
                <div className="border-cwivel lg:h-52 h-fit pl-2 lg:pl-16 p-4 border-2 w-1/2">
                    <p className="text-sm">
                        We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                    <div className="w-full py-6 lg:py-6 flex mr-16">
                        <div className="w-auto h-fit flex ">
                            <div className="rounded-full w-16 h-13 md:h-16 bg-cwivel-green"></div>
                            <span className="block ml-4">Have a question?</span>
                        </div>
                        <div className="w-auto hidden h-fit sm:flex">
                            <div className="rounded-full w-16 h-13 md:h-16 lg:w-16 lg:h-16 bg-cwivel-green"></div>
                            <span className="block ml-4">Contact us at:</span>
                        </div>
                    </div>
                </div>
                <div className="border-cwivel h-auto pl-2 lg:pl-12 p-4 border-2 border-l-0 w-1/2 lg:h-52 ">
                    <p className="text-sm">
                        Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
                    </p>
                    <div className="hidden w-full py-6 h-fit sm:flex">
                        <input className="bg-cwivel-green w-[540px] h-10 rounded-full p-3" placeholder="Enter your email"  type="email" name="email" id="email" />
                        <button className="w-24 h-8 -ml-[100px] mt-1 text-cwivel p-1 bg-white rounded-full">Submit</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit px-6 my-10 flex justify-between">
                <div className="overflow-scroll md:overflow-auto gap-8 md:gap-0 w-auto flex">
                    <span className="block text-gray-400 text-md">About us</span>
                    <span className="block text-gray-400 text-md">Jobs</span>
                    <span className="block text-gray-400 text-md">Blog</span>
                    <span className="block text-gray-400 text-md">Press</span>
                    <span className="block text-gray-400 text-md">FAQs</span>
                    <span className="block text-gray-400 text-md">Careers</span>
                    <span className="block text-gray-400 text-md">Contact</span>
                    <span className="block text-gray-400 text-md">Privacy Policy</span>
                    <span className="block text-gray-400 text-md">Stemap</span>
                    <span className="block text-gray-400 text-md">Terms of Use</span>
                </div>
            </div>
            <div className="w-full px-2 lg:px-16 my-4 py-6 flex md:flex-row flex-col justify-between">
                <div className="flex justify-between w-full gap-4 md:gap-0 md:w-1/3">
                    <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                    <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                    <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                    <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                    <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                </div>
                <div className="w-auto py-6 text-gray-400">
                    Copyright 2023 Cwivel || All Rights Reserved
                </div>
            </div>
        </>
    ) 
}
