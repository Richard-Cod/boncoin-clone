import {ArrowLeftIcon, BriefcaseIcon, ChevronDownIcon, MenuIcon, SunIcon, TruckIcon } from '@heroicons/react/solid'
import Drawer , {  DrawerList } from './Drawer'

function CategoriesDrawer() {
    const categoriesList = [
        {title : "Toutes catégories" , LeftIcon : MenuIcon  },
        {title : "Vacances" , LeftIcon : SunIcon  },
        {title : "Emploi" , LeftIcon : BriefcaseIcon  },
        {title : "Véhicules" , LeftIcon : TruckIcon  },
        {title : "Immobilier" , LeftIcon : MenuIcon  },
    ]
    
    const Label = ()  => <div className="bg-[#F4F6F7] flex justify-between items-center px-4 py-2 border-r-2 cursor-pointer ">
        <MenuIcon className="h-5 mr-2" />
        
        <span className="text-sm  md:hidden ">Choisissez votre catégories</span>
        <span className="text-sm hidden md:block ">catégories</span>
        <ChevronDownIcon className="h-7 text-gray-400" />

    </div>

    return (
        <Drawer showLogo={false} anchor="right" 
                Label={Label} 
                TopCloseLabel = {() => <div style={{
                    boxShadow : "1px 1px 2px gray"
                }} className="flex border-2 py-4 cursor-pointer ">
                    <ArrowLeftIcon className="h-5 ml-2 text-green-400" />
                     <span className="text-green-400 text-center flex-1 font-bold">Catégories</span>
                </div>}
                SubDrawerLabel="Catégories" > 
                    <DrawerList iconsClasses="text-gray-400" allHrIndex isSuper list={categoriesList} />
                </Drawer>
    )
}

export default CategoriesDrawer
