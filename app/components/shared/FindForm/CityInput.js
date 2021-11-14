import { GlobeAltIcon, LocationMarkerIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useDispatch } from "react-redux"
import AutoCompleteContainer from "./AutoCompleteContainer"
import Completion from "./Completion"


export default  function CityInput() {
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