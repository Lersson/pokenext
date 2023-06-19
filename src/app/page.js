import Card from "@/components/Card"
import Image from "next/image"
import getPokemons from "./lib/getPokemons"
import SearchBar from "@/components/SearchBar";

export default async function Home() {

    const pokemons = await getPokemons()
    // console.log(pokemons);

    return (

        <>  
            <div className="flex gap-4 justify-center mb-4">
                <h1 className="text-5xl font-bold text-red-600">Poke <span className="text-gray-800 dark:text-white">Next13</span></h1>
                <Image src={'/images/pokeball.png'} width={50} height={50} alt="PokeNext13"/>
            </div>

            <SearchBar pokemons={pokemons}/>
        </>
    )
}
