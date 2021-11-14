import CategoriesDrawer from "./CategoriesDrawer";
import CityInput from "./CityInput";
import PriceFilterItem from "./PriceFilterItem";
import SearchInput from "./SearchInput";


export default function DesktopForm() {
    return (
        <div style={{boxShadow : "1px 1px 4px #eee"}} className="hidden md:block px-10 border-2 border-gray-200 py-4 max-w-4xl mx-auto">
        <div>
          <label className="cradio mr-4 ">
              <input type="radio" className="" name="radio-button" value="css" defaultChecked />
              <span className="text-xs">Offres</span>
          </label>
          <label className="cradio">
              <input type="radio" name="radio-button" value="no" />
              <span className="text-xs">Demandes</span>
          </label>
        </div>
        <div className="mt-4 flex">
            <CategoriesDrawer />
            <SearchInput />
            <CityInput />
        </div>
        <PriceFilterItem />
      </div>
    )
}
