// This is the comingsoon page, the current way the page looks as at 24-05-2023
// Imports
import { Navbar } from "./navbar";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube,  } from 'react-icons/si';
import { RiLinkedinFill } from 'react-icons/ri';
import Sitting from "/src/assets/img/sitting.png"
import { IconContext } from "react-icons";
// This is the import for the depency used for the countdown
import Countdown from 'react-countdown';
import { NavBar2 } from "./nav2";

export const ComingSoon = () => {
    // Initializing the day the countdown should end.

    let date = new Date('August 1, 2023').getTime();
    // This is a fucntion that starts the countdown 
    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>Hurray</span>;
        } else {
          // This  Renders a countdown which displays how you want the countdown to look
            return (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3 sm:mt-10 w-full sm:w-4/5 font-face-digi">
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-16 sm:w-32 h-16 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">
                        {days}
                    </div>
                    <span className="text-sm">Days</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-16 sm:w-32 h-16 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">
                        {hours}
                    </div>
                    <span className="text-sm">Hours</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-16 sm:w-32 h-16 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">
                        {minutes}
                    </div>
                    <span className="text-sm">Minutes</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-16 sm:w-32 h-16 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">
                        {seconds}
                    </div>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>);
        }
      };
    return(
        <>
            {/* <Navbar cl = {false}/>
            <NavBar2></NavBar2> */}
            <div className="w-full px-0 sm:px-10 md:px-14">
                <div className="hero px-4 sm:px-0 w-full py-3 sm:py-12 flex flex-row justify-between items-center">
                    <div className="block h-fit w-full sm:w-3/5 ">
                        <h1 className="text-4xl text-center sm:text-left w-full sm:w-full md:text-5xl font-bold block text-cwivel sm:leading-11">
                            We are  coming soon!
                        </h1>
                        <h3 className="text-lg w-full text-center sm:text-left leading-8">
                            Sign up to be the first one to know when we launch!
                        </h3>
                        {/* this is the countdown component earlier imported with renderer specifying how it will look and other props passed in. */}
                        <Countdown date={date} renderer={renderer} daysInHours={true}>

                        </Countdown>
                        <div className="flex flex-col sm:flex-row items-center mt-6">
                            {/* Submit email functionality */}
                            <input  placeholder="Enter your email" className="focus:outline-none mb-2 sm:mb-0 p-1 w-full rounded-l-sm h-10 placeholder-gray-700  border-2 sm:w-[450px]" type="email" name="Email" id="email" />
                            <button className="bg-gray-600 w-32 rounded-r-sm p-[0.55rem] text-white text-sm">Submit</button>
                        </div>
                        <div className="flex flex-row items-center mt-1 p-3">
                            <IconContext.Provider value={{color: 'rgb(115, 115, 255)', size: '24px'}}>
                                <span className="mr-5 cursor-pointer">
                                    <SiFacebook></SiFacebook>
                                </span>
                                <span className="mr-5 cursor-pointer">  <SiTwitter></SiTwitter></span>
                                <span className="mr-5 cursor-pointer"> <SiInstagram></SiInstagram></span>
                               
                            </IconContext.Provider>
                            <IconContext.Provider value={{color: 'rgb(115, 115, 255)', size: '24px'}}>
                               <span className="cursor-pointer">
                                    <RiLinkedinFill></RiLinkedinFill>
                                </span> 
                            </IconContext.Provider>
                        </div>
                    </div>

                    <div className="lg:block hidden sm:w-auto pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
            </div>
        </>
    )
}