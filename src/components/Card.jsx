import Image from "next/image";
import Link from "next/link";

export default function Card({pokemon}) {
    return (
        <div className="max-w-sm bg-gray-800 border border-green-500 rounded-md text-center flex flex-col shadow-md hover:scale-105">
            <div className="bg-green-600 rounded-t p-3">
                #{pokemon.idImage}
            </div>
            <div className="flex justify-center">
                <Image
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.idImage}.png`} //detail - imagem em baixa resolução
                    width={120}
                    height={120}
                    alt={pokemon.name}/>
            </div>
            
            <div className="py-4 hover:font-bold">{pokemon.name.toUpperCase()}</div>

            <Link href={`/pokemon/${pokemon.idImage}`}>
                <div className="bg-orange-500 rounded-b py-4 hover:bg-orange-400">
                    Informações
                </div>
            </Link>
        </div>
    )
}