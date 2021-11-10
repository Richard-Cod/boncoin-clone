import React from 'react'

import {ChevronLeftIcon, ChevronRightIcon, MenuIcon, PlusIcon } from '@heroicons/react/solid'
import { HeartIcon , BellIcon , ChatIcon , UserIcon , PlusCircleIcon , SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { KRoutes } from '../../constants/KRoutes'

import Drawer , {DrawerList ,DrawerListItem  } from './Drawer'

const FirstDrawer = () => {
    const titleIcons1 =  [
        {title : "Qui sommes-nous ?"},
        {title : "Nous rejoindre"},
        {title : "Conditions générales d'utilisation"},
]
const Label =() => <DrawerListItem isSuper label="Informations pratiques"  className="w-96"  />

return <Drawer Label={Label} 
        TopCloseLabel = {() => <DrawerListItem label="Retour au menu" className="w-96 text-green-400" LeftIcon={<ChevronLeftIcon className="h-6 mr-4 text-gray-400 text-green-400"/>} /> }
        >
            <hr />
               <DrawerList hrIndex={null} list={titleIcons1} />
    </Drawer>
}

function MobileButtonNav() {
    const Label = () => <MenuIcon className="h-8"/>  
    
    const titleIcons =  [
            {title : "Déposer une annonce" , LeftIcon : PlusIcon},
            {title : "Rechercher", LeftIcon : SearchIcon},
            {title : "Messages", LeftIcon : ChatIcon},
            {title : "Favoris", LeftIcon : HeartIcon},
            {title : "Recherches sauvegardées", LeftIcon : BellIcon},
    ]
 

    return (
        <div className=" md:hidden">
             <Drawer Label={Label} > 
            <DrawerList list={titleIcons} />

                <ul className="pl-4">
                    <DrawerListItem className="text-green-400" label="Se connecter" />
                    <hr/>
                    <FirstDrawer />
                    <DrawerListItem isSuper label="Lebonplan groupe" />
                </ul> 

              </Drawer>
        </div>
    )
}

function NavBar() {
    const listCLasses = "flex flex-col items-center text-sm cursor-pointer hover:text-md hover:border-b-2 pb-[2px] transition duration-500 ease-in-out hover:border-red-400"
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
                    <li className={listCLasses}> <BellIcon className="h-7" /> Mes recherches</li>
                    <li className={listCLasses}> <HeartIcon className="h-7" /> Favoris</li>
                    <li className={listCLasses}> <ChatIcon className="h-7" /> Messages</li>
                    <li className={listCLasses}> <UserIcon className="h-7" /> Se connecter</li>
                </ul>

                <MobileButtonNav />
            </div>
        </nav>
    )
}

export default NavBar