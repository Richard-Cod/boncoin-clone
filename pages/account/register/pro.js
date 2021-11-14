import React from 'react'
import CInput from '../../../app/components/shared/CInput'
import PagesLayout from '../../../app/layout/PagesLayout'


function pro() {
    return (
        <PagesLayout>
            <div className="md:flex md:items-center lg:max-w-6xl mx-auto">
                <div className=" lg:mx-auto pl-4 pb-10  ">
                    <img src="/aa.png" className="h-32 mx-auto my-4 lg:hidden" />
                    <h1 className="font-semibold text-center text-xl lg:text-left my-5 ">Création de compte professionnel</h1>
                    <h2 className="mb-12 mt-5 text-lg font-semibold">Entreprise</h2>

                    <div className="space-y-10 ">
                        <div className="md:flex md:justify-between md:space-x-5  ">
                                <CInput label="SIRET" placeholder=" " />
                                <div className="w-full">
                                    <CInput label="Nom de la société" placeholder=" " />
                                    <span className="text-blue-500 text-xs">Le nom de votre société sera visible sur vos annonces</span>
                                </div>
                        </div>

                        <div className="md:flex md:justify-between md:space-x-5   ">
                                <CInput label="Catégorie associée à votre activité" placeholder=" " />
                                <CInput label="Adresse" placeholder=" " />
                        </div>

                        <div className="md:flex md:justify-between md:space-x-5   ">
                                <CInput label="Ville ou code postal" placeholder="Saisissez une localisation" />
                                <CInput label="Téléphone" placeholder=" " />
                        </div>


                    </div>

                    <hr />

                    <h2 className="mb-10 mt-5 text-lg font-semibold">Compte</h2>

                    <div>
                        <h2 className="mb-2 mt-5">Civilité</h2>

                        <div>
                            <label className="cradio mr-4 ">
                                <input type="radio" className="" name="civility" value="css" defaultChecked />
                                <span className="text-xs">Monsieur</span>
                            </label>
                            <label className="cradio">
                                <input type="radio" name="civility" value="no" />
                                <span className="text-xs">Madame</span>
                            </label>

                        </div>
            

                        <div className="space-y-10 mt-10 ">
                            <div className="md:flex md:justify-between md:space-x-5   ">
                                    <CInput label="Nom" placeholder=" " />
                                    <CInput label="Prénom" placeholder=" " />
                            </div>

                            <div className="md:flex md:justify-between md:space-x-5   ">
                                    <CInput label="E-mail" placeholder=" " />
                                    <CInput label="Mot de passe" placeholder=" " />
                            </div>


                            <p className="text-xs text-gray-400">En créant mon compte professionnel je reconnais avoir lu et accepté les Conditions Générales de Vente et les Conditions Générales d‘Utilisation.
                            </p>

                            <button className="rounded-lg bg-green-400 py-2 px-4 font-semibold text-sm disabled:bg-gray-200 disabled:text-gray-400" >Créer mon compte professionnel</button>


                            <p className=" text-xs text-gray-400">
                                Me renseigner sur les finalités du traitement de mes données personnelles, les destinataires, le responsable de traitement, les durées de conservation, les coordonnées du DPO et mes droits.
                            </p>

                    </div>

                    </div>

                
                </div>

                <div className="hidden lg:block">
                    <img src="/aa.png" className="h-56 mx-auto my-4" />
                </div>
        </div>
        </PagesLayout>
    )
}

export default pro
