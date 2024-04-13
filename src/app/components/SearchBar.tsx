import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Location } from "../interfaces/location";
import { searchLocationByKey } from "../api/location";


export default function SearchBar({
    location,
    onSearch,
  }: {
    location: Location;
    onSearch: (location: Location) => Promise<void>;
  }) {

    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Location[]>([]);
    
    const onLocationInputChange = async (input: string) => {
        setSearchInput(input);
        await searchLocation(input);
    }

    const searchLocation = async (locationSearchKey: string) => {
        setSearchResults(await searchLocationByKey(locationSearchKey));
    };

    return(
        <div className='max-w-md mx-auto flex h-screen'>
            <div className="m-auto flex items-center w-full h-12 rounded-lg shadow-lg bg-white overflow-hidden border border-slate-300 focus-within:border-sky-500 focus-within:ring-sky-500">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search a city..." 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    onLocationInputChange(e.target.value)
                }
                />

                { /*<ul className="absolute z-10 w-full border border-gray bg-slate-50 rounded text-black">
                {searchResults.map((location) => (
                    <li
                    key={location.key}
                    className="hover:bg-slate-400 cursor-pointer px-2"
                    onClick={(e) => {
                        onSearch(location);
                    }}
                    >
                    {location.cityName}, {location.administrativeAreaName},{" "}
                    {location.countryId}
                    </li>
                ))}
            </ul> */}
            </div>
        </div>
    )
    


}