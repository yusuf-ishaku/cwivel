import { Navbar } from "./navbar";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube,  } from 'react-icons/si';
import { RiLinkedinFill } from 'react-icons/ri';
import Sitting from "/src/assets/img/sitting.png"
import { IconContext } from "react-icons";
import Countdown from 'react-countdown';

export const ComingSoon = () => {
    let date = new Date('August 1, 2023').getTime();
    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>Hurray</span>;
        } else {
          // Render a countdown
            return (<div className="flex flex-row justify-between mt-10 w-full sm:w-4/5 font-face-digi">
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-20 sm:w-32 h-20 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">{days}</div>
                    <span>Days</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-20 sm:w-32 h-20 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">{hours}</div>
                    <span>Hours</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-20 sm:w-32 h-20 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">{minutes}</div>
                    <span>Minutes</span>
                </div>
                <div className="flex-col flex items-center p-1">
                    <div className="bg-gray-200 text-3xl w-20 sm:w-32 h-20 sm:h-32 flex sm:text-6xl flex-row items-center justify-center text-gray-600">{seconds}</div>
                    <span>Seconds</span>
                </div>
            </div>);
        }
      };
    return(
        <>
            <Navbar cl = {false}/>
            <div className="w-full px-0 sm:px-10 md:px-14">
                <div className="hero px-4 sm:px-0 w-full py-12 flex flex-row justify-between items-center">
                    <div className="block h-fit w-full sm:w-3/5 ">
                        <p className="text-6xl text-center sm:text-left w-full sm:w-full md:text-5xl font-bold block text-cwivel leading-11">
                            We are  coming soon!
                        </p>
                        <span className="text-xl w-full text-center sm:text-left leading-8">
                            Sign up to be the first one to know when we launch!
                        </span>
                     
                        <Countdown date={date} renderer={renderer} daysInHours={true}>

                        </Countdown>
                        <div className="flex flex-row items-center mt-6">
                            <input  placeholder="Enter your email" className="focus:outline-none p-2 rounded-l-sm h-10 placeholder-gray-700  border-2 w-[450px]" type="email" name="Email" id="email" />
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

                    <div className="sm:block hidden sm:w-auto pl-6">
                        <img src={Sitting} alt="Sitting man"/>
                    </div>
                </div>
            </div>
        </>
    )
}