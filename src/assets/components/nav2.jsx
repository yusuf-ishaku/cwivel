import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { DisplayNavContext } from "../../App";
export const NavBar2 = () =>{
    // const { display } = useContext(DisplayNavContext);
    return (
        <>
        {<div className="w-[100vw] translate-x-100 flex flex-col sticky bg-cwivel-green p-2">
                <h3 className="mx-4 my-1 text-white">
                    <NavLink to={'/'} >Home</NavLink>
                </h3>
            </div> 
        }   
        </>
    )
}