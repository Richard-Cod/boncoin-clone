import React, { useState , useEffect } from 'react'

import { PlusCircleIcon   } from '@heroicons/react/outline'
import { setCategoryTitle, setCityTitle } from '../../../redux/actions/homeActions'
import { connect } from 'react-redux'
import { createTheme } from '@mui/material/styles';
import DesktopForm from './DesktopForm';
import MobileForm from './MobileForm';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';


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


function FindForm({categoryTitle }) {
    console.log(" " ,categoryTitle )
    return (
        <div >
            <DesktopSlider />
            <MobileSlider />
            <div className="max-w-4xl mx-auto bg-white">
                <MobileForm  />
                <h1 className="md:text-2xl mt-4 mb-4 text-center block">Trouvez la bonne affaire parmi les millions de petites annonces</h1>
                <DesktopForm  />
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

