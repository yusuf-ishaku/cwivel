import { Navbar } from "../assets/components/navbar"

import Sitting from "../assets/img/sitting.png"
export const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="w-full">
                <div className="hero w-full py-10 flex flex-row justify-between items-center">
                    <div className="block h-fit w-2/5">
                        <p className="text-md md:text-3xl font-bold block text-cwivel leading-8">
                            Find The Perfect Artisan Best Suited For Your needs
                        </p>
                        <input type="search" name="Search" id="search" placeholder="Search for carpental, Cleaner and more" className="w-full mt-7 p-3 bg-cwivel-green text-white rounded-md" />
                    </div>
                    <div className="w-1/2 pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
            </div>
        </>
    ) 
}