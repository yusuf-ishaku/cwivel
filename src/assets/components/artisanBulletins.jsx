// this is the page for the component that is displaying the artisans, nothing to see here.

import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
export const ArtisanBulletins = (props) =>{
    return(
        <>
        <div className="w-auto sm:w-[400px] h-48 my-10 mx-2 flex flex-row bg-white rounded-3xl drop-shadow-lg ">
            <img className="w-1/2 object-cover rounded-3xl" src={props.image} alt="Barber salon"></img>
            <div className="w-56">
                <div className="flex flex-col justify-center p-1 pl-3 sm:p-3">
                    <h3 className="block text-cwivel font-light text-md sm:mt-1">{props.craft}</h3>
                    <h5 className="block font-semibold text-lg">{props.stName}</h5>
                    <h3 className="block font-light text-md text-gray-400">{props.location}</h3>
                    <div className="flex flex-col">
                        <IconContext.Provider value={{ color: "orange", size: "1.5em", className: "global-class-name" }}>
                            <div className="pt-1 flex items-center">
                                <AiFillStar />
                                <span className="pl-2 font-semibold">{props.rating}</span>
                                <span className="pl-1 text-sm font-normal">({props.nReview})</span>
                            </div>
                            <span className="block py-2 text-md font-light">N{props.dprice}/hr <span className="text-gray-400 line-through">N{props.oPrice}/hr</span></span>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}