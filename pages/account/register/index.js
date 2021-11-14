import React from 'react'
import { KRoutes } from '../../../app/constants/KRoutes'
import PagesLayout from '../../../app/layout/PagesLayout'

function index() {
    return (
        <PagesLayout>

            <div className="md:flex md:max-w-4xl h-[90vh] mx-auto mt-20 " >

                <div className="w-full">
                    <h1 className="font-semibold text-2xl">Bienvenue!</h1>
                    <h1 className="text-lg">Créer un compte pour ...</h1>


                    <div className="mt-10">
                      <a className="text-blue-700" href={KRoutes.registerPart}>Moi</a>
                    </div>
                    
                    <div>
                     <a className="text-blue-700" href={KRoutes.registerPro}>Mon entreprise</a>
                    </div>

                    <h1 className="mt-10">Vous avez déja un compte ?</h1>
                    <a href={KRoutes.login} className="text-blue-700">Me connecter</a>
                </div>

                <img  src="/choix.jpg" className="h-96" />

            </div>
        </PagesLayout>
    )
}

export default index
