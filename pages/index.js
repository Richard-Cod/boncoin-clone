import Head from 'next/head'
import React from 'react'
import { connect } from 'react-redux'
import Posts from '../app/components/ProfilePage/Posts'
import FindForm from '../app/components/shared/FindForm'
import PostForm from '../app/components/shared/PostForm'
import PagesLayout from '../app/layout/PagesLayout'

import BurkinaMap from '../app/components/BurkinaMap'


const featuredCategoriesData = [
  {
    name : "Vêtements",
    image : "https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Offres d'emploi",
    image : "https://images.pexels.com/photos/7925821/pexels-photo-7925821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Vacances",
    image : "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Ventes immo",
    image : "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Voitures",
    image : "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name : "Ameublement",
    image : "https://images.pexels.com/photos/5143025/pexels-photo-5143025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Electroménager",
    image : "https://images.pexels.com/photos/1370082/pexels-photo-1370082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  },
  {
    name : "Décoration",
    image : "https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  }
]
function Category({name , image}) {
  return (
    <div style={{
    }} className="mr-2 relative rounded-lg">
      <img className="h-32 min-w-[150px]  rounded-lg" src={image} />

      <div 
      style={{
        background : "linear-gradient(rgb(0,0,0,0.1) , rgb(0,0,0,0.4) , rgb(0,0,0,0.8))"
      }}
      className="absolute bottom-0 py-1 w-full text-center rounded-b-lg ">
        <p className="text-white font-bold text-sm "> {name} </p>
      </div>
    </div>
  )
}

function FeaturedCategories() {
  return (
    <div className="px-8 mt-4 max-w-4xl mx-auto">
    <h2 className="text-2xl mb-4">Top catégories</h2>

    <div style={{
      boxShadow : "10px 0 5px -2px #C6C5C5"
    }} className="flex overflow-x-scroll max-w-4xl overflow-y-hidden">
      {featuredCategoriesData.map((value) => <Category name={value.name} image={value.image} />)}
    </div>

          
  </div>
  )
}


function Home({user}) {

  
  return (
   <PagesLayout>
      <div className="py-2">
      <Head>
        <title>Create Next App</title>
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
