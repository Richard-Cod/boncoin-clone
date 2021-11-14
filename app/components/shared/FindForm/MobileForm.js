import CategoriesDrawer from "./CategoriesDrawer";
import SearchInput from "./SearchInput";
import PlaceFilterItem from "./PlaceFilterItem";

export default  function MobileForm() {
    return (
  
            <div style={{boxShadow : "1px 1px 4px #eee"}} 
            className="px-5 md:hidden md:border-2 border-gray-200 py-4 max-w-4xl mx-auto">

                 <CategoriesDrawer />
                <div className="my-3"></div>
                <SearchInput />

                <div className="mt-2">
                    <PlaceFilterItem  name="Toute la France"/>   
                </div>

            </div>
  
    )
}
