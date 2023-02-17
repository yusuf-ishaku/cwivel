import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
export const ArtisanBulletins = (props) =>{
    return(
        <>
        <div className="w-fit h-64 mx-2 flex flex-row bg-white rounded-3xl drop-shadow-lg ">
            <img className="w-1/2" src={props.image} alt="Barber salon"></img>
            <div className="w-56">
                <div className="flex flex-col justify-center p-4">
                    <h3 className="block text-cwivel font-light text-md mt-2">{props.craft}</h3>
                    <h5 className="block font-semibold text-xl my-2 mt-3">{props.stName}</h5>
                    <h3 className="block font-light text-xl text-gray-400">{props.location}</h3>
                    <div className="flex flex-col">
                        <IconContext.Provider value={{ color: "orange", size: "2em", className: "global-class-name" }}>
                            <div className="pt-1 flex items-center">
                                <AiFillStar />
                                <span className="pl-2 font-semibold">{props.rating}</span>
                                <span className="pl-1 text-md font-normal">({props.nReview})</span>
                            </div>
                            <span className="block py-2 text-lg font-semibold">N{props.dprice}/hr <span className="text-gray-400 line-through">N{props.oPrice}/hr</span></span>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}