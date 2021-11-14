import { useEffect , useState } from "react"
import AutoCompleteContainer from './AutoCompleteContainer'

export default function Completion({inputValue ,CompletionItems ,  data}) {
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

