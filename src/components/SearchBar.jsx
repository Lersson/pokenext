"use client"
import { useState } from "react";
import Card from "./Card";

function SearchBar({pokemons}) {

    // console.log(pokemons);
    const [query, setQuery] = useState('');

    // set the value of our useState query anytime the user types on our input
    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query);
    }

    //Function for multiple search filter
    const multipleSearch = (array) => {
    return array.filter((el) => 
            el.name.toString().toLowerCase().includes(query)
            )
    }

    //Applying our search filter function to our array of countries recieved from the API
    const filtered = multipleSearch(pokemons.results)
    // console.log(filtered);

	return (
        <>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 " placeholder="Pesquise pelo nome do Pokémon" 
                    onChange={handleChange}/>
            </div>

            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
                {filtered.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}

export default SearchBar;
