import React from 'react'

import {MenuIcon } from '@heroicons/react/solid'
import { HeartIcon , BellIcon , ChatIcon , UserIcon , PlusCircleIcon , SearchIcon } from '@heroicons/react/outline'
import manageJwtToken from '../../utils/manageJwtToken'
import Link from 'next/link'
import { KRoutes } from '../../constants/KRoutes'


function MobileButtonNav({...props}) {
    const [showContent, setshowContent] = React.useState(false)
    const element = [
        {name : "Home" , url : "/home"},
        {name : "Profile" , url : "/profile"},
        {name : "Log out" , url : "/profile"},
    ]
    return (
        <div style={{
        }} className="relative  text-left md:hidden  ">
    <div>
        <button onClick={() => setshowContent(!showContent)} type="button" className=" bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center  rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 ml-auto" id="options-menu">
             <MenuIcon className="h-5 w-5"/> 
        </button>
    </div>
    <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
    style={{
        display : showContent ? "block" : "none"
    }}>
        
        <div  className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
            {element.map((value) => 
            <a key={value.name} href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
            <span className="flex flex-col">
                <span>
                    {value.name} 
                </span>
            </span>
        </a>
        )}
        <li className="cursor-pointer" onClick={(e) => {
                        manageJwtToken.removeTokenFromLocalStorage()
                        window.location.reload()
                    }}>Deconnexion</li>
        </div>

    </div>
</div>
    )
}

function NavBar() {
    return (
        <nav className=" py-3 px-5 flex justify-center">

            <Link href="/">
                <div className="cursor-pointer flex ">
                  <img src="/logo.png" className="h-10 mr-3" />

                <button className="hidden md:flex font-bold text-white bg-green-900 px-2 text-sm rounded-md flex items-center mr-2"> <PlusCircleIcon className="w-5 h-5 mr-2" />  Déposer une annonce</button>
                <button className="hidden md:flex font-bold  px-2 py-1 rounded-md flex items-center text-sm"> <SearchIcon className="w-5 h-5 mr-2" />  Rechercher</button>
                </div>
            </Link>
            <div className="menu  ml-auto  max-w-[400px]">

                <ul className="hidden  space-x-4  md:flex">

                    <li className="flex flex-col items-center text-sm cursor-pointer hover:text-md hover:border-b-2 pb-[2px] transition duration-500 ease-in-out hover:border-red-400"> <BellIcon className="h-7" /> Mes recherches</li>
                    <li className="flex flex-col items-center text-sm cursor-pointer hover:text-md hover:border-b-2 pb-[2px] transition duration-500 ease-in-out hover:border-red-400"> <HeartIcon className="h-7" /> Favoris</li>
                    <li className="flex flex-col items-center text-sm cursor-pointer hover:text-md hover:border-b-2 pb-[2px] transition duration-500 ease-in-out hover:border-red-400"> <ChatIcon className="h-7" /> Messages</li>
                    <li className="flex flex-col items-center text-sm cursor-pointer hover:text-md hover:border-b-2 pb-[2px] transition duration-500 ease-in-out hover:border-red-400"> <UserIcon className="h-7" /> Se connecter</li>

                    
                </ul>

                <MobileButtonNav />

            </div>

            
        </nav>
    )
}

export default NavBar