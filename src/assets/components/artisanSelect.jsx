import { Link } from "react-router-dom";

export const ArtisanSelect = (props) =>{
    return(
        <>
            <div className="w-fit h-fit mt-5">
                 <div className="flex flex-row items-center justify-center rounded-full h-10 w-10 sm:w-16 sm:h-16 border-me border-gray-400">
                    <img className="w-5 sm:w-7" src={props.image} alt="Artisan"/>
                 </div>
                 <div className="text-center text-[0.5rem] sm:text-sm block pt-3">{props.craft}</div>
            </div>
        </>
    )
}