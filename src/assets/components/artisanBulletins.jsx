export const ArtisanBulletins = () =>{
    return(
        <>
        <div className="w-auto h-72 mx-4 flex flex-col bg-white rounded-xl drop-shadow-lg ">
            <img className="rounded-xl -z-10 relative" src={props.image} alt="Barber salon"></img>
            <div className="w-auto m-4 flex">
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