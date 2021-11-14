import React, { useState , useEffect } from 'react'

import { GlobeAltIcon, XCircleIcon } from '@heroicons/react/solid'
import { PlusCircleIcon , SearchIcon  } from '@heroicons/react/outline'
import {  LocationMarkerIcon} from '@heroicons/react/solid'
import Link from 'next/link'

import { KRoutes } from '../../constants/KRoutes'
import CategoriesDrawer from './CategoriesDrawer'
import { setCategoryTitle, setCityTitle } from '../../redux/actions/homeActions'
import { connect, useDispatch } from 'react-redux'
import { Slider, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#1F4E3B',
      main: '#1F4E3B',
      dark: '#1F4E3B',
      contrastText: '#fff',
    },
  },
});



 function DesktopForm() {
    return (
        <div style={{boxShadow : "1px 1px 4px #eee"}} className="hidden md:block px-10 border-2 border-gray-200 py-4 max-w-4xl mx-auto">

        <div>
          <label className="cradio mr-4 ">
              <input type="radio" className="" name="radio-button" value="css" defaultChecked />
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

function AutoCompleteContainer({children}) {
    return (
        <div className="border-2  absolute top-10 w-full left-0 z-50 bg-white">
            {children}
        </div>
    )
}

 function Completion({inputValue ,CompletionItems ,  data}) {
     const [showCompletion, setshowCompletion] = useState(false)
     useEffect(() => {
         if(inputValue?.length > 0) return setshowCompletion(true) 
         setshowCompletion(false)
     }, [inputValue])

    return (
        <AutoCompleteContainer >
            {showCompletion && CompletionItems   }         
        </AutoCompleteContainer>
    )
}


function SearchInput() {
    const dispatch = useDispatch()
    const [query, setquery] = useState("")
    const completionItems = ["Vélos" , "Vélos"].map((value , index)  => {
                return <li key={index} onClick={() => {
                    dispatch(setCategoryTitle(query))
                    setshowCompletion(false)
                }} className="flex px-4  py-2 text-sm hover:bg-gray-200">  <SearchIcon className="h-5 mr-2" /> {query} dans <span className="text-green-400 ml-2">Vélos</span> </li>
            } )

    return <div className="md:bg-[#F4F6F7] flex items-center px-4 py-2  cursor-pointer border-2 relative">
        <SearchIcon className="h-5 mr-2  text-gray-400" />
        <input onChange={(e) => setquery(e.target.value)} className="bg-transparent outline-none flex-1" placeholder="Que recherchez-vous ?" />
        <Completion CompletionItems={completionItems} inputValue={query} />
    </div>
}

function CityInput() {
    const dispatch = useDispatch()

    const data =  [
		{id:"BF-01" , title : "Boucle du Mouhoun"},
		{id:"BF-02" , title : "Cascades"},
		{id:"BF-03" , title : "Center"},
		{id:"BF-04" , title : "Centre-Est"},
		{id:"BF-05" , title : "Centre-Nord"},
		{id:"BF-06" , title : "Centre-Ouest"},
		{id:"BF-07" , title : "Centre-Sud"},
		{id:"BF-08" , title : "Est"},
		{id:"BF-09" , title : "Hauts-Bassins"},
		{id:"BF-10" , title : "Nord"},
		{id:"BF-11" , title : "Plateau-Central"},
		{id:"BF-12" , title : "Sahel"},
		{id:"BF-13" , title : "Sud-Ouest"}
 ]

 const [query, setquery] = useState("")
 const [showCard, setshowCard] = useState(false)

 const completionItems = data.map(({title} , index)  => {
    return <li key={index} onClick={() => {
        // dispatch(setCategoryTitle(query))
        // setshowCompletion(false)
    }} className="flex px-4 py-2 text-sm hover:bg-gray-200">  {title}  </li>
} )

    return <div className="bg-[#F4F6F7] flex items-center px-4 py-2   cursor-pointer ml-2 flex-1 relative">
        <LocationMarkerIcon className="h-5 mr-2 text-gray-400" />
        <input 
        onFocus={() => setshowCard(true)}
        onBlur={() => setshowCard(false)}
        
        onChange={(e) => setquery(e.target.value)} className="bg-transparent outline-none flex-1" placeholder="Saisissez une ville et un rayon" />
        <Completion CompletionItems={completionItems} inputValue={query} />

        {showCard && <AutoCompleteContainer>
           <div className="px-4 py-4">
            <p className="font-semibold text-sm  mb-10">Dans un rayon autour de </p>
           <ThemeProvider theme={theme}>
             <Slider step={10} max={200} defaultValue={50} valueLabelDisplay="on"/>
            </ThemeProvider>
            <div className="flex justify-between text-xs mt-[-10px]"> <span>0km</span>  <span>200km</span></div>
           <hr className="mt-5" />
            <p className="font-semibold text-sm mt-4 mb-6">Localisations récentes </p>
            <p className="font-semibold text-sm  mb-2 flex items-center"> <LocationMarkerIcon className="h-4 mr-2" /> Tout le Burkina </p>
           <hr className="my-4" />


            <p className="font-semibold text-gray-400 text-sm  mb-2 flex items-center"> <GlobeAltIcon className="h-4 mr-2" /> Autour de moi </p>
           <hr className="my-4" />
           <div className="flex justify-between text-sm "> <span className="text-gray-400">Effacer</span>  <span className="text-green-400 font-semibold">Valider les Localisations</span></div>


           </div>
            </AutoCompleteContainer>
        }

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
function FindForm({categoryTitle }) {
    console.log(" " ,categoryTitle )
    return (
        <div >
            <DesktopSlider />
            <MobileSlider />
            <div className="max-w-4xl mx-auto bg-white">
                <MobileForm  />
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


const mapStateToProps = state => ({
    categoryTitle: state.home.categoryTitle,
    cityTitle: state.home.cityTitle,
});

const mapDispatchToProps = {
    setCategoryTitle,
    setCityTitle
};

FindForm = connect(mapStateToProps, mapDispatchToProps)(FindForm)


export default FindForm

