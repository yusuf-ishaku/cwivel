import { Link } from "react-router-dom";

export const ArtisanSelect = (props) =>{
    return(
        <>
            <div className="w-fit h-fit mt-5">
                 <div className="flex flex-row items-center justify-center rounded-full w-16 h-16 border-me border-gray-400">
                    <img src={props.image} alt="Artisan"/>
                 </div>
                 <div className="text-center block pt-3">{props.craft}</div>
            </div>
        </>
    )
}