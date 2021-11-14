import { LocationMarkerIcon, XCircleIcon } from "@heroicons/react/outline";


export default function PlaceFilterItem({name}) {
    return (
            <div className="flex justify-between items-center px-1 py-1 border-[1px] mx-auto cursor-pointer rounded-full w-40">
                <LocationMarkerIcon className="h-4 mr-2" />
                <span className="text-sm md:hidden"> {name} </span>
                <XCircleIcon className="h-5 text-gray-400" />
            </div>
    )
}
