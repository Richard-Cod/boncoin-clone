import { useState } from "react";
import { KRoutes } from "../../../constants/KRoutes";

import  { HeartIcon } from  "@heroicons/react/outline";

import  { HeartIcon as LikedIcon } from   "@heroicons/react/solid";
import Router from "next/router";



function OfferItem({item}) {
    const [isLiked, setisLiked] = useState(false)
    const handleLikeDislike = (e) => setisLiked(!isLiked)

    const getTopDetailPage =  (e) => Router.push(KRoutes.offresCity("frf"))

    return (
    //    <a href={KRoutes.offresCity("item2333")}>
            <div className="md:flex md:space-x-4 md:h-56 md:border-b-2 md:pb-4 md:max-w-2xl cursor-pointer">


    <div onClick={getTopDetailPage} className="relative">
        <img src="/illus2.svg" className="h-full md:w-72 border-2 rounded-lg" />
        <div className="absolute right-2 rounded-full bottom-2 bg-gray-900 text-white text-xs text-center w-7 h-7 flex items-center justify-center"> <span>48</span> </div>
    </div>

<div className="justify-between flex flex-col flex-1  ">
    <div onClick={getTopDetailPage} className="" >
        <h1 className="hover:text-green-400">Appartement</h1>

        <p className="text-sm text-gray-600  ">4 pers. *  Appartement</p>

        <p className="p-1 text-xs w-28 bg-red-100">Paiement en ligne</p>

        <p className="text-xs text-gray-800 mt-5"> à partir de <span>40$</span>  / nuit </p>
    </div>

    <div className="flex items-center justify-between ">
        <p onClick={getTopDetailPage} className="text-gray-400 text-sm">Coquelles 634445 </p>
        
        <span onClick={handleLikeDislike}>
            {isLiked ?  <LikedIcon className="w-7 h-7 text-gray-400 text-red-400" />: 
            <HeartIcon className="w-7 h-7 text-gray-400" /> }
        </span>
    </div>
</div>
<hr className="hidden md:block" />


</div>
    )
}

export default OfferItem
