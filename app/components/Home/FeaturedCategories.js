import { useState , useEffect } from "react"
import homeBrain from "../../brain/homeBrain"
import { KRoutes } from "../../constants/KRoutes"

  function Category({name , image}) {
    return (
      <a href={KRoutes.categoryOffer(name)}>
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
      </a>
    )
  }
  
 export default function FeaturedCategories() {
     const [featuredCategoriesData, setfeaturedCategoriesData] = useState()
     useEffect(() => {
        const asyncFunc = async () => {
            try {
                const data = await homeBrain.getTopCategories()
                console.log(data)
                setfeaturedCategoriesData(data)
            } catch (error) {
                console.log(error)
            }
        }
        asyncFunc()

     }, [])
    return (
      <div className="px-8 mt-4 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-4">Top catégories</h2>
  
      <div style={{
        boxShadow : "10px 0 5px -2px #C6C5C5"
      }} className="flex overflow-x-scroll max-w-4xl overflow-y-hidden">
        
        {featuredCategoriesData ? 
        featuredCategoriesData.map((value) => <Category key={value.name} name={value.name} image={value.image} />):
        <p>Loading .....</p>
         }

      </div>
  
            
    </div>
    )
  }