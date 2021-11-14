import { SearchIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Completion from './Completion'

export default function SearchInput() {
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
