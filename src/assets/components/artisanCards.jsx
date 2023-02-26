import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
export const ArtisanCards = (props) =>{
    return(
        <>
        <div className="w-[268px] h-80 my-3  bg-white rounded-xl drop-shadow-lg ">
            <div className="w-20 h-6 m-4 blight text-xs flex items-center justify-center text-white text-center rounded-2xl absolute z-50">{props.craft}</div>
            <img className="w-auto h-40  rounded-xl -z-10 relative" src={props.image} alt="Barber salon"></img>
            <div className="w-full m-4 flex">
                <div className="flex flex-col">
                    <h3 className="block font-semibold text-lg mt-2">{props.artisanName}</h3>
                    <h5 className="block font-light text-md my-1">{props.location}</h5>
                    <div className="flex items-center">
                        <IconContext.Provider value={{ color: "orange", className: "global-class-name" }}>
                            <div className="pt-1 flex justify-between w-24">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />

                            </div>
                            <span className="pl-1 text-xs">({props.rating})</span>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}