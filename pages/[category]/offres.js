import { useRouter } from 'next/router'
import React from 'react'
import DesktopForm from '../../app/components/shared/FindForm/DesktopForm'
import OfferItem from '../../app/components/shared/Offers/OfferItem'
import PagesLayout from '../../app/layout/PagesLayout'


function OfferItems() {
    const router = useRouter()
    const {category} = router.query
    
    
 
    return (
        <div className="space-y-2 mt-2 mx-2 md:mx-4">
            <h1 className="text-2xl font-semibold">Annonces {category} : Tout le Burkina </h1>
            {[1,2,3,4].map((value) => <OfferItem />)}
        </div>
    )
}


function index() {
  
    return (
        <PagesLayout>

    <DesktopForm />

    <OfferItems />
        <div className="h-[90vh]">
           
        </div>
        </PagesLayout>
    )
}

export default index
