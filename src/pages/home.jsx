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

import Group from "../assets/img/Group.png"
export const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="w-full px-4 sm:px-10 md:px-14">
                <div className="hero w-full py-12 flex flex-row justify-between items-center">
                    <div className="block h-fit w-full sm:w-2/5 ">
                        <p className="text-lg w-2/5 sm:w-full md:text-3xl font-bold block text-cwivel leading-8">
                            Find The Perfect Artisan Best Suited For Your needs
                        </p>
                        <input type="search" name="Search" id="search" placeholder="Search for carpentar, cleaner and more" className="w-[80%] mt-7 p-3 bg-cwivel-green text-white rounded-md focus:outline-none" />
                    </div>
                    <div className="sm:block hidden sm:w-3/5 pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between h-fit w-full">
                    <ArtisanSelect image = {Cleaner} craft = "Cleaner"/>
                    <ArtisanSelect image = {Mechanic} craft = "Mechanic"/>
                    <ArtisanSelect image = {Plumber} craft = "Plumber"/>
                    <ArtisanSelect image = {Carpenter} craft = "Carpenter"/>
                    <ArtisanSelect image = {Laundry} craft = "Laundry"/>
                    <ArtisanSelect image = {Driver} craft = "Shifter"/>
                    <ArtisanSelect image = {Electronics} craft = "Electronics"/>
                    <ArtisanSelect image = {Cleaneragain} craft = "Cleaner"/>
                </div>
                <div className="flex flex-col h-fit w-full p-3 mt-16">
                    <div className="intros flex flex-row justify-between w-full">
                        <div className="">
                            <h1 className="text-2xl font-bold">Top Artisans in Lekki</h1>
                            <h3 className="text-gray-400 text-lg font-normal">Hire top artisans around you</h3>
                        </div>
                        <div className="flex justify-center items-center ml-auto">
                            <a href="#" className="text-cwivel text-md font-semibold">See all</a>
                        </div>
                    </div>
                    <div className="w-auto overflow-x-auto">
                        <div className="w-fit gap-10 p-3 mb-16 flex flex-row">
                            <ArtisanCards image = {SauveImage} craft = "Carpentry" artisanName = "Sauve Contractors" location = "Sauve Estate, Lekki Phase 1" rating = "4,100"/>
                            <ArtisanCards image ={BarberImage} craft = "Barber" artisanName = "Big John Home Barbing Service" location = "No 3 Bankole Oki, Ikoyi" rating = "4,355"></ArtisanCards>
                            <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                            <ArtisanCards image = {BarberImage} craft = "Cleaner" artisanName = "Richmore Cleaning Service" location = "Sauve Estate, Lekki Phase 1" rating = "4,355"></ArtisanCards>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-fit w-full p-3 mt-16">
                    <div className="intros flex flex-row justify-between w-full">
                        <div className="">
                            <h1 className="text-2xl font-bold">Top Deals and Offers</h1>
                            <h3 className="text-gray-400 text-lg font-normal">Top Hire Discount for the week.</h3>
                        </div>
                        <div className="flex justify-center items-center ml-auto">
                            <a href="#" className="text-cwivel text-md font-semibold">See all</a>
                        </div>
                    </div>
                    <div className="w-auto p-10 overflow-x-auto">
                        <div className="w-fit h-fit my-4 gap-10 flex flex-row justify-between">
                            <ArtisanBulletins image = {PChef} craft = "Private Chef" stName = "Chef and Sauce" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                            <ArtisanBulletins image = {Cleaner2} craft = "Cleaner" stName = "Pro Cleaner" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                            <ArtisanBulletins image = {Eleco} craft = "Electrician" stName = "Electrician" location = "SVE, Ikoyi, Lagos State" rating = "4.8" nReview = "4,3456" dprice = "4,000" oPrice = "5,000"></ArtisanBulletins>
                        </div>
                    </div>
                </div>
                <div className="w-full py-32 pb-8 h-fit flex items-center">
                    <div className="mr-auto">
                        <h3 className="font-semibold text-2xl">Why choose us?</h3>
                        <ul className="list pt-1">
                            <li className="p-1">Get connected with clients across Nigeria</li>
                            <li className="p-1">Meet with client, negotiate your rate and get paid immediatly after services</li>
                            <li className="p-1"> Get connected with artisans across Nigeria, Distance is no longer a barrier</li>
                            <li className="p-1">Power within your reach</li>
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
                    <div className="py-10">
                        <h1 className="text-white text-lg">Too much job on your hand?</h1>
                        <h1 className="text-white text-lg">You can outsource here.</h1>
                        <h1 className="text-white text-lg">Hire artisans and sub-contract your projects to them.</h1>
                        <button className="bg-white text-cwivel p-2 mt-5 rounded-full">Find Artisans</button>
                    </div>
            </div>
            <div className="w-full flex h-fit py-4">
                <div className="border-cwivel h-52 pl-16 p-4 border-2 w-1/2">
                    <p className="text-sm">
                        We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                    <div className="w-full py-6 flex">
                        <div className="w-fit h-fit flex">
                            <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                            <span className="block ml-4">Have a question?</span>
                        </div>
                        <div className="w-fit h-fit flex">
                            <div className="rounded-full w-16 h-16 bg-cwivel-green"></div>
                            <span className="block ml-4">Contact us at:</span>
                        </div>
                    </div>
                    
                </div>
                <div className="border-cwivel pl-12 p-4 border-2 border-l-0 w-1/2 h-52">
                    <p className="text-sm">
                        Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.
                    </p>
                    <div className="w-full py-6 h-fit flex">
                        <input className="bg-cwivel-green w-[540px] h-10 rounded-full p-3" placeholder="Enter your email"  type="email" name="email" id="email" />
                        <button className="w-24 h-8 -ml-[100px] mt-1 text-cwivel p-1 bg-white rounded-full">Submit</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit px-6 my-10 flex justify-between">
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
            <div className="w-full px-16 my-4 py-6 flex justify-between">
                <div className="flex justify-between w-1/3">
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
