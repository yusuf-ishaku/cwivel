import { Navbar } from "../assets/components/navbar";

import { ArtisanSelect } from "../assets/components/artisanSelect";

import Sitting from "../assets/img/sitting.png";
import Carpenter from "../assets/img/Carpenter.png";
import Cleaner from "../assets/img/Cleaner.png";
import Cleaneragain from "../assets/img/Cleaneragain.png";
import Driver from "../assets/img/Driver.png";
import Electronics from "../assets/img/Electronics.png";
import Laundry from "../assets/img/Laundry.png";
import Mechanic from "../assets/img/Mechanic.png";
import Plumber from "../assets/img/Plumber.png";
export const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="w-full">
                <div className="hero w-full py-12 flex flex-row justify-between items-center">
                    <div className="block h-fit w-2/5">
                        <p className="text-md md:text-3xl font-bold block text-cwivel leading-8">
                            Find The Perfect Artisan Best Suited For Your needs
                        </p>
                        <input type="search" name="Search" id="search" placeholder="Search for carpentar, cleaner and more" className="w-full mt-7 p-3 bg-cwivel-green text-white rounded-md focus:outline-none" />
                    </div>
                    <div className="w-1/2 pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
                <div className="flex flex-row justify-between h-fit w-auto p-3">
                    <ArtisanSelect image = {Cleaner} craft = "Cleaner"/>
                    <ArtisanSelect image = {Mechanic} craft = "Mechanic"/>
                    <ArtisanSelect image = {Plumber} craft = "Plumber"/>
                    <ArtisanSelect image = {Carpenter} craft = "Carpenter"/>
                    <ArtisanSelect image = {Laundry} craft = "Laundry"/>
                    <ArtisanSelect image = {Driver} craft = "Shifter"/>
                    <ArtisanSelect image = {Electronics} craft = "Electronics"/>
                    <ArtisanSelect image = {Cleaneragain} craft = "Cleaner"/>
                </div>
            </div>
        </>
    ) 
}