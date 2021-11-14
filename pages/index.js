import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import FindForm from '../app/components/shared/FindForm/FindForm'
import PagesLayout from '../app/layout/PagesLayout'

import BurkinaMap from '../app/components/BurkinaMap'
import FeaturedCategories from '../app/components/Home/FeaturedCategories'


function Home({user}) {

  return (
   <PagesLayout>
      <div className="py-2">
        <Head>
          <title>LeBonPlanOuaga </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FindForm />

      <FeaturedCategories />

      <BurkinaMap />
     
    </div>
   </PagesLayout>
  )
}



const mapStateToProps = state => {
  return ({
       user: state.user.value
   })
};

const mapDispatchToProps = {
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home;
