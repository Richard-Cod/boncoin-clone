import { useRouter } from 'next/router'
import React from 'react'
import PagesLayout from '../../../app/layout/PagesLayout'


function index() {
    const router = useRouter()
       const {city} = router.query
    return (
        <PagesLayout>

        <div className="h-[90vh]">
            <h1 className="text-3xl text-center"> {city} </h1>
        </div>
        </PagesLayout>
    )
}

export default index
