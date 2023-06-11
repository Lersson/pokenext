import Card from "@/components/Card"
import Image from "next/image"
import getPokemons from "./lib/getPokemons"

export default async function Home() {

    const pokemons = await getPokemons()
    console.log(pokemons);

    return (

        <>  

            <div className="flex gap-4 justify-center">
                <h1 className="text-5xl font-bold text-red-600">Poke <span className="text-gray-800">Next13</span></h1>
                <Image src={'/images/pokeball.png'} width={50} height={50} alt="PokeNext13"/>
            </div>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
                {pokemons.results.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    )
}
