import React from 'react'

import {ChevronDownIcon, MenuIcon, XCircleIcon } from '@heroicons/react/solid'
import { PlusCircleIcon , SearchIcon  , LocationMarkerIcon} from '@heroicons/react/outline'
import Link from 'next/link'

import { KRoutes } from '../../constants/KRoutes'
import CategoriesDrawer from './CategoriesDrawer'


 function DesktopForm() {
    return (
        <div style={{boxShadow : "1px 1px 4px #eee"}} className="hidden md:block px-10 border-2 border-gray-200 py-4 max-w-4xl mx-auto">

        <div>
          <label className="cradio mr-4 ">
              <input type="radio" className="" name="radio-button" value="css" checked />
              <span className="text-xs">Offres</span>
          </label>
          <label className="cradio">
              <input type="radio" name="radio-button" value="no" />
              <span className="text-xs">Demandes</span>
          </label>

        </div>


        <div className="mt-4 flex">
            <ChooseCategory/>
            <SearchInput />
            <CityInput />
        </div>

        <PriceFilterItem />


      </div>
    )

    
}

function SearchInput() {
    return <div className="md:bg-[#F4F6F7] flex items-center px-4 py-2  text-gray-400 cursor-pointer border-2">
        <SearchIcon className="h-5 mr-2" />
        <input className="bg-transparent outline-none flex-1" placeholder="Que recherchez-vous ?" />
    </div>
}

function CityInput() {
    return <div className="bg-[#F4F6F7] flex items-center px-4 py-2  text-gray-400 cursor-pointer ml-2 flex-1">
        <LocationMarkerIcon className="h-5 mr-2" />
        <input className="bg-transparent outline-none flex-1" placeholder="Saisissez une ville et un rayon" />
    </div>
}



const ChooseCategory = () => <CategoriesDrawer />

function PlaceFilterItem({name}) {
    return (
            <div className="flex justify-between items-center px-1 py-1 border-[1px] mx-auto cursor-pointer rounded-full w-40">
                <LocationMarkerIcon className="h-4 mr-2" />
                <span className="text-sm md:hidden"> {name} </span>
                <XCircleIcon className="h-5 text-gray-400" />
            </div>
    )
}

function PriceFilterItem() {
    return (
           
            <button className="hidden md:block px-4 py-1 border-[1px] rounded-full mt-2 text-sm">Prix</button>
    )
}



 function MobileForm() {
    return (
  
            <div style={{boxShadow : "1px 1px 4px #eee"}} 
            className="px-5 md:hidden md:border-2 border-gray-200 py-4 max-w-4xl mx-auto">

                 <CategoriesDrawer />
                <div className="my-3"></div>
                <SearchInput />

                <div className="mt-2">
                    <PlaceFilterItem  name="Toute la France"/>   
                </div>

            </div>
  
    )
}

 function DesktopSlider() {
    return (
        <Link href="https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjsubnnc15k89DQBHtzX7_Ey7XUXDLc1-mvniljlwZKiZoTzY4Tmv0cwNP-i5u24kt7HEWYYMxo60BEWLdxpyhfcPbKGYnXEN_3Uq-uLDqiSeOij7qfsT6cF0jBKbjiAGHqfEQsjSEdC7bB_tSAab4L6VmbmbYOAoDHZroslNo53mUSQBnOMpclhG3ch2MMJmNvQz-Y7YFbirIP4Ttw6z--uFyItl_OJ6pIHTUcQK1EuoA4bFu2g6jft2w_vEvdbe4Qo4JoO5MwKmCL9OcpYPqnf1dH-e2DYt3EnqSzLlnovSeg44OfUk1Ct77EVqrWhPhMUqHV2ndJ2GtbWjMvgvh-PaWag%2526sai%253DAMfl-YRb_EgaFNaUFR37ok9uLCAB8YGJhtnJ5SpmcYD1HCBc96IqsTrepRImXorPcmiuWbRzz3-GMADki5S5dhm7Qp-bNUaDpVE74ursJCpugXiE9w2Yofw8rwBef8cvS4U%2526sig%253DCg0ArKJSzI4rrOcmMHfOEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://www.cdiscount.com/?novembre&cm_mmc=6112021-_-leboncoin-_-cdf-_-noelt1&idfa=1&cid=media_med">
        <img src="/desktopSlider.jpeg" className="h-56 w-full hidden sm:block cursor-pointer max-w-4xl mx-auto" />
     </Link>
    )
}

function MobileSlider() {
    return (
        <Link href="https://adclick.g.doubleclick.net/pcs/click%253Fxai%253DAKAOjsubnnc15k89DQBHtzX7_Ey7XUXDLc1-mvniljlwZKiZoTzY4Tmv0cwNP-i5u24kt7HEWYYMxo60BEWLdxpyhfcPbKGYnXEN_3Uq-uLDqiSeOij7qfsT6cF0jBKbjiAGHqfEQsjSEdC7bB_tSAab4L6VmbmbYOAoDHZroslNo53mUSQBnOMpclhG3ch2MMJmNvQz-Y7YFbirIP4Ttw6z--uFyItl_OJ6pIHTUcQK1EuoA4bFu2g6jft2w_vEvdbe4Qo4JoO5MwKmCL9OcpYPqnf1dH-e2DYt3EnqSzLlnovSeg44OfUk1Ct77EVqrWhPhMUqHV2ndJ2GtbWjMvgvh-PaWag%2526sai%253DAMfl-YRb_EgaFNaUFR37ok9uLCAB8YGJhtnJ5SpmcYD1HCBc96IqsTrepRImXorPcmiuWbRzz3-GMADki5S5dhm7Qp-bNUaDpVE74ursJCpugXiE9w2Yofw8rwBef8cvS4U%2526sig%253DCg0ArKJSzI4rrOcmMHfOEAE%2526fbs_aeid%253D%255Bgw_fbsaeid%255D%2526urlfix%253D1%2526adurl%253Dhttps://www.cdiscount.com/?novembre&cm_mmc=6112021-_-leboncoin-_-cdf-_-noelt1&idfa=1&cid=media_med">
        <img src="/mobileSlider2.jpeg" className="h-36 w-full sm:hidden cursor-pointer" />
     </Link>
    )
}

function FindForm() {
    return (
        <div >
            
            <DesktopSlider />
            <MobileSlider />
           
            <div className="max-w-4xl mx-auto bg-white">


                <MobileForm />
                <h1 className="md:text-2xl mt-4 mb-4 text-center block">Trouvez la bonne affaire parmi les millions de petites annonces</h1>
                <DesktopForm />


                <div className="px-4 md:px-0">
                <button 
                    className="w-full sm:w-auto flex justify-center sm:mx-auto mt-4 font-bold text-white bg-green-900 px-2 py-2 rounded-xs flex items-center mr-2"> 
                    <PlusCircleIcon className="w-5 h-5 mr-2" />  
                     Déposer une annonce</button>
                </div>

                

              
            </div>
        </div>
    )
}


export default FindForm

